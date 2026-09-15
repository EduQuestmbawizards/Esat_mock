// =============================================
// ESAT Strict Access Verification Guard (access-check.js)
// 1st Diagnostic Test is UNLOCKED for everyone.
// All other tests are LOCKED by default until Admin grants approval.
// =============================================

(async function checkESATAccess() {
  const pathLower = (window.location.pathname || '').replace(/\\/g, '/').toLowerCase();

  // 1. Diagnostic Test 1 is ALWAYS UNLOCKED for everyone (free access, no login, no admin grant required)
  const isFirstDiagnostic = pathLower.endsWith('test_diag.html') || 
    (pathLower.includes('test_diag.html') && !pathLower.includes('test_diag_02') && !pathLower.includes('test_diag_03'));

  if (isFirstDiagnostic) {
    // Completely unlocked - allow direct access
    document.documentElement.style.visibility = 'visible';
    return;
  }

  document.documentElement.style.visibility = 'hidden';

  // 2. All other tests require Supabase and user authentication
  if (!window.supabase) {
    console.error('Supabase library not loaded. Check script include order.');
    document.documentElement.style.visibility = 'visible';
    return;
  }

  const supabaseClient = window.supabase.createClient(
    SUPABASE_CONFIG.url,
    SUPABASE_CONFIG.anonKey
  );

  const { data: { session } } = await supabaseClient.auth.getSession();

  let loginUrl = 'login.html';
  let indexUrl = 'index.html';

  if (pathLower.includes('/full_mock/') || pathLower.includes('/diagnostic_test/') || pathLower.includes('/mock_tests/') || pathLower.includes('/topic_tests/') || pathLower.includes('/pdf_extractor/')) {
    loginUrl = '../login.html';
    indexUrl = '../index.html';
    if (pathLower.split('/').length > 4) {
      loginUrl = '../../login.html';
      indexUrl = '../../index.html';
    }
  }

  if (!session || !session.user) {
    window.location.href = loginUrl + '?redirect=' + encodeURIComponent(window.location.href);
    return;
  }

  const userEmail = session.user.email;
  const isAdmin = userEmail === 'rupali.eduquest@gmail.com';

  if (isAdmin) {
    document.documentElement.style.visibility = 'visible';
    return;
  }

  // Strict Lock System: Default is locked (hasAccess = false) unless admin granted
  let hasAccess = false;
  let lockReason = 'Pending Admin Approval';

  try {
    const { data: profile, error } = await supabaseClient
      .from('profiles')
      .select('has_esat_access, has_esat_diagnostic_access, has_esat_topic_access, has_esat_mock_access, has_esat_fullmock_access')
      .eq('email', userEmail)
      .maybeSingle();

    if (profile && profile.has_esat_access === true) {
      const isDiag = pathLower.includes('diagnostic');
      const isTopic = pathLower.includes('topic');
      const isMock = pathLower.includes('mock_tests');
      const isFullMock = pathLower.includes('full_mock');

      if (isDiag) {
        hasAccess = profile.has_esat_diagnostic_access === true;
        lockReason = 'Diagnostic Tests Access Locked (Admin Approval Required)';
      } else if (isTopic) {
        hasAccess = profile.has_esat_topic_access === true;
        lockReason = 'Topic Tests Access Locked (Admin Approval Required)';
      } else if (isMock) {
        hasAccess = profile.has_esat_mock_access === true;
        lockReason = 'Module Mock Tests Access Locked (Admin Approval Required)';
      } else if (isFullMock) {
        hasAccess = profile.has_esat_fullmock_access === true;
        lockReason = 'Full-Length Mock Access Locked (Admin Approval Required)';
      } else {
        hasAccess = true;
      }
    } else {
      hasAccess = false;
      lockReason = 'Account Access Locked by Administrator';
    }
  } catch (e) {
    console.warn('Profile access fetch notice:', e);
    hasAccess = false;
  }

  if (!hasAccess) {
    document.documentElement.style.visibility = 'visible';
    document.body.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;font-family:'IBM Plex Sans',sans-serif;text-align:center;padding:24px;background:#0d0d14;color:#fff">
        <div style="font-size:3.5rem; margin-bottom:12px;">🔒</div>
        <h2 style="margin-bottom:12px;font-family:'Syne',sans-serif;font-size:1.8rem;color:#f87171;">${lockReason}</h2>
        <p style="color:rgba(255,255,255,0.7);max-width:520px;line-height:1.6;font-size:0.95rem;">
          Your student account (<strong>${userEmail}</strong>) does not currently have active permission to access this ESAT test.
          <br><br>Only <strong>Diagnostic Assessment 1</strong> is freely accessible without admin approval. All other assessments require administrator clearance.
          <br><br>To unlock this module, please contact the Administrator:
          <br><a href="mailto:rupali.eduquest@gmail.com" style="color:#60a5fa;font-size:1.1rem;font-weight:700;text-decoration:none;display:inline-block;margin-top:6px;">rupali.eduquest@gmail.com</a>
        </p>
        <div style="display:flex; gap:12px; margin-top:24px; flex-wrap:wrap; justify-content:center;">
          <a href="${indexUrl}" style="color:#60a5fa;text-decoration:none;font-weight:600;padding:10px 22px;border:1px solid rgba(96,165,250,0.3);border-radius:8px;background:rgba(59,130,246,0.1);">← Return to Home</a>
          <button onclick="window.supabaseLogout()" style="background:rgba(220,38,38,0.2);border:1px solid rgba(220,38,38,0.4);color:#f87171;padding:10px 22px;border-radius:8px;cursor:pointer;font-weight:600;">🚪 Logout</button>
        </div>
      </div>`;
    throw new Error('Access locked: Admin grant required');
  }

  document.documentElement.style.visibility = 'visible';
})();

