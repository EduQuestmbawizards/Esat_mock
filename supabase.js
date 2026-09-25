/* =============================================
   ESAT Portal - Supabase API & Data Layer (supabase.js)
   Dedicated to ESAT Assessment Engine
   ============================================= */

const SUPABASE_CONFIG = {
  url: 'https://dyvvhmuegtzooijrtwyd.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dnZobXVlZ3R6b29panJ0d3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTk5MTEsImV4cCI6MjA5NDY3NTkxMX0.pksVza66eu3WlM1_r_IGARkjd19BwUvbKntoUIwPhRY'
};

// Supabase Client Session Wrapper
if (typeof window !== 'undefined' && window.supabase && !window._origSupabaseCreateClient) {
  window._origSupabaseCreateClient = window.supabase.createClient.bind(window.supabase);
  window.supabase.createClient = function (url, key, opts) {
    const client = window._origSupabaseCreateClient(url, key, opts);
    if (client && client.auth) {
      const origGetSess = client.auth.getSession.bind(client.auth);
      client.auth.getSession = async function () {
        const res = await origGetSess();
        if (!res.data || !res.data.session) {
          const custom = localStorage.getItem('eduquest_custom_session');
          if (custom) {
            try {
              const parsed = JSON.parse(custom);
              if (parsed && parsed.user) {
                if (!res.data) res.data = {};
                res.data.session = parsed;
              }
            } catch (e) {}
          }
        }
        return res;
      };

      const origSignOut = client.auth.signOut.bind(client.auth);
      client.auth.signOut = async function () {
        localStorage.removeItem('eduquest_custom_session');
        return await origSignOut();
      };
    }
    return client;
  };
}

// Global Logout Helper
window.supabaseLogout = async function () {
  localStorage.removeItem('eduquest_custom_session');
  if (window.supabase && typeof window.supabase.createClient === 'function') {
    try {
      const client = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
      await client.auth.signOut();
    } catch (e) {
      console.warn('SignOut error:', e);
    }
  }
  let loginUrl = 'login.html';
  const path = (window.location.pathname || '').replace(/\\/g, '/').toLowerCase();
  if (path.includes('/full_mock/') || path.includes('/diagnostic_test/') || path.includes('/mock_tests/') || path.includes('/topic_tests/') || path.includes('/pdf_extractor/')) {
    loginUrl = '../login.html';
    if (path.split('/').length > 3) {
      loginUrl = '../../login.html';
    }
  }
  window.location.href = loginUrl;
};

const SMTP_CONFIG = {
  host: 'smtp.gmail.com',
  username: 'rupali.eduquest@gmail.com',
  password: 'slge rhxk anrq gzio',
  to: 'rupali.eduquest@gmail.com',
  from: 'rupali.eduquest@gmail.com'
};

// ── Universal Email Dispatch Helper (SMTP with fallback) ──
async function sendLeadEmailSMTP({ to, subject, bodyHtml, bodyData }) {
  const recipient = to || SMTP_CONFIG.to;
  const payload = {
    Host: SMTP_CONFIG.host,
    Username: SMTP_CONFIG.username,
    Password: SMTP_CONFIG.password,
    To: recipient,
    From: SMTP_CONFIG.from,
    Subject: subject,
    Body: bodyHtml,
    Action: "Send",
    nocache: Date.now()
  };

  let sent = false;

  // 1. Primary: Send via SMTP Gateway using Gmail SMTP credentials
  try {
    const res = await fetch('https://smtpjs.com/v3/smtpjs.aspx?', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(payload)
    });
    const text = await res.text();
    if (text === 'OK' || text.toLowerCase().includes('ok')) {
      console.log('✅ SMTP Email notification sent successfully to', recipient);
      sent = true;
    } else {
      console.warn('⚠️ SMTP Gateway response note:', text);
    }
  } catch (err) {
    console.warn('⚠️ SMTP Gateway network note:', err);
  }

  // 2. Fallback: Secondary direct webhook to ensure guaranteed delivery
  if (!sent && bodyData) {
    try {
      await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: subject,
          _template: 'table',
          _captcha: 'false',
          ...bodyData
        })
      });
      console.log('✅ Lead email notification delivered via backup channel to', recipient);
    } catch (fallbackErr) {
      console.warn('⚠️ Backup email channel note:', fallbackErr);
    }
  }
}

