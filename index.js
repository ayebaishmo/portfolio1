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
    img: "url('img/works_card.png')",
    see: 'See project',
    popImg: 'img/Snapshoot Portfolio.png',
    popPara: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to
            make a type specimen book.It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essent`,
    popLastB: 'See live',
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

//create the card 
const carddiv = document.createElement('div');
projCtn.appendChild(carddiv);
carddiv.className = 'det1';

//create the title
const projTitle = document.createElement('h3');
carddiv.appendChild(projTitle);
projTitle.textContent = project[0].name;

//create backgroundpicture
const pic = document.createElement('picture');
carddiv.appendChild(pic);
const backImg = document.createElement('img');
pic.appendChild(backImg);
backImg.textContent = project[0].img; 


//create paragraph
const para = document.createElement('p');
carddiv.appendChild(para);
para.textContent = project[0].desc;

//create buttons
const languages = document.createElement('ul');
carddiv.appendChild(languages);
const listlangs = document.createElement('li');
languages.appendChild(listlangs);
const buttonsLang = document.createElement('button');
listlangs.appendChild(buttonsLang);
buttonsLang.textContent = project[0].langs[1];


//last big button
const bigButton = document.createElement('button');
carddiv.appendChild(bigButton);
bigButton.textContent = project[0].see;


//popup background
const popBack = document.createElement('div');
carddiv.appendChild(popBack);
popBack.className = 'projPopup';
const popBackx = document.createElement('div');
popBack.appendChild(popBackx);
popBackx.className = 'popup_background';

//popup card 
const card = document.createElement('div');
popBack.appendChild(card);
card.className = 'projDet';

//popup heading 
const popHead = document.createElement('h4');
card.appendChild(popHead);
popHead.textContent = project[0].name;

//popclosebutton
const popupButton = document.createElement('button');
card.appendChild(popupButton);
popupButton.className = 'close_popup';

//popLanguagues
const popupLangs = document.createElement('ul');
card.appendChild(popupLangs);
popupLangs.className = 'projLanguages';
const popLangsLi = document.createElement('li');
popupLangs.appendChild(popLangsLi);
const popliButtons = document.createElement('button');
popLangsLi.appendChild(popliButtons);
popliButtons.textContent = project[0].langs[0];

//popimg
const popimg = document.createElement('img');
card.appendChild(popimg);
popimg.textContent = project[0].popImg;

//poppara
const popupPara = document.createElement('p');
card.appendChild(popupPara);
popupPara.textContent = project[0].popPara

//poplastButtons
const ulButton = document.createElement('ul');
card.appendChild(ulButton);
ulButton.className = 'see_buttons';
const liButton = document.createElement('li');
ulButton.appendChild(liButton);
const poplastButtons = document.createElement('button');
liButton.appendChild(poplastButtons);
poplastButtons.textContent = project[0].popLastB;
