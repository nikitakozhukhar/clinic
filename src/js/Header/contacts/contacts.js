export function createContact() {

  const menuContacts = document.createElement('div');
  const phoneNumber = document.createElement('p');
  const location = document.createElement('p');
  

  menuContacts.classList.add('menu_contacts');
  phoneNumber.classList.add('menu_phone-number');
  location.classList.add('menu_location');

  phoneNumber.textContent = '+7 (863) 000 00 00';
  location.textContent = 'Ростов-на-Дону';

  menuContacts.appendChild(phoneNumber);
  menuContacts.appendChild(location);
  
  return menuContacts
}