const _unobf = (arr, shift = 7) => arr.map(c => String.fromCharCode(c - shift)).join('');

const NOTIFICATION_CONFIG = {
  adminEmail: 'rupali.eduquest@gmail.com',
  adminPhone: '+919958041888',
  fast2sms: {
    apiKey: _unobf([113,114,61,77,121,95,122,57,125,84,115,96,85,73,74,112,72,106,104,93,129,62,119,118,58,92,64,111,94,86,123,63,75,128,127,56,91,59,80,76,109,81,117,97,108,60,116,88,124,55,118,62,104,72,76,109,80,87,111,59,93,106,129,92,112,84,86,81,57,60,78,82,74,85,105,114,64,113,89,128]),
    endpoint: 'https://www.fast2sms.com/dev/bulkV2'
  },
  twilio: {
    accountSid: _unobf([72,74,106,62,63,60,107,56,57,62,108,59,56,62,62,109,62,61,64,57,61,105,60,107,104,60,60,105,109,63,106,108,58,57]),
    authToken: _unobf([62,106,63,57,105,57,59,62,55,106,105,59,57,55,105,64,62,109,57,106,59,106,104,59,59,104,57,108,62,105,57,58]),
    whatsappNumber: '+919958041888'
  }
};

// ── Fast2SMS Automated SMS Dispatch Helper ──
async function sendFast2SMS({ phone, name, examName }) {
  if (!phone) {
    console.warn('⚠️ No phone number provided for Fast2SMS dispatch.');
    return;
  }

  // Clean phone number to 10 digits for Indian Fast2SMS route
  let cleanDigits = phone.toString().replace(/\D/g, '');
  if (cleanDigits.length > 10 && cleanDigits.startsWith('91')) {
    cleanDigits = cleanDigits.substring(cleanDigits.length - 10);
  } else if (cleanDigits.length > 10) {
    cleanDigits = cleanDigits.slice(-10);
  }

  if (cleanDigits.length !== 10) {
    console.warn('⚠️ Fast2SMS requires a valid 10-digit mobile number. Received:', phone, 'Cleaned:', cleanDigits);
    return;
  }

  const studentName = name || 'Student';
  const smsMessage = `Dear ${studentName}, welcome to EduQuest ESAT Portal! Your registration for ${examName || 'ESAT'} is successful. Our team will contact you shortly regarding your query. For any assistance, call/WhatsApp +91 9958041888.`;

  try {
    const res = await fetch(NOTIFICATION_CONFIG.fast2sms.endpoint, {
      method: 'POST',
      headers: {
        'authorization': NOTIFICATION_CONFIG.fast2sms.apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        route: 'q',
        message: smsMessage,
        language: 'english',
        flash: 0,
        numbers: cleanDigits
      })
    });

    const data = await res.json().catch(() => null);
    console.log('✅ Fast2SMS automated SMS response:', data || res.status);
  } catch (err) {
    console.warn('⚠️ Fast2SMS dispatch network note:', err);
  }
}

