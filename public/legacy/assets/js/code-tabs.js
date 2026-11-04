function switchLang(lang) {
  document.querySelectorAll('.lang-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.code-block').forEach(b => b.classList.remove('active'));
  document.querySelector(`.lang-tab[data-lang="${lang}"]`).classList.add('active');
  const block = document.getElementById('code-' + lang);
  block.classList.add('active');
  block.querySelectorAll('pre code').forEach(el => hljs.highlightElement(el));
}

async function copyCode(lang) {
  const codeEl = document.querySelector(`#code-${lang} code`);
  const text = codeEl.textContent;
  const btn = document.querySelector(`.copy-btn[data-lang="${lang}"]`);
  try {
    await navigator.clipboard.writeText(text);
    copied(btn);
  } catch {
    fallbackCopy(text, btn);
  }
}

function fallbackCopy(text, btn) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    copied(btn);
  } catch {
    btn.textContent = 'خطأ!';
    setTimeout(() => btn.textContent = 'نسخ', 2000);
  }
  document.body.removeChild(ta);
}

function copied(btn) {
  btn.textContent = 'تم النسخ!';
  btn.classList.add('copied');
  setTimeout(() => {
    btn.textContent = 'نسخ';
    btn.classList.remove('copied');
  }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.code-block.active pre code').forEach(el => hljs.highlightElement(el));
});
