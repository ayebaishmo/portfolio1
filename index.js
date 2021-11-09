var side_menu = document.querySelector('#side_menu');
var logo_name = document.querySelector('#logo_name');
var open_menu = document.querySelector('#open_menu');

function openside_menu() {
    side_menu.style.display = "block";
    open_menu.style.display = "none";
    logo_name.style.display = "none";
}

function closesideMenu() {
    side_menu.style.display = "none";
    open_menu.style.display = "block";
    logo_name.style.display = "block";
}

openside_menu();
closesideMenu();