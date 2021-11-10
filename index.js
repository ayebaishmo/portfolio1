document.body.backgroundColor = 'red';
const sideMenu = document.querySelector('#sideMenu');
const logoName = document.querySelector('#logoName');
const openMenu = document.querySelector('#openMenu');

function openSideMenu() {
  sideMenu.style.display = 'block';
  openMenu.style.display = 'none';
  logoName.style.display = 'none';
}

openSideMenu();

function closeSideMenu() {
  sideMenu.style.display = 'none';
  openMenu.style.display = 'block';
  logoName.style.display = 'block';
}

closeSideMenu();


const project = [
  {
    name: 'Profesional Art Printing Data',
    desc: 'A daily selection of privately personalized reads; no accounts or sign- ups required.has been the industrys standard',
    langs : ['Html', 'Bootstrap', 'Ruby'],
    imgDesk: ''
  },
  {
    name: 'Profesional Art Printing Data',
    desc: 'A daily selection of privately personalized reads; no accounts or sign- ups required.has been the industrys standard',
    langs: ['Html', 'Bootstrap', 'Ruby']
  },
  {
    name: 'Profesional Art Printing Data',
    desc: 'A daily selection of privately personalized reads; no accounts or sign- ups required.has been the industrys standard',
    langs: ['Html', 'Bootstrap', 'Ruby']
  },
  {
    name: 'Profesional Art Printing Data',
    desc: 'A daily selection of privately personalized reads; no accounts or sign- ups required.has been the industrys standard',
    langs: ['Html', 'Bootstrap', 'Ruby']
  },
  {
    name: 'Profesional Art Printing Data',
    desc: 'A daily selection of privately personalized reads; no accounts or sign- ups required.has been the industrys standard',
    langs: ['Html', 'Bootstrap', 'Ruby']
  },
  {
    name: 'Profesional Art Printing Data',
    desc: 'A daily selection of privately personalized reads; no accounts or sign- ups required.has been the industrys standard',
    langs: ['Html', 'Bootstrap', 'Ruby']
  },
  {
    name: 'Profesional Art Printing Data',
    desc: 'A daily selection of privately personalized reads; no accounts or sign- ups required.has been the industrys standard',
    langs: ['Html', 'Bootstrap', 'Ruby']
  }
];


const projCtn = document.getElementById('worksDet');
const carddiv = document.createElement('div');
projCtn.appendChild(carddiv);
projCtn.innerHtml = '<p>HELLooooooooooooooooooooo</p>';
carddiv.className = 'det1';

carddiv.innerHTML = '<p>HELLooooooooooooooooooooo</p>'