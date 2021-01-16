function createNav(id) {
  let navBar = document.createElement('nav');

  navBar.setAttribute('id',id);

  return navBar;
}

function createNavButton(id, text, parent) {
  let navButton = document.createElement('a');

  navButton.setAttribute('id', id);
  navButton.innerText = text;
  navButton.classList.add('nav-button');

  parent.appendChild(navButton);
}

export default function loadNav(parent) {
  let navBar = createNav('nav-bar');

  createNavButton('nav-home', 'Home', navBar);
  createNavButton('nav-menu', 'Menu', navBar);
  createNavButton('nav-about', 'About Us', navBar);

  parent.appendChild(navBar);
}