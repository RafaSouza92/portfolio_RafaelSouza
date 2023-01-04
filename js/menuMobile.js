export default function initMenuMobile() {
  const buttonMobile = document.querySelector('.mobile-menu');
  const menu = document.querySelector('.menu');

  function handleMenuMobile() {
    menu.classList.toggle('active');
    buttonMobile.classList.toggle('active');
  }
  buttonMobile.addEventListener('click', handleMenuMobile);
}
