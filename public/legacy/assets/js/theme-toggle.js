(function() {
  const KEY = 'opencode-theme';
  function getTheme() { return localStorage.getItem(KEY) || 'light'; }
  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem(KEY, t);
    const btn = document.getElementById('themeBtn');
    if (btn) btn.textContent = t === 'dark' ? '\u2600' : '\u263E';
  }
  function toggleTheme() { setTheme(getTheme() === 'dark' ? 'light' : 'dark'); }
  setTheme(getTheme());
  window.toggleTheme = toggleTheme;
})();
