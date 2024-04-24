export function createLocation() {

  const location = document.createElement('div');
  // const img = document.createElement('img');
  const city = document.createElement('p');
  const street = document.createElement('p');

  // img.src = '.../src/img/location.png'

  location.classList.add('desktop-location');
  city.classList.add('desktop-city');
  street.classList.add('desktop-street');

  city.textContent = 'Ростов-на-Дону';
  street.textContent = 'ул. Ленина, 2б';

  location.appendChild(city);
  location.appendChild(street);
  
  return location
}