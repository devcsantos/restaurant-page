function createFooter(id, text) {
  let footer = document.createElement('footer');
  
  footer.setAttribute('id', id);
  footer.innerText = text;

  return footer;
}

export default function loadFooter(parent) {
  let footer = createFooter('footer', 'Footer Text');

  parent.appendChild(footer);
}