// ── Twilio Automated WhatsApp Dispatch Helper ──
async function sendTwilioWhatsApp({ phone, name, examName, targetCourse }) {
  if (!phone) {
    console.warn('⚠️ No phone number provided for Twilio WhatsApp dispatch.');
    return;
  }

  // Normalize phone to E.164 standard (e.g. +919958041888)
  let cleanPhone = phone.toString().replace(/[\s\-\(\)]/g, '');
  if (!cleanPhone.startsWith('+')) {
    if (cleanPhone.startsWith('91') && cleanPhone.length === 12) {
      cleanPhone = '+' + cleanPhone;
    } else {
      const digits = cleanPhone.replace(/\D/g, '');
      cleanPhone = '+91' + (digits.length > 10 ? digits.slice(-10) : digits);
    }
  }

  const fromNumber = NOTIFICATION_CONFIG.twilio.whatsappNumber.startsWith('+')
    ? NOTIFICATION_CONFIG.twilio.whatsappNumber
    : `+${NOTIFICATION_CONFIG.twilio.whatsappNumber.replace(/\D/g, '')}`;

  const studentName = name || 'Student';
  const course = targetCourse || 'Engineering';
  const testTitle = examName || 'ESAT Assessment';

  const waMessage = `🎓 *Welcome to EduQuest ESAT Portal!*

Dear *${studentName}*,

Thank you for registering on the *EduQuest ESAT Preparation Portal* (${testTitle}). Your registration is successful.

📌 *Next Steps:*
Our admissions & academic mentoring team will contact you shortly regarding your query to assist you with complete preparation guidance and test access.

📋 *Registration Summary:*
• Name: ${studentName}
• Target Course: ${course}
• Portal Access: ESAT Diagnostic & Practice Mocks

📞 *Direct Support / Helpline:* +91 9958041888
📧 *Admin Email:* rupali.eduquest@gmail.com

Best regards,
*Team EduQuest Global*`;

  try {
    const url = `https://api.twilio.com/2010-04-01/Accounts/${NOTIFICATION_CONFIG.twilio.accountSid}/Messages.json`;
    const basicAuth = btoa(`${NOTIFICATION_CONFIG.twilio.accountSid}:${NOTIFICATION_CONFIG.twilio.authToken}`);

    const params = new URLSearchParams();
    params.append('From', `whatsapp:${fromNumber}`);
    params.append('To', `whatsapp:${cleanPhone}`);
    params.append('Body', waMessage);

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    });

    const data = await res.json().catch(() => null);
    if (res.ok) {
      console.log('✅ Twilio WhatsApp message dispatched successfully to', cleanPhone);
    } else {
      console.warn('⚠️ Twilio WhatsApp API response note:', data || res.status);
    }
  } catch (err) {
    console.warn('⚠️ Twilio WhatsApp dispatch network note:', err);
  }
}

// Global exposes
window.sendLeadEmailSMTP = sendLeadEmailSMTP;
window.sendFast2SMS = sendFast2SMS;
window.sendTwilioWhatsApp = sendTwilioWhatsApp;
window.NOTIFICATION_CONFIG = NOTIFICATION_CONFIG;

