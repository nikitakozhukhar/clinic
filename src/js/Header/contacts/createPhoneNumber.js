export function createPhoneNumber() {

  const container = document.createElement('div');
  const ikonWA = document.createElement('div');
  const phoneNumber = document.createElement('p');
  
  container.classList.add('desktop-phone');
  ikonWA.classList.add('WA');
  phoneNumber.classList.add('menu_phone-number');
  
  phoneNumber.textContent = '+7 (863) 000 00 00';

  container.appendChild(ikonWA);
  container.appendChild(phoneNumber);
  
  
  return container
}