const sideMenu = document.querySelector('#sideMenu');
const logoName = document.querySelector('#logoName');
var openMenu = document.querySelector('#openMenu');

function openSideMenu() {
  side_Menu.style.display = 'block';
  open_Menu.style.display = 'none';
  logo_Name.style.display = 'none';
}

function closeideMenu() {
  side_Menu.style.display = 'none';
  open_Menu.style.display = 'block';
  logo_Name.style.display = 'block';
}