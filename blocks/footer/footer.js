import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);
  const main = document.createElement('main');
  const childDivs =  Array.from(fragment.children);
 
  for (let i = 0; i < childDivs.length; i++) {
    const child = childDivs[i];
    const section = document.createElement('div');
    section.classList.add('section-' + i);
    Array.from(child.querySelectorAll('a')).forEach((link, index) => {
      link.classList.remove('button');
      link.classList.add('link');
      link.classList.add('link-' + index);
    })
    Array.from(child.querySelectorAll('.columns')).forEach((column) => {
      column.className = '';
      column.firstElementChild.classList.add("footer-columns");
    })
    section.appendChild(child);
    main.appendChild(section);
  }

  block.textContent = '';
  const footer = document.createElement('div');
  while (main.firstElementChild) footer.append(main.firstElementChild);

  block.append(footer);
}
