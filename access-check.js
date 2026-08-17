// =============================================
// ESAT Strict Access Verification Guard (access-check.js)
// Tests are LOCKED by default until Admin grants approval
// =============================================

(async function checkESATAccess() {
  document.documentElement.style.visibility = 'hidden';

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
  const pathLower = (window.location.pathname || '').replace(/\\/g, '/').toLowerCase();

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

  // Strict Lock System: Default is locked (hasAccess = false)
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
        lockReason = 'Diagnostic Tests Access Locked';
      } else if (isTopic) {
        hasAccess = profile.has_esat_topic_access === true;
        lockReason = 'Topic Tests Access Locked';
      } else if (isMock) {
        hasAccess = profile.has_esat_mock_access === true;
        lockReason = 'Module Mock Tests Access Locked';
      } else if (isFullMock) {
        hasAccess = profile.has_esat_fullmock_access === true;
        lockReason = 'Full-Length Mock Access Locked';
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
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:'IBM Plex Sans',sans-serif;text-align:center;padding:20px;background:#0d0d14;color:#fff">
        <div style="font-size:3.2rem; margin-bottom:12px;">🔒</div>
        <h2 style="margin-bottom:12px;font-family:'Syne',sans-serif;font-size:1.8rem;color:#f87171;">${lockReason}</h2>
        <p style="color:rgba(255,255,255,0.7);max-width:480px;line-height:1.6;font-size:0.95rem;">
          Your student account (<strong>${userEmail}</strong>) does not currently have active permission to access this ESAT test module.
          <br><br>Admin must approve and unlock this module from the <strong>Admin Control Center</strong>.
          <br><br>Contact Administrator:
          <br><strong style="color:#60a5fa;font-size:1.05rem;">rupali.eduquest@gmail.com</strong>
        </p>
        <div style="display:flex; gap:12px; margin-top:24px;">
          <a href="${indexUrl}" style="color:#60a5fa;text-decoration:none;font-weight:600;padding:9px 20px;border:1px solid rgba(96,165,250,0.3);border-radius:8px;background:rgba(59,130,246,0.1);">← Return to Home</a>
          <button onclick="window.supabaseLogout()" style="background:rgba(220,38,38,0.2);border:1px solid rgba(220,38,38,0.4);color:#f87171;padding:9px 20px;border-radius:8px;cursor:pointer;font-weight:600;">🚪 Logout</button>
        </div>
      </div>`;
    throw new Error('Access locked: Admin grant required');
  }

  document.documentElement.style.visibility = 'visible';
})();
