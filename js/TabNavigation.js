export default function TabNavigation() {
  const htmlElements = {
    iconsList: [...document.querySelector('.icons-list').children],
    iconsContent: [...document.querySelector('.icons-content').children],
    openTab: document.querySelector('[data-open]'),
  };

  function hideContent() {
    htmlElements.iconsContent.forEach((section) => {
      section.style.display = 'none';
    });
  }

  function selectTab(e) {
    removeClass();
    const target = e.currentTarget;
    showCurrentTab(target.dataset.id);
    target.className += ' active';
  }

  function showCurrentTab(id) {
    hideContent();
    const tabContent = document.querySelector('#' + id);
    tabContent.style.display = 'block';
  }
  function removeClass() {
    htmlElements.iconsList.forEach((icon) => {
      icon.className = icon.className.replace(' active', ' ');
    });
  }

  function listeningChanges() {
    htmlElements.iconsList.forEach((icon) => {
      icon.addEventListener('click', selectTab);
    });
  }

  function init() {
    listeningChanges();
    hideContent();
    htmlElements.openTab.click();
  }

  return {
    init,
  };
}
window.addEventListener('load', () => {
  const tabNavigation = TabNavigation();
  tabNavigation.init();
});
