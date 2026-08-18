/* ============================================================
   Wordventure — auth.js
   Sign Up & Sign In logic
   ============================================================ */

'use strict';

/* ─────────────────────────────────────────────
   SIGN UP — MULTI-STEP WIZARD
   ───────────────────────────────────────────── */
const SignUp = (() => {

  const TOTAL_STEPS = 4;
  let currentStep = 1;
  let goingBack = false;

  // Collected form data
  const formData = {
    name: '',
    email: '',
    password: '',
    goal: '',
    level: '',
    dailyTime: '',
    agreeTerms: false,
  };

  /* ── Step Labels ── */
  const STEP_META = [
    { label: 'Account' },
    { label: 'Goal'    },
    { label: 'Level'   },
    { label: 'Schedule'},
  ];

  /* ── Init ── */
  function init() {
    if (!document.querySelector('.signup-wizard')) return;

    buildStepLabels();
    renderStep(1);
    bindGlobalEvents();
  }

  /* ── Build progress labels ── */
  function buildStepLabels() {
    const container = document.querySelector('.step-progress-labels');
    if (!container) return;
    container.innerHTML = STEP_META.map((m, i) => `
      <div class="step-label" data-step="${i + 1}">
        <div class="step-dot">${i + 1}</div>
        <span>${m.label}</span>
      </div>
    `).join('');
  }

  /* ── Render step ── */
  function renderStep(step) {
    currentStep = step;

    // Update progress bar
    const pct = ((step - 1) / (TOTAL_STEPS - 1)) * 100;
    const bar = document.querySelector('.step-progress-bar-inner');
    if (bar) bar.style.width = `${pct}%`;

    // Update step labels
    document.querySelectorAll('.step-label').forEach((el, i) => {
      el.classList.remove('active', 'done');
      if (i + 1 === step) el.classList.add('active');
      if (i + 1 < step)  el.classList.add('done');

      const dot = el.querySelector('.step-dot');
      if (i + 1 < step) {
        dot.innerHTML = '<i class="bi bi-check"></i>';
      } else {
        dot.textContent = i + 1;
      }
    });

    // Show correct panel
    document.querySelectorAll('.step-panel').forEach(panel => {
      panel.classList.remove('active', 'going-back');
    });

    const activePanel = document.querySelector(`.step-panel[data-step="${step}"]`);
    if (activePanel) {
      if (goingBack) activePanel.classList.add('going-back');
      activePanel.classList.add('active');
      goingBack = false;
    }

    // Update right panel preview
    updatePreview(step);

    // Focus first input in step
    setTimeout(() => {
      const firstInput = activePanel?.querySelector('input');
      if (firstInput) firstInput.focus();
    }, 100);
  }

  /* ── Navigation ── */
  function nextStep() {
    if (!validateStep(currentStep)) return;
    collectStep(currentStep);
    if (currentStep < TOTAL_STEPS) {
      renderStep(currentStep + 1);
    } else {
      submitForm();
    }
  }

  function prevStep() {
    if (currentStep > 1) {
      goingBack = true;
      renderStep(currentStep - 1);
    }
  }

  /* ── Validation ── */
  function validateStep(step) {
    let valid = true;

    if (step === 1) {
      valid = validateField('su-name',     v => v.trim().length >= 2,        'Please enter your full name.') && valid;
      valid = validateField('su-email',    v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'Enter a valid email address.') && valid;
      valid = validateField('su-password', v => v.length >= 8,               'Password must be at least 8 characters.') && valid;
      if (!document.getElementById('su-terms').checked) {
        showFieldError('su-terms-error', 'Please agree to the Terms of Service.');
        valid = false;
      } else {
        hideFieldError('su-terms-error');
      }
    }

    if (step === 2) {
    const selectedGoal = document.querySelector(
        '.step-panel[data-step="2"] .select-card[data-goal].selected'
    );

    if (!selectedGoal) {
        window.LS?.Toast.show({
        title: 'Pick a goal',
        message: 'Select what you want to practice.',
        type: 'warning'
        });

        valid = false;
    } else {
        formData.goal = selectedGoal.dataset.goal;
    }
    }

    if (step === 3 && !formData.level) {
      window.LS?.Toast.show({ title: 'Select your level', message: 'Tell us where you are now.', type: 'warning' });
      valid = false;
    }

    if (step === 4 && !formData.dailyTime) {
      window.LS?.Toast.show({ title: 'Choose a schedule', message: 'How much time can you dedicate daily?', type: 'warning' });
      valid = false;
    }

    return valid;
  }

  function validateField(id, test, msg) {
    const input = document.getElementById(id);
    if (!input) return true;
    const errId = id + '-error';
    if (!test(input.value)) {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
      showFieldError(errId, msg);
      return false;
    } else {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      hideFieldError(errId);
      return true;
    }
  }

  function showFieldError(id, msg) {
    const el = document.getElementById(id);
    if (el) { el.textContent = msg; el.classList.add('show'); }
  }

  function hideFieldError(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('show');
  }

  /* ── Collect data ── */
  function collectStep(step) {
    if (step === 1) {
      formData.name        = document.getElementById('su-name')?.value.trim() || '';
      formData.email       = document.getElementById('su-email')?.value.trim() || '';
      formData.password    = document.getElementById('su-password')?.value || '';
      formData.agreeTerms  = document.getElementById('su-terms')?.checked || false;
    }
    // Steps 2-4: selections collected via click handlers
  }

  /* ── Submit ── */
  function submitForm() {
    collectStep(currentStep);
    showGenerating();
  }

  /* ── Generating overlay ── */
  function showGenerating() {
    const overlay = document.querySelector('.generating-overlay');
    if (!overlay) return;

    overlay.classList.add('show');

    const steps = overlay.querySelectorAll('.gen-step');
    const messages = [
      'Analyzing your English level…',
      'Building your personalized path…',
      'Selecting your first scenarios…',
      'Almost ready!',
    ];

    // Animate steps sequentially
    let i = 0;
    function activateNext() {
      if (i > 0 && steps[i - 1]) {
        steps[i - 1].classList.remove('loading');
        steps[i - 1].classList.add('done');
      }
      if (i < steps.length) {
        steps[i].classList.add('loading');
        i++;
        setTimeout(activateNext, 900 + Math.random() * 400);
      } else {
        // All done — save user and redirect
        setTimeout(() => finishRegistration(), 700);
      }
    }

    setTimeout(activateNext, 400);
  }

  function finishRegistration() {
    // Save to localStorage
    const user = window.LS.Auth.register(formData);
    window.LS.Storage.set('ls_signup_complete', true);
    window.LS.Storage.set('ls_onboarding_goal', formData.goal);

    // Redirect to learning
    window.location.href = 'learning.html';
  }

  /* ── Right panel preview ── */
  function updatePreview(step) {
    const preview = document.querySelector('.auth-preview');
    if (!preview) return;

    const stepPreviews = preview.querySelectorAll('.preview-step');
    stepPreviews.forEach(p => {
      p.style.opacity = '0';
      p.style.transform = 'translateY(10px)';
    });

    const active = preview.querySelector(`.preview-step[data-for-step="${step}"]`);
    if (active) {
      setTimeout(() => {
        active.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        active.style.opacity = '1';
        active.style.transform = 'translateY(0)';
      }, 50);
    }
  }

  /* ── Password strength ── */
  function checkPasswordStrength(pw) {
    let score = 0;
    if (pw.length >= 8)  score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;

    const segs = document.querySelectorAll('.pw-strength-seg');
    const label = document.querySelector('.pw-strength-label');
    const map = ['', 'weak', 'medium', 'medium', 'strong'];
    const labels = ['', 'Weak', 'Fair', 'Good', 'Strong 🔒'];

    segs.forEach((seg, i) => {
      seg.className = 'pw-strength-seg';
      if (i < score) seg.classList.add(map[score]);
    });

    if (label) {
      label.textContent = pw.length ? labels[score] : '';
      label.style.color = score <= 1 ? '#EF4444' : score <= 2 ? '#F59E0B' : '#22C55E';
    }
  }

  /* ── Bind events ── */
  function bindGlobalEvents() {
    // Next buttons
    document.querySelectorAll('[data-su-next]').forEach(btn => {
    btn.addEventListener('click', nextStep);
    });

    // Back buttons
    document.querySelectorAll('[data-su-back]').forEach(btn => {
    btn.addEventListener('click', prevStep);
    });

    // Password toggle
    document.querySelectorAll('.btn-pw-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const input = btn.previousElementSibling || document.getElementById('su-password');
        if (input) {
          const isHidden = input.type === 'password';
          input.type = isHidden ? 'text' : 'password';
          btn.querySelector('i').className = isHidden ? 'bi bi-eye-slash' : 'bi bi-eye';
        }
      });
    });

    // Password strength
    document.getElementById('su-password')?.addEventListener('input', e => {
      checkPasswordStrength(e.target.value);
    });

    // Real-time validation on blur
    ['su-name', 'su-email', 'su-password'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('blur', () => {
        if (el.value.trim()) validateStep1Field(id);
      });
      el.addEventListener('input', () => {
        if (el.classList.contains('is-invalid') && el.value.trim()) {
          validateStep1Field(id);
        }
      });
    });

    // Selectable goal cards
    document.querySelectorAll('.select-card[data-goal]').forEach(card => {
    card.addEventListener('click', function () {
        document
        .querySelectorAll('.select-card[data-goal]')
        .forEach(c => c.classList.remove('selected'));

        this.classList.add('selected');

        formData.goal = this.dataset.goal;

        updatePreviewGoal(this.dataset.goal);

        console.log('Goal selected:', formData.goal);
    });
    });

    // Level cards
    document.querySelectorAll('.select-card[data-level]').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.select-card[data-level]').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        formData.level = card.dataset.level;
        updatePreviewLevel(card.dataset.level);
      });
    });

    // Time cards
    document.querySelectorAll('.select-card[data-time]').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.select-card[data-time]').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        formData.dailyTime = card.dataset.time;
      });
    });

    // Keyboard enter support
    document.querySelectorAll('.ls-input').forEach(input => {
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') nextStep();
      });
    });
  }

  function validateStep1Field(id) {
    const tests = {
      'su-name':     v => v.trim().length >= 2,
      'su-email':    v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      'su-password': v => v.length >= 8,
    };
    const msgs = {
      'su-name':     'Please enter your full name.',
      'su-email':    'Enter a valid email address.',
      'su-password': 'Password must be at least 8 characters.',
    };
    validateField(id, tests[id], msgs[id]);
  }

  function updatePreviewGoal(goal) {
    const display = document.querySelector('[data-preview-goal]');
    const labels = {
      job_interview:    '💼 Job Interview',
      travel:           '✈️ Travel',
      presentation:     '📊 Presentations',
      daily:            '☕ Daily Conv.',
      professional:     '🏢 Professional',
      general:          '🌍 General English',
    };
    if (display) display.textContent = labels[goal] || goal;
  }

  function updatePreviewLevel(level) {
    const display = document.querySelector('[data-preview-level]');
    const map = {
      beginner:      '🌱 Beginner',
      elementary:    '📖 Elementary',
      intermediate:  '💬 Intermediate',
      upper:         '🚀 Upper-Intermediate',
      advanced:      '⭐ Advanced',
    };
    if (display) display.textContent = map[level] || level;
  }

  return { init };
})();