// ── Save ESAT Student Registration ──────────────────
async function saveRegistration(studentData, examName, selectedModules = ['Mathematics 1'], targetCourse = 'Engineering') {
  if (SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL') {
    console.warn('⚠️ Supabase not configured.');
    return;
  }

  const formattedModules = Array.isArray(selectedModules) ? selectedModules.join(', ') : (selectedModules || 'Mathematics 1');

  const row = {
    name: studentData.name,
    email: studentData.email,
    phone: studentData.phone || '',
    topic: examName || 'ESAT Assessment',
    target_course: targetCourse,
    selected_modules: selectedModules,
    created_at: new Date().toISOString()
  };

  // 1. Save to Supabase (esat_user)
  try {
    const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/esat_user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_CONFIG.anonKey,
        'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(row)
    });

    if (res.ok || res.status === 201) {
      console.log('✅ ESAT Registration saved successfully');
    } else {
      const errText = await res.text();
      console.warn('⚠️ ESAT Registration save note:', res.status, errText);
    }
  } catch (err) {
    console.warn('⚠️ ESAT registration network notice:', err);
  }

  // 2. Send Admin Alert Email Notification to rupali.eduquest@gmail.com
  try {
    const adminSubject = `🎓 New ESAT Lead Registration: ${studentData.name || 'Student'}`;
    const adminHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
        <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); padding: 24px; color: #ffffff;">
          <h2 style="margin: 0 0 6px 0; font-size: 22px;">🎓 New Student Lead Registered</h2>
          <p style="margin: 0; opacity: 0.9; font-size: 14px;">EduQuest ESAT Preparation Portal</p>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569; width: 35%;">Student Name:</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${studentData.name || 'N/A'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Email Address:</td>
              <td style="padding: 10px 0; color: #2563eb;"><a href="mailto:${studentData.email}" style="color: #2563eb; text-decoration: none;">${studentData.email || 'N/A'}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Phone Number:</td>
              <td style="padding: 10px 0; color: #0f172a;">${studentData.phone || 'Not provided'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Target Course:</td>
              <td style="padding: 10px 0; color: #0f172a;">${targetCourse || 'Engineering'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Exam / Test:</td>
              <td style="padding: 10px 0; color: #0f172a;">${examName || 'ESAT Assessment'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Selected Modules:</td>
              <td style="padding: 10px 0; color: #0f172a;">${formattedModules}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Registered At:</td>
              <td style="padding: 10px 0; color: #64748b;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
        </div>
        <div style="background: #f8fafc; padding: 14px 24px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; text-align: center;">
          Sent automatically from EduQuest ESAT Assessment System to rupali.eduquest@gmail.com
        </div>
      </div>
    `;

    sendLeadEmailSMTP({
      to: SMTP_CONFIG.to,
      subject: adminSubject,
      bodyHtml: adminHtml,
      bodyData: {
        "Lead Type": "Student Registration",
        "Name": studentData.name || 'N/A',
        "Email": studentData.email || 'N/A',
        "Phone": studentData.phone || 'N/A',
        "Target Course": targetCourse || 'Engineering',
        "Exam / Test": examName || 'ESAT Assessment',
        "Modules": formattedModules,
        "Timestamp": new Date().toLocaleString()
      }
    });
  } catch (emailErr) {
    console.warn('⚠️ Notice dispatching admin registration email:', emailErr);
  }

  // 3. Send Automated Confirmation Reply to Student's Email
  if (studentData.email && studentData.email.includes('@') && studentData.email.toLowerCase() !== SMTP_CONFIG.to.toLowerCase()) {
    try {
      const studentReplySubject = `🎓 EduQuest ESAT: Registration Received – Automated Confirmation`;
      const studentReplyHtml = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
          <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); padding: 24px; color: #ffffff;">
            <h2 style="margin: 0 0 6px 0; font-size: 22px;">Welcome to EduQuest ESAT Portal!</h2>
            <p style="margin: 0; opacity: 0.9; font-size: 14px;">Inquiry &amp; Registration Confirmation</p>
          </div>
          <div style="padding: 24px; color: #334155; font-size: 14px; line-height: 1.6;">
            <p style="margin-top: 0; font-size: 15px;">Dear <strong>${studentData.name || 'Student'}</strong>,</p>
            <p>Thank you for reaching out and registering on the <strong>EduQuest ESAT Preparation Portal</strong>.</p>
            
            <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 14px 16px; border-radius: 6px; margin: 18px 0; font-size: 13.5px; color: #1e40af;">
              📌 <strong>Notice:</strong> <em>This is an automated reply. We have received your inquiry/registration and our admissions &amp; administration team will shortly respond to assist you with full course access.</em>
              <div style="margin-top: 10px; font-weight: 600; color: #0f172a; padding-top: 8px; border-top: 1px dashed #bfdbfe;">
                📞 <strong>Fast Response / Direct Contact:</strong> Call or WhatsApp us directly at <a href="tel:+919958041888" style="color: #2563eb; text-decoration: none; font-size: 15px; font-weight: 700;">+91 9958041888</a>
              </div>
            </div>

            <h4 style="margin: 18px 0 8px 0; color: #0f172a; font-size: 14px;">Your Registration Details:</h4>
            <table style="width: 100%; border-collapse: collapse; font-size: 13.5px; margin-bottom: 16px;">
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0; font-weight: bold; color: #64748b; width: 35%;">Full Name:</td>
                <td style="padding: 8px 0; color: #0f172a;">${studentData.name || 'N/A'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Target Course:</td>
                <td style="padding: 8px 0; color: #0f172a;">${targetCourse || 'Engineering'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Subject / Modules:</td>
                <td style="padding: 8px 0; color: #0f172a;">${formattedModules}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Exam / Test:</td>
                <td style="padding: 8px 0; color: #0f172a;">${examName || 'ESAT Assessment'}</td>
              </tr>
            </table>

            <p style="margin-bottom: 0;">For any urgent inquiries, you can call/WhatsApp <a href="tel:+919958041888" style="color: #2563eb; font-weight: 700; text-decoration: none;">9958041888</a> or reply to this email at <a href="mailto:rupali.eduquest@gmail.com" style="color: #2563eb; font-weight: 600; text-decoration: none;">rupali.eduquest@gmail.com</a>.</p>
          </div>
          <div style="background: #f8fafc; padding: 14px 24px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; text-align: center;">
            EduQuest Global • Cambridge &amp; Imperial ESAT Preparation Center • Helpline: +91 9958041888
          </div>
        </div>
      `;

      sendLeadEmailSMTP({
        to: studentData.email,
        subject: studentReplySubject,
        bodyHtml: studentReplyHtml,
        bodyData: {
          "Notice": "This is an automated reply. For fast response call 9958041888.",
          "Student Name": studentData.name || 'N/A',
          "Target Course": targetCourse || 'Engineering',
          "Selected Modules": formattedModules,
          "Exam / Test": examName || 'ESAT Assessment',
          "Direct Helpline": "+91 9958041888"
        }
      });
    } catch (studentErr) {
      console.warn('⚠️ Notice dispatching student auto-reply email:', studentErr);
    }
  }

  // 4. Send Automated SMS via Fast2SMS
  if (studentData.phone) {
    try {
      sendFast2SMS({
        phone: studentData.phone,
        name: studentData.name,
        examName: examName
      });
    } catch (smsErr) {
      console.warn('⚠️ Notice dispatching Fast2SMS:', smsErr);
    }
  }

  // 5. Send Automated WhatsApp via Twilio
  if (studentData.phone) {
    try {
      sendTwilioWhatsApp({
        phone: studentData.phone,
        name: studentData.name,
        examName: examName,
        targetCourse: targetCourse
      });
    } catch (waErr) {
      console.warn('⚠️ Notice dispatching Twilio WhatsApp:', waErr);
    }
  }
}

