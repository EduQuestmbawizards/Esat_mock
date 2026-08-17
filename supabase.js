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

// ── Save ESAT Student Registration ──────────────────
async function saveRegistration(studentData, examName, selectedModules = ['Mathematics 1'], targetCourse = 'Engineering') {
  if (SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL') {
    console.warn('⚠️ Supabase not configured.');
    return;
  }

  const row = {
    name: studentData.name,
    email: studentData.email,
    phone: studentData.phone || '',
    topic: examName || 'ESAT Assessment',
    target_course: targetCourse,
    selected_modules: selectedModules,
    created_at: new Date().toISOString()
  };

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
    modules_taken: moduleNames.length > 0 ? moduleNames : ['Mathematics 1'],
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
      return { ok: true, status: res.status };
    } else {
      const errText = await res.text();
      console.error('❌ ESAT Result save error:', res.status, errText);
      return { ok: false, msg: errText };
    }
  } catch (err) {
    console.error('❌ Supabase network error:', err);
    return { ok: false, msg: err.message };
  }
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
