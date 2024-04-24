export function openBurger() {
  const burger = document.querySelector('.burger-menu');
  const menu = document.querySelector('.menu-list');
  burger.addEventListener('click', (e) => {
    menu.classList.toggle('hidden');
  })
}

openBurger();