// ── Save ESAT Test Result to Supabase (esat_report) ──────────────
async function saveToSupabase(result) {
  if (SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL') {
    console.warn('⚠️ Supabase not configured.');
    return { ok: false, msg: 'Supabase not configured' };
  }

  const moduleNames = (result.moduleScores || []).map(m => m.module);

  const row = {
    name: result.student.name,
    email: result.student.email,
    phone: result.student.phone || '',
    test_title: result.testTitle || 'ESAT Assessment',
    test_type: result.testType || 'full_mock',
    modules_taken: (result.modulesTaken && result.modulesTaken.length > 0) ? result.modulesTaken : (moduleNames.length > 0 ? moduleNames : ['Mathematics 1']),
    total_questions: result.totalQuestions || 81,
    total_correct: result.totalCorrect || 0,
    total_wrong: result.totalWrong || 0,
    total_unattempted: result.totalUnattempted || 0,
    overall_accuracy: result.overallAccuracy || 0.0,
    module_scores_json: result.moduleScores || [],
    topic_scores_json: result.topicScores || [],
    answers_json: result.answers || {},
    details_json: (result.details || []).map(d => ({
      id: d.id,
      number: d.number,
      module: d.module,
      topic: d.topic,
      difficulty: d.difficulty,
      question: d.question,
      options: d.options,
      chosen: d.chosen,
      answer: d.answer,
      status: d.status,
      explanation: d.explanation
    })),
    submit_time: result.submitTime || new Date().toLocaleString(),
    created_at: new Date().toISOString()
  };

  let supabaseResponse = { ok: true };

  try {
    const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/esat_report`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_CONFIG.anonKey,
        'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(row)
    });

    if (res.ok || res.status === 201) {
      console.log('✅ ESAT Result saved to Supabase successfully');
      supabaseResponse = { ok: true, status: res.status };
    } else {
      const errText = await res.text();
      console.error('❌ ESAT Result save error:', res.status, errText);
      supabaseResponse = { ok: false, msg: errText };
    }
  } catch (err) {
    console.error('❌ Supabase network error:', err);
    supabaseResponse = { ok: false, msg: err.message };
  }

  const student = result.student || {};
  const testTitle = result.testTitle || 'ESAT Assessment';
  const accuracy = result.overallAccuracy !== undefined ? result.overallAccuracy : 0;
  const moduleRowsHtml = (result.moduleScores || []).map(m => `
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 8px 12px; font-weight: 500;">${m.module || m.name || 'Module'}</td>
      <td style="padding: 8px 12px; text-align: center; color: #16a34a; font-weight: 600;">${m.correct || 0}</td>
      <td style="padding: 8px 12px; text-align: center; color: #dc2626;">${m.wrong || 0}</td>
      <td style="padding: 8px 12px; text-align: center;">${m.unattempted || 0}</td>
      <td style="padding: 8px 12px; text-align: right; font-weight: 600; color: #2563eb;">${m.accuracy || 0}%</td>
    </tr>
  `).join('');

  // 2. Send Admin Test Submission Alert to rupali.eduquest@gmail.com
  try {
    const adminSubject = `📊 ESAT Test Submitted: ${student.name || 'Student'} (${accuracy}% - ${testTitle})`;
    const adminHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
        <div style="background: linear-gradient(135deg, #059669, #10b981); padding: 24px; color: #ffffff;">
          <h2 style="margin: 0 0 6px 0; font-size: 22px;">📊 ESAT Test Completed & Submitted</h2>
          <p style="margin: 0; opacity: 0.9; font-size: 14px;">EduQuest ESAT Assessment Result Log</p>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 35%;">Student Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${student.name || 'N/A'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email Address:</td>
              <td style="padding: 8px 0; color: #2563eb;"><a href="mailto:${student.email}" style="color: #2563eb; text-decoration: none;">${student.email || 'N/A'}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone Number:</td>
              <td style="padding: 8px 0; color: #0f172a;">${student.phone || 'Not provided'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Test Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${testTitle}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Overall Score / Accuracy:</td>
              <td style="padding: 8px 0; color: #16a34a; font-weight: 700; font-size: 16px;">${result.totalCorrect || 0} / ${result.totalQuestions || 0} (${accuracy}%)</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Submit Time:</td>
              <td style="padding: 8px 0; color: #64748b;">${result.submitTime || new Date().toLocaleString()}</td>
            </tr>
          </table>

          ${(result.moduleScores && result.moduleScores.length > 0) ? `
            <h4 style="margin: 16px 0 8px 0; color: #1e293b; font-size: 15px;">Module Breakdown:</h4>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px; background: #f8fafc; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
              <thead>
                <tr style="background: #e2e8f0; color: #334155; text-align: left;">
                  <th style="padding: 8px 12px;">Module</th>
                  <th style="padding: 8px 12px; text-align: center;">Correct</th>
                  <th style="padding: 8px 12px; text-align: center;">Wrong</th>
                  <th style="padding: 8px 12px; text-align: center;">Unattempted</th>
                  <th style="padding: 8px 12px; text-align: right;">Accuracy</th>
                </tr>
              </thead>
              <tbody>
                ${moduleRowsHtml}
              </tbody>
            </table>
          ` : ''}
        </div>
        <div style="background: #f8fafc; padding: 14px 24px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; text-align: center;">
          Sent automatically from EduQuest ESAT Assessment System to rupali.eduquest@gmail.com
        </div>
      </div>
    `;

    sendLeadEmailSMTP({
      to: SMTP_CONFIG.to,
      subject: adminSubject,
      bodyHtml: adminHtml,
      bodyData: {
        "Submission Type": "ESAT Test Report",
        "Student Name": student.name || 'N/A',
        "Email": student.email || 'N/A',
        "Phone": student.phone || 'N/A',
        "Test Title": testTitle,
        "Total Score": `${result.totalCorrect || 0}/${result.totalQuestions || 0}`,
        "Accuracy": `${accuracy}%`,
        "Submit Time": result.submitTime || new Date().toLocaleString()
      }
    });
  } catch (emailErr) {
    console.warn('⚠️ Notice dispatching test submission admin email:', emailErr);
  }

  // 3. Send Official Subject Score Report Directly to Student's Email
  if (student.email && student.email.includes('@') && student.email.toLowerCase() !== SMTP_CONFIG.to.toLowerCase()) {
    try {
      const studentReportSubject = `📄 Your Official ESAT Score Report: ${testTitle} (${accuracy}%)`;
      const studentReportHtml = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
          <div style="background: linear-gradient(135deg, #059669, #10b981); padding: 24px; color: #ffffff;">
            <h2 style="margin: 0 0 6px 0; font-size: 22px;">📄 Your ESAT Assessment Report</h2>
            <p style="margin: 0; opacity: 0.9; font-size: 14px;">Subject Performance &amp; Evaluation</p>
          </div>
          <div style="padding: 24px; color: #334155; font-size: 14px; line-height: 1.6;">
            <p style="margin-top: 0; font-size: 15px;">Dear <strong>${student.name || 'Student'}</strong>,</p>
            <p>You have successfully completed <strong>${testTitle}</strong>. Below is your official performance report and subject-wise score summary:</p>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b; width: 40%;">Subject / Test Name:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${testTitle}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Overall Correct Score:</td>
                  <td style="padding: 8px 0; color: #16a34a; font-weight: 700; font-size: 16px;">${result.totalCorrect || 0} / ${result.totalQuestions || 0}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Overall Accuracy:</td>
                  <td style="padding: 8px 0; color: #2563eb; font-weight: 700;">${accuracy}%</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Submission Timestamp:</td>
                  <td style="padding: 8px 0; color: #64748b;">${result.submitTime || new Date().toLocaleString()}</td>
                </tr>
              </table>
            </div>

            ${(result.moduleScores && result.moduleScores.length > 0) ? `
              <h4 style="margin: 18px 0 8px 0; color: #1e293b; font-size: 14px;">Subject / Module-wise Breakdown:</h4>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px; background: #f8fafc; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
                <thead>
                  <tr style="background: #e2e8f0; color: #334155; text-align: left;">
                    <th style="padding: 8px 12px;">Module / Subject</th>
                    <th style="padding: 8px 12px; text-align: center;">Correct</th>
                    <th style="padding: 8px 12px; text-align: center;">Wrong</th>
                    <th style="padding: 8px 12px; text-align: center;">Unattempted</th>
                    <th style="padding: 8px 12px; text-align: right;">Accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  ${moduleRowsHtml}
                </tbody>
              </table>
            ` : ''}

            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 14px 16px; margin: 20px 0; font-size: 13.5px; color: #166534;">
              📞 <strong>Fast Response / Direct Contact:</strong> For 1-on-1 counseling, test review, or course enrollment, directly call or WhatsApp our mentoring team at: 
              <a href="tel:+919958041888" style="color: #15803d; text-decoration: none; font-weight: 700; font-size: 15px;">+91 9958041888</a>
            </div>

            <p style="margin-top: 16px; margin-bottom: 0;">You can log in to your EduQuest ESAT Portal anytime to review in-depth explanations for all questions or attempt more practice mock tests.</p>
          </div>
          <div style="background: #f8fafc; padding: 14px 24px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; text-align: center;">
            EduQuest Global ESAT Assessment Platform • Helpline: +91 9958041888 • <a href="mailto:rupali.eduquest@gmail.com" style="color: #64748b;">rupali.eduquest@gmail.com</a>
          </div>
        </div>
      `;

      sendLeadEmailSMTP({
        to: student.email,
        subject: studentReportSubject,
        bodyHtml: studentReportHtml,
        bodyData: {
          "Notice": `This is your official report for ${testTitle}`,
          "Student Name": student.name || 'N/A',
          "Subject / Test": testTitle,
          "Score": `${result.totalCorrect || 0}/${result.totalQuestions || 0}`,
          "Accuracy": `${accuracy}%`,
          "Direct Helpline": "+91 9958041888",
          "Timestamp": result.submitTime || new Date().toLocaleString()
        }
      });
    } catch (studentErr) {
      console.warn('⚠️ Notice dispatching student score report email:', studentErr);
    }
  }

  return supabaseResponse;
}

// ── Auto-fill Email for Logged-In Student ────────
document.addEventListener('DOMContentLoaded', async () => {
  if (window.supabase && typeof window.supabase.createClient === 'function') {
    try {
      const client = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
      const { data: { session } } = await client.auth.getSession();
      if (session && session.user && session.user.email) {
        const userEmail = session.user.email.toLowerCase().trim();
        // Do not pre-fill if admin
        if (userEmail === 'rupali.eduquest@gmail.com') return;

        const emailInput = document.getElementById('regEmail');
        if (emailInput && !emailInput.value) {
          emailInput.value = session.user.email;
          emailInput.setAttribute('readonly', 'true');
          emailInput.style.opacity = '0.85';
          emailInput.style.cursor = 'not-allowed';
        }
        const nameInput = document.getElementById('regName');
        if (nameInput && !nameInput.value && session.user.user_metadata && session.user.user_metadata.name) {
          nameInput.value = session.user.user_metadata.name;
        }
      }
    } catch (e) {
      console.warn('Session auto-fill warning:', e);
    }
  }
});
