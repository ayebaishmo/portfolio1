const side_Menu = document.querySelector('#side_Menu');
const logo_Name = document.querySelector('#logo_Name');
var open_Menu = document.querySelector('#open_Menu');

function openSide_Menu() {
  side_Menu.style.display = 'block';
  open_Menu.style.display = 'none';
  logo_Name.style.display = 'none';
}

function closeideMenu() {
  side_Menu.style.display = 'none';
  open_Menu.style.display = 'block';
  logo_Name.style.display = 'block';
}

openside_menu();
closesideMenu();