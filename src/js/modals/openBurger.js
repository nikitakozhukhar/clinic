export function openBurger() {
  const burger = document.querySelector('.burger-menu');
  const menu = document.querySelector('.menu-list');
  const bar1 = document.querySelector('.bar1');
  const bar2 = document.querySelector('.bar2');
  const bar3 = document.querySelector('.bar3');

  burger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    bar1.classList.toggle('rotated');
    bar2.classList.toggle('rotated2');
    bar3.classList.toggle('hidden');
    
  })
}

openBurger();