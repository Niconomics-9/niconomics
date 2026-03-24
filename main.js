// niconomics — shared JS
(function () {
  const root = document.documentElement;
  const KEY = 'niconomics-theme';

  // Apply theme immediately (also called inline in <head> to avoid FOUC)
  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    localStorage.setItem(KEY, t);
  }

  function getTheme() {
    return localStorage.getItem(KEY) ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function setIcon(btn, t) {
    btn.innerHTML = t === 'dark'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    btn.setAttribute('aria-label', 'Switch to ' + (t === 'dark' ? 'light' : 'dark') + ' mode');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('[data-theme-toggle]');
    if (!btn) return;

    let current = getTheme();
    applyTheme(current);
    setIcon(btn, current);

    btn.addEventListener('click', function () {
      current = current === 'dark' ? 'light' : 'dark';
      applyTheme(current);
      setIcon(btn, current);
    });
  });
})();
