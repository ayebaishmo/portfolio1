const sideMenu = document.querySelector('#sideMenu');
const logoName = document.querySelector('#logoName');
var openMenu = document.querySelector('#openMenu');

function openSideMenu() {
  sideMenu.style.display = 'block';
  openMenu.style.display = 'none';
  logoName.style.display = 'none';
}

function closeideMenu() {
  sideMenu.style.display = 'none';
  openMenu.style.display = 'block';
  logoName.style.display = 'block';
}