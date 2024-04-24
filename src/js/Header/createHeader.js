import {createBurgerMenu} from './burger/burger';
import { createLogo } from './logo/createLogo';
import { createContact } from './contacts/contacts'
import { createBurgerMenuList } from './burgerMenuList/burgerMenuList';
import { createButtonSubscribe } from './btnSubscribe/createBtnSubscribe';

import { createLocation } from './contacts/createLocation';
import { createPhoneNumber } from './contacts/createPhoneNumber';

export function createHeader() {
  const header = document.createElement('header');
  const headerContainer = document.createElement('div');
  const headerNav = document.createElement('nav');

  header.classList.add('header')
  headerContainer.classList.add('header_container');
  headerNav.classList.add('header_nav');

  headerContainer.appendChild(createLogo());
 
  headerContainer.appendChild(createContact());
  headerNav.appendChild(createBurgerMenu());
  headerNav.appendChild(createBurgerMenuList());

  headerContainer.appendChild(createLocation()); //для ПК 
  headerContainer.appendChild(createPhoneNumber()); //для ПК 
  
  headerContainer.appendChild(createButtonSubscribe());

  

  header.appendChild(headerContainer); 
  header.appendChild(headerNav);
  
  
  return header

};

const header = createHeader();
document.body.appendChild(header)