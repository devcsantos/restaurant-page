import loadHeader from './modules/load-header';
import loadContent from './modules/load-content';
import loadFooter from './modules/load-footer';

const render = (() => {
  let bodyElement = document.getElementsByTagName('body')[0];


  const _initialize = (() => {
    loadHeader(bodyElement);
    loadContent(bodyElement);
    loadFooter(bodyElement);
  })();
})();