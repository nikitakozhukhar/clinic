
export function controllSlider() {
  const sliderBack = document.querySelector('.sliderBack');
  const sliderForward = document.querySelector('.sliderForward');
  const sliderCurrent = document.querySelector('.slider_current');
  const checkUpImg = document.querySelector('.check-up_img');

  let current = 0;

  const imgScr = [
    'https://i.postimg.cc/7hZFqwSc/doctor-working-table-1.png',
    'https://i.postimg.cc/W1Gd0KKn/Doctor.webp',
  ]
  sliderCurrent.textContent = `${current + 1} / ${imgScr.length}`;

  sliderBack.addEventListener('click', () => {
    checkUpImg.src = imgScr[0]
    current = imgScr.indexOf('https://i.postimg.cc/7hZFqwSc/doctor-working-table-1.png') + 1;
    sliderCurrent.textContent = `${current} / ${imgScr.length}`;
  });

  sliderForward.addEventListener('click', () => {
    checkUpImg.src = imgScr[1];
    current = imgScr.indexOf('https://i.postimg.cc/W1Gd0KKn/Doctor.webp') + 1;
    sliderCurrent.textContent = `${current} / ${imgScr.length}`;
  })

  return
}

controllSlider()