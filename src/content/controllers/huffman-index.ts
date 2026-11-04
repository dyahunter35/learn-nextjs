// @ts-nocheck
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

Object.assign(window, {toggleMenu: toggleMenu});
export {toggleMenu};