/* ─────────────────────────────────────────────
   SIGN IN
   ───────────────────────────────────────────── */
const SignIn = (() => {
  function init() {
    const form = document.querySelector('.signin-form-el');
    if (!form) return;

    // Password toggle
    document.querySelectorAll('.btn-pw-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const wrap = btn.closest('.input-pw-wrap');
        const input = wrap?.querySelector('input[type="password"], input[type="text"]');
        if (input) {
          const isHidden = input.type === 'password';
          input.type = isHidden ? 'text' : 'password';
          btn.querySelector('i').className = isHidden ? 'bi bi-eye-slash' : 'bi bi-eye';
        }
      });
    });

    // Submit
    form.addEventListener('submit', e => {
      e.preventDefault();
      handleSignIn();
    });

    // Demo fill button
    document.querySelector('[data-demo-fill]')?.addEventListener('click', () => {
      document.getElementById('si-email').value = 'alex@example.com';
      document.getElementById('si-password').value = 'password123';
      document.getElementById('si-email').classList.add('is-valid');
      document.getElementById('si-password').classList.add('is-valid');
      window.LS?.Toast.show({ title: 'Demo credentials filled', message: 'Click Sign In to continue.', type: 'info' });
    });
  }

  function handleSignIn() {
    const email    = document.getElementById('si-email')?.value.trim() || '';
    const password = document.getElementById('si-password')?.value || '';

    const btn = document.querySelector('.btn-signin');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Signing in…';
    }

    setTimeout(() => {
      const result = window.LS.Auth.login(email, password);
      if (result.success) {
        window.LS?.Toast.show({ title: 'Welcome back!', message: `Hello, ${result.user.name} 👋`, type: 'success' });
        setTimeout(() => { window.location.href = 'learning.html'; }, 900);
      } else {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = '<i class="bi bi-arrow-right-circle-fill me-2"></i>Sign In';
        }
        document.getElementById('si-email')?.classList.add('is-invalid');
        document.getElementById('si-password')?.classList.add('is-invalid');
        const errEl = document.getElementById('si-general-error');
        if (errEl) { errEl.textContent = result.message; errEl.classList.add('show'); }
        window.LS?.Toast.show({ title: 'Sign in failed', message: result.message, type: 'warning' });
      }
    }, 1000);
  }

  return { init };
})();

/* ─────────────────────────────────────────────
   INIT
   ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  SignUp.init();
  SignIn.init();
});