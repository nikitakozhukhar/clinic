export function createBurgerMenuList() {
  const burgerMenuList = document.createElement('ul');
  const btn = document.createElement('button');

  const listItems = [
    'О клинике',
    'Услуги',
    'Специалисты',
    'Цены',
    'Контакты'
  ];

  btn.classList.add('subscribe');
  burgerMenuList.classList.add('menu-list', 'desktop-menu-list', 'hidden');

  btn.textContent = 'Записаться на прием';
  
  for (let  i = 0; i <= listItems.length - 1; i++) {
    const menuListItem = document.createElement('li');
    menuListItem.classList.add('menu-list-item');
    menuListItem.textContent = listItems[i];
    burgerMenuList.appendChild(menuListItem);
  }

  burgerMenuList.appendChild(btn);
  
  return burgerMenuList
}