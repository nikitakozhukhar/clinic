export function createBannerContentMan() {

  const chechUpContainer = document.createElement('div');
  const checkUpTitle = document.createElement('h2');
  const checkUpDiscription = document.createElement('h5');
  const checkUpList = document.createElement('ul');
  const productPrice = document.createElement('div');
  const price = document.createElement('div');
  const oldPrice = document.createElement('span');
  const newPrice = document.createElement('span');
  const buttonContainer = document.createElement('div');
  const btnSubscribe = document.createElement('button');
  const btnMoreDetailed = document.createElement('button');

  const checkUpListItems = [
    'Гормональный скрининг',
    'Тестостерон',
    'Свободный тестостерон',
    'Глобулин, связывающий половые гормоны',
  ];

  // Добавление текста

  checkUpTitle.textContent = 'CHECK-UP';
  checkUpDiscription.textContent = 'ДЛЯ МУЖЧИН';
  oldPrice.innerHTML = 'Всего 2800 &#8381';
  newPrice.innerHTML = '3500 &#8381';
  btnSubscribe.textContent = 'Записаться';
  btnMoreDetailed.textContent = 'Подробнее';
  
  // Добавление классов элементам

  chechUpContainer.classList.add('check-up_container');
  checkUpTitle.classList.add('check-up_title');
  checkUpDiscription.classList.add('check-up_discription');
  checkUpList.classList.add('check-up_list');
  productPrice.classList.add('product-price');
  price.classList.add('price');
  oldPrice.classList.add('old-price');
  newPrice.classList.add('new-price');
  buttonContainer.classList.add('btn-container');
  btnSubscribe.classList.add('btn', 'btn-subscribe');
  btnMoreDetailed.classList.add('btn', 'btn_more-detailed');
  
  // Добавление списка для чек-ап

  for (let  i = 0; i <= checkUpListItems.length - 1; i++) {
    const checkUpListItem = document.createElement('li');
    checkUpListItem.classList.add('check-up_list-item');
    checkUpListItem.textContent = checkUpListItems[i];
    checkUpList.appendChild(checkUpListItem);
  }

  // Добавление дочерних элементов 

  checkUpTitle.appendChild(checkUpDiscription);
  price.appendChild(oldPrice);
  price.appendChild(newPrice);
  productPrice.appendChild(price);
  productPrice.appendChild(buttonContainer);
  buttonContainer.appendChild(btnSubscribe);
  buttonContainer.appendChild(btnMoreDetailed);

  chechUpContainer.appendChild(checkUpTitle);
  chechUpContainer.appendChild(checkUpList);
  chechUpContainer.appendChild(productPrice);

  return chechUpContainer
}