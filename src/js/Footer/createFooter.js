import { createFooterContent } from './createFooterContent'

export function createFooter() {
  const footer = document.createElement('footer');

  footer.classList.add('footer');
  
  footer.appendChild(createFooterContent());

  return footer
}

const footer = createFooter();
document.body.appendChild(footer);