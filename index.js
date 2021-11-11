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
  const carddiv = document.createElement('div');
  projCtn.appendChild(carddiv);

  // create the title
  const projTitle = document.createElement('h3');
  carddiv.appendChild(projTitle);
  projTitle.textContent = project[i].name;

  // create backgroundpicture
  const pic = document.createElement('picture');
  carddiv.appendChild(pic);
  const backImg = document.createElement('img');
  pic.appendChild(backImg);
  if (windowSize.matches){
    backImg.setAttribute('src', project[i].deskImg);
  } else {
    backImg.setAttribute('src', project[i].img);
    backImg.removeAttribute('src', project[i].deskImg);
    }
  // create paragraph
  const para = document.createElement('p');
  carddiv.appendChild(para);
  para.textContent = project[i].desc;

  // create buttons
  const languages = document.createElement('ul');
  carddiv.appendChild(languages);

  for (let j = 0; j < project[i].langs.length; j += 1) {
    const listlangs = document.createElement('li');
    languages.appendChild(listlangs);

    const buttonsLang = document.createElement('button');
    listlangs.appendChild(buttonsLang);
    buttonsLang.textContent = project[i].langs[j];
  }

  // last big button
  const bigButton = document.createElement('button');
  carddiv.appendChild(bigButton);
  bigButton.textContent = 'See Project';
  bigButton.setAttribute('id', i.toString());
  bigButton.className = 'openPopupButton';
}

const id = 0;
const popupWrapper = document.createElement('div');
projCtn.appendChild(popupWrapper);

function createPopup(id = 0) {
  // create popup div
  const popBack = document.createElement('div');
  popupWrapper.appendChild(popBack);
  popBack.className = 'projPopup';

  // create background (surrounds card)
  const popBackx = document.createElement('div');
  popBack.appendChild(popBackx);
  popBackx.className = 'popup_background';

  // popup card
  const card = document.createElement('div');
  popBack.appendChild(card);
  card.className = 'projDet';

  // popup heading
  const popHead = document.createElement('h4');
  card.appendChild(popHead);
  if (windowSize.matches) {
    popHead.textContent = project[id].name;
  } else {
    popHead.textContent = project[id].deskname;
  }

  // popclosebutton
  const popupButton = document.createElement('button');
  card.appendChild(popupButton);
  popupButton.innerHTML = 'X';
  popupButton.className = 'close_popup';

  // close button use
  popupButton.addEventListener('click', closePopup);

  // popLanguagues
  const popupLangs = document.createElement('ul');
  card.appendChild(popupLangs);
  popupLangs.className = 'projLanguages';

  for (let k = 0; k < project[id].langs.length; k += 1) {
    const popLangsLi = document.createElement('li');
    popupLangs.appendChild(popLangsLi);
    const popliButtons = document.createElement('button');
    popLangsLi.appendChild(popliButtons);
    popliButtons.textContent = project[id].langs[k];
  }

  // popImg
  const sortDiv = document.createElement('div');
  sortDiv.className = 'sortDiv';
  card.appendChild(sortDiv);
  const popupImg = document.createElement('div');
  popupImg.className = 'imgDiv';
  sortDiv.appendChild(popupImg);
  if (windowSize.matches) {
      popupImg.innerHTML = project[id].popImg;
  } else {
    popupImg.innerHTML = project[id].popImgdesk;
  }
  
  // poppara
  const divSort = document.createElement('div');
  divSort.className = 'divSort';
  sortDiv.appendChild(divSort);
  const popupPara = document.createElement('p');
  divSort.appendChild(popupPara);
  popupPara.textContent = project[id].popPara

  // poplastButtons
  const ulButton = document.createElement('ul');
  divSort.appendChild(ulButton);
  ulButton.className = 'see_buttons';

  // Live
  const liLiveButton = document.createElement('li');
  ulButton.appendChild(liLiveButton);
  const popLiveButton = document.createElement('button');
  liLiveButton.appendChild(popLiveButton);
  popLiveButton.textContent = 'See Live';

  // Source
  const liSrcButton = document.createElement('li');
  ulButton.appendChild(liSrcButton);
  const popSrcButton = document.createElement('button');
  liSrcButton.appendChild(popSrcButton);
  popSrcButton.textContent = 'See Source';
}

function closePopup() {
  popupWrapper.innerHTML = '';
}

for (let k = 0; k < project.length; k += 1) {
  const openPopupId = document.getElementById(k.toString());
  openPopupId.addEventListener('click', function () {
    createPopup(k);
  });
}
