import loadNav from './load-nav';

function createHeader(id, text) {
  let header = document.createElement('header');

  header.setAttribute('id', id);
  header.innerText = text;

  return header;
}

export default function loadHeader(parent) {
  let header = createHeader('header', 'Restaurant Name');
  
  loadNav(header);
  parent.appendChild(header);
}
