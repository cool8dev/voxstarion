/* VoxStarion — vanilla JS: theme toggle + mobile navigation + language switcher.
   No frameworks. No analytics. No cookies. */

(function () {
  'use strict';

  var STORAGE_KEY = 'voxstarion-theme';
  var root = document.documentElement;

  /* ---- i18n helper (assets/js/i18n.js loads before this file) ---- */
  var FALLBACK_STRINGS = {
    'a11y.switch_to_dark': 'Switch to dark mode',
    'a11y.switch_to_light': 'Switch to light mode'
  };

  function t(key) {
    var s = '';
    if (window.VoxStarionI18n && typeof window.VoxStarionI18n.t === 'function') {
      s = window.VoxStarionI18n.t(key);
    }
    return s || FALLBACK_STRINGS[key] || '';
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* storage unavailable — theme still applies for this session */
    }
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    syncToggleButtons(theme);
  }

  function currentTheme() {
    return root.classList.contains('dark') ? 'dark' : 'light';
  }

  function syncToggleButtons(theme) {
    var buttons = document.querySelectorAll('[data-theme-toggle]');
    buttons.forEach(function (btn) {
      var isDark = theme === 'dark';
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      btn.setAttribute('aria-label', isDark ? t('a11y.switch_to_light') : t('a11y.switch_to_dark'));
      var iconSun = btn.querySelector('[data-icon="sun"]');
      var iconMoon = btn.querySelector('[data-icon="moon"]');
      if (iconSun) iconSun.classList.toggle('hidden', !isDark);
      if (iconMoon) iconMoon.classList.toggle('hidden', isDark);
    });
  }

  function toggleTheme() {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    setStoredTheme(next);
    applyTheme(next);
  }

  /* Enable gentle transitions only after first paint (avoids flash) */
  function enableTransitions() {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.body.classList.add('theme-anim');
      });
    });
  }

  /* ---- Mobile menu ---- */
  function initMobileMenu() {
    var button = document.querySelector('[data-menu-button]');
    var menu = document.querySelector('[data-menu]');
    if (!button || !menu) return;

    function setOpen(open) {
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
      menu.classList.toggle('hidden', !open);
      document.body.classList.toggle('overflow-hidden', open && window.innerWidth < 768);
    }

    button.addEventListener('click', function () {
      var isOpen = button.getAttribute('aria-expanded') === 'true';
      setOpen(!isOpen);
    });

    /* Close after navigation */
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        button.focus();
      }
    });
  }

  /* ---- Footer year ---- */
  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  /* ---- Contact page: inject owner-configured email ----
     Replaces the visible placeholder with a real mailto link only when
     assets/js/config.js provides an address. No fake links otherwise. */
  function initContactConfig() {
    var cfg = window.VOXSTARION_CONFIG || {};
    document.querySelectorAll('[data-email-slot]').forEach(function (slot) {
      var kind = slot.getAttribute('data-email-slot'); // "contact" | "privacy"
      var email = (kind === 'privacy' ? cfg.privacyEmail : cfg.contactEmail) || '';
      if (!email || email.indexOf('{{') !== -1) return; // keep placeholder visible
      var subject = encodeURIComponent(slot.getAttribute('data-email-subject') || 'Hello VoxStarion');
      var a = document.createElement('a');
      a.setAttribute('href', 'mailto:' + email + '?subject=' + subject);
      a.className = 'font-medium text-teal-700 underline underline-offset-2 dark:text-teal-400';
      a.textContent = email;
      slot.textContent = '';
      slot.appendChild(a);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    /* Re-apply stored theme (head script already set initial class) */
    var stored = getStoredTheme();
    if (stored === 'dark' || stored === 'light') {
      applyTheme(stored);
    } else {
      syncToggleButtons(currentTheme());
    }

    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', toggleTheme);
    });

    /* Keep theme toggle aria-labels in sync when the language changes */
    document.addEventListener('voxstarion:languagechange', function () {
      syncToggleButtons(currentTheme());
    });

    /* Language: apply stored/preferred language, wire switcher buttons */
    if (window.VoxStarionI18n) {
      window.VoxStarionI18n.applyLanguage(window.VoxStarionI18n.getPreferredLang());
      document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
        btn.addEventListener('click', function () { window.VoxStarionI18n.toggleLanguage(); });
      });
    }

    initMobileMenu();
    initYear();
    initContactConfig();
    enableTransitions();
  });
})();
