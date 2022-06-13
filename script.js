

const menuBtn = document.querySelector('.burger');
const menuNav = document.querySelector ('.menuNav');

menuBtn.addEventListener('click', function (){
menuBtn.classList.toggle ('isActive');
menuNav.classList.toggle ('isActive');
});