export function createBurgerMenu() {
  const burgerContainer = document.createElement('div');
  
  burgerContainer.classList.add('burger-menu');

  for (let  i = 1; i <= 3; i++) {
    const burgerItem = document.createElement('span');
    burgerItem.classList.add('bar', `bar${i}`);
    burgerContainer.appendChild(burgerItem);
  }

  return burgerContainer
}