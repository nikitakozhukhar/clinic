import { createPostItem } from './postItem/createPostItem';
import { createBanner } from './banner/createBanner';
import { createSlider } from './slider/createSlider';

export function createMain() {
  const content = document.createElement('section');

  content.classList.add('content');

  content.appendChild(createPostItem());

  return content
}

const content = createMain();
document.body.appendChild(content);
document.body.appendChild(createBanner());
document.body.appendChild(createSlider());
