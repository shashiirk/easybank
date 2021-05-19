const menu = document.querySelector('.menu');
const menuBox = document.querySelector('.menu-box');

function toggleMenuHandler() {
  if (menuBox.classList.contains('hidden')) {
    menuBox.classList.remove('hidden');
    menuBox.classList.add('flex');
  } else {
    menuBox.classList.remove('flex');
    menuBox.classList.add('hidden');
  }
}

menu.addEventListener('click', toggleMenuHandler);
