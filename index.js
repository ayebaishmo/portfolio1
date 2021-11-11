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

const windowSize = window.matchMedia('(min-width: 1024px)');

const project = [
  {
    name: 'Profesional Art Printing Data',
    deskname: 'Keeping track of hundreds  of components website',
    desc: 'A daily selection of privately personalized reads; no accounts or sign- ups required.has been the industrys standard',
    langs: ['Html', 'Bootstrap', 'Ruby'],
    img: 'img/works_card.png',
    deskImg: 'img/det1.png',
    liveLink: '#',
    srcLink: '#',
    popImg: "<img src='img/Snapshoot-Portfolio.png' alt='Project Image' />",
    popImgdesk: "<img src='img/Snapshoot-Portfolio2.png' alt='Project Image' />",
    popPara: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to
            make a type specimen book.It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essent`,
  },
  {
    name: 'Profesional Art Printing Data',
    deskname: 'Keeping track of hundreds  of components website',
    desc: 'A daily selection of privately personalized reads; no accounts or sign- ups required.has been the industrys standard',
    langs: ['Html', 'Bootstrap', 'Ruby'],
    img: 'img/works_card.png',
    deskImg: 'img/det2.png',
    liveLink: '#',
    srcLink: '#',
    popImgdesk: "<img src='img/Snapshoot-Portfolio2.png' alt='Project Image' />",
    popImg: "<img src='img/Snapshoot-Portfolio.png' alt='Project Image' />",
    popPara: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to
            make a type specimen book.It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essent`,
  },
  {
    name: 'Profesional Art Printing Data',
    deskname: 'Keeping track of hundreds  of components website',
    desc: 'A daily selection of privately personalized reads; no accounts or sign- ups required.has been the industrys standard',
    langs: ['Html', 'Bootstrap', 'Ruby'],
    img: 'img/works_card.png',
    deskImg: 'img/det3.png',
    liveLink: '#',
    srcLink: '#',
    popImg: "<img src='img/Snapshoot-Portfolio.png' alt='Project Image' />",
    popImgdesk: "<img src='img/Snapshoot-Portfolio2.png' alt='Project Image' />",
    popPara: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to
            make a type specimen book.It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essent`,
  },
  {
    name: 'Profesional Art Printing Data',
    deskname: 'Keeping track of hundreds  of components website',
    desc: 'A daily selection of privately personalized reads; no accounts or sign- ups required.has been the industrys standard',
    langs: ['Html', 'Bootstrap', 'Ruby'],
    img: 'img/works_card.png',
    deskImg: 'img/det1.png',
    liveLink: '#',
    srcLink: '#',
    popImg: "<img src='img/Snapshoot-Portfolio.png' alt='Project Image' />",
    popImgdesk: "<img src='img/Snapshoot-Portfolio2.png' alt='Project Image' />",
    popPara: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to
            make a type specimen book.It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essent`,
  },
  {
    name: 'Profesional Art Printing Data',
    deskname: 'Keeping track of hundreds  of components website',
    desc: 'A daily selection of privately personalized reads; no accounts or sign- ups required.has been the industrys standard',
    langs: ['Html', 'Bootstrap', 'Ruby'],
    img: 'img/works_card.png',
    deskImg: 'img/det2.png',
    liveLink: '#',
    srcLink: '#',
    popImg: "<img src='img/Snapshoot-Portfolio.png' alt='Project Image' />",
    popImgdesk: "<img src='img/Snapshoot-Portfolio2.png' alt='Project Image' />",
    popPara: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to
            make a type specimen book.It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essent`,
  },
  {
    name: 'Profesional Art Printing Data',
    deskname: 'Keeping track of hundreds  of components website',
    desc: 'A daily selection of privately personalized reads; no accounts or sign- ups required.has been the industrys standard',
    langs: ['Html', 'Bootstrap', 'Ruby'],
    img: 'img/works_card.png',
    deskImg: 'img/det3.png',
    liveLink: '#',
    srcLink: '#',
    popImg: "<img src='img/Snapshoot-Portfolio.png' alt='Project Image' />",
    popImgdesk: "<img src='img/Snapshoot-Portfolio2.png' alt='Project Image' />",
    popPara: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to
            make a type specimen book.It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essent`,
  },
];

const projCtn = document.getElementById('worksDet');

