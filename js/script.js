function TabNavigation() {
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

function sectionAnimation() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const halfWindow = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = sectionTop - halfWindow < 0;
        if (sectionVisible) {
          section.classList.add('ativo');
        }
      });
    }
  }
  animaScroll();
  window.addEventListener('scroll', animaScroll);
}
sectionAnimation();

function initMenuMobile() {
  const buttonMobile = document.querySelector('.mobile-menu');
  const menu = document.querySelector('.menu');

  function handleMenuMobile() {
    menu.classList.toggle('active');
    buttonMobile.classList.toggle('active');
  }
  buttonMobile.addEventListener('click', handleMenuMobile);
}
initMenuMobile();

function initModalProject() {
  const projectsImg = [...document.querySelectorAll('.project-card img')];
  const modalProject = document.querySelector('.img-modal');
  const modalContent = document.querySelector('.modal-content img');
  const closeModal = document.querySelector('.close-modal');

  function handleModal(event) {
    const newModalContent = event.target.getAttribute('src');
    modalContent.setAttribute('src', newModalContent);
    modalProject.style.display = 'flex';
  }
  projectsImg.forEach((img) => {
    img.addEventListener('click', handleModal);
  });

  function handleCloseModal() {
    modalProject.style.display = 'none';
  }
  closeModal.addEventListener('click', handleCloseModal);

  modalProject.addEventListener('click', clickOuside);
  function clickOuside(event) {
    if (event.target != modalContent) {
      handleCloseModal();
    }
  }
}
initModalProject();
