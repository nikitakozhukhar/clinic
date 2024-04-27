import { createBannerContentMan } from "./createBannerContentMan";

import { createSlider } from "../slider/createSlider";

export function createBanner() {
  const bannerSection = document.createElement('section');
  const img = document.createElement('img');

  img.src = 'https://i.postimg.cc/7hZFqwSc/doctor-working-table-1.png';
  img.alt = 'доктор выписывает рецепт лечения';

  bannerSection.classList.add('check-up');
  img.classList.add('check-up_img');

  
  bannerSection.appendChild(createBannerContentMan());
  bannerSection.appendChild(img);
  
  return bannerSection
};