for (let i = 0; i < project.length; i += 1) {
  // create the card 
  let carddiv = document.createElement('div');
  projCtn.appendChild(carddiv);
  
  // create the title
  let projTitle = document.createElement('h3');
  carddiv.appendChild(projTitle);
  projTitle.textContent = project[i].name;
  
  // create backgroundpicture
    let pic = document.createElement('picture');
    carddiv.appendChild(pic);
    let backImg = document.createElement('img');
    pic.appendChild(backImg);
    if (windowSize.matches) { 
      backImg.setAttribute("src", project[i].deskImg);
    } else {
      backImg.setAttribute("src", project[i].img);
      backImg.removeAttribute("src", project[i].deskImg);
    }
  
  // create paragraph
  let para = document.createElement('p');
  carddiv.appendChild(para);
  para.textContent = project[i].desc;
  
  // create buttons
  let languages = document.createElement('ul');
  carddiv.appendChild(languages);

  for (let j = 0; j < project[i].langs.length; j += 1) {
    let listlangs = document.createElement('li');
    languages.appendChild(listlangs);

    let buttonsLang = document.createElement('button');
    listlangs.appendChild(buttonsLang);
    buttonsLang.textContent = project[i].langs[j];
  }

  // last big button
  let bigButton = document.createElement('button');
  carddiv.appendChild(bigButton);
  bigButton.textContent = 'See Project';
  bigButton.setAttribute('id', i.toString());
  bigButton.className = 'openPopupButton';
}


let id = 0
const popupWrapper = document.createElement('div')
projCtn.appendChild(popupWrapper)

function createPopup(id = 0) {
  // create popup div
  let popBack = document.createElement('div');
  popupWrapper.appendChild(popBack);
  popBack.className = 'projPopup';
  
  // create background (surrounds card)
  let popBackx = document.createElement('div');
  popBack.appendChild(popBackx);
  popBackx.className = 'popup_background';
  
  // popup card
  let card = document.createElement('div');
  popBack.appendChild(card);
  card.className = 'projDet';
  
  // popup heading 
  let popHead = document.createElement('h4');
  card.appendChild(popHead);
  if (windowSize.matches) {
      popHead.textContent = project[id].name;
} else {
    popHead.textContent = project[id].deskname;
    }
  
  // popclosebutton
  let popupButton = document.createElement('button');
  card.appendChild(popupButton);
  popupButton.innerHTML = 'X';
  popupButton.className = 'close_popup';

  // close button use
  popupButton.addEventListener('click', closePopup)
  
  // popLanguagues
  let popupLangs = document.createElement('ul');
  card.appendChild(popupLangs);
  popupLangs.className = 'projLanguages';

  for (let k = 0; k < project[id].langs.length; k += 1) {
    let popLangsLi = document.createElement('li');
    popupLangs.appendChild(popLangsLi);
    let popliButtons = document.createElement('button');
    popLangsLi.appendChild(popliButtons);
    popliButtons.textContent = project[id].langs[k];
  }
  
  // popImg
  let sortDiv = document.createElement('div');
  sortDiv.className =  'sortDiv';
  card.appendChild(sortDiv);
  let popupImg = document.createElement('div');
  popupImg.className = 'imgDiv'
  sortDiv.appendChild(popupImg);
  if (windowSize.matches) {
      popupImg.innerHTML = project[id].popImg;
} else {
    popupImg.innerHTML = project[id].popImgdesk;
  }
  
  // poppara
  let divSort = document.createElement('div');
  divSort.className = 'divSort';
  sortDiv.appendChild(divSort);
  let popupPara = document.createElement('p');
  divSort.appendChild(popupPara);
  popupPara.textContent = project[id].popPara
  
  // poplastButtons
  let ulButton = document.createElement('ul');
  divSort.appendChild(ulButton);
  ulButton.className = 'see_buttons';

  // Live
  let liLiveButton = document.createElement('li');
  ulButton.appendChild(liLiveButton);
  let popLiveButton = document.createElement('button');
  liLiveButton.appendChild(popLiveButton);
  popLiveButton.textContent = 'See Live';

  // Source
  let liSrcButton = document.createElement('li');
  ulButton.appendChild(liSrcButton);
  let popSrcButton = document.createElement('button');
  liSrcButton.appendChild(popSrcButton);
  popSrcButton.textContent = 'See Source';
}

function closePopup() {
  popupWrapper.innerHTML = ''
}

for (let k = 0; k < project.length; k += 1) {
  let openPopupId = document.getElementById(k.toString());
  openPopupId.addEventListener('click', function() {
    createPopup(k);
});
}
