function createContent(id, text) {
  let content = document.createElement('content');
  content.setAttribute('id', id);
  content.innerText = text;

  return content;
}

export default function loadContent(parent) {
  let content = createContent('main-content','Test Main Content Details');

  parent.appendChild(content);
}