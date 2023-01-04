export default function initModalProject() {
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
