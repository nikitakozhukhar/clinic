import { createLogo } from '../Header/logo/createLogo'
import { footerLogo } from './footerLogo';

export function createFooterContent() {
  const footerContainer = document.createElement('div');
  const navContainer = document.createElement('div');
  const footerNav = document.createElement('nav');
  const footerMenuList = document.createElement('ul');
  const socials = document.createElement('addres');
  const socialsList = document.createElement('ul');
 
  const listItems = [
    'О клинике',
    'Услуги',
    'Специалисты',
    'Цены',
    'Контакты'
  ];

  const socialsTitle = [
    'instagram',
    'whatsApp',
    'telegram'
  ];
  
  //Добавляем меню навигации в футер
  for (let  i = 0; i <= listItems.length; i++) {
    const menuListItem = document.createElement('li');
    menuListItem.classList.add('footer_menu-list-item');
    menuListItem.textContent = listItems[i];
    footerMenuList.appendChild(menuListItem);
  }

  //Добавляем меню навигации по соц.сетям в футер
  for (let i = 0; i <= socialsTitle.length - 1; i++) {
    const socialListItem = document.createElement('li');
    const socialListLink = document.createElement('a')
    const socialsIkon = document.createElement('span');

    socialListLink.setAttribute('href', '#0');

    socialListItem.classList.add('social-list-item');
    socialListLink.classList.add('social-list-link', `${socialsTitle[i]}`);
    socialsIkon.classList.add('visually-hidden');

    socialsIkon.textContent = socialsTitle[i];

    socialListLink.appendChild(socialsIkon);
    socialListItem.appendChild(socialListLink);
    socialsList.appendChild(socialListItem);
  }

  //Добавление классов элементам
  footerContainer.classList.add('footer_container');
  navContainer.classList.add('footer', 'nav_container');
  footerNav.classList.add('footer_nav');
  footerMenuList.classList.add('footer_menu-list');
  socials.classList.add('socials');
  socialsList.classList.add('socials-list');


  // Добавление элементов
  footerContainer.appendChild(navContainer);

  navContainer.appendChild(footerLogo());
  navContainer.appendChild(footerNav);
  socials.appendChild(socialsList);
  navContainer.appendChild(socials);

  footerNav.appendChild(footerMenuList);
  
  
  // footerContainer.appendChild(socials)

  return footerContainer
}