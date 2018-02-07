document.addEventListener('DOMContentLoaded', function() {

  new Typed('#codeHeader', {
    strings: ['$ npm install -g @konf/konf\n`Installing Konf...` ^1000\n$ konf new^1000\n$ konf server^1000\n$ konf build\n`Building konf...` ^1000'],
    typeSpeed: 40,
    loop: true
  });

  const htmlClass = document.documentElement;
  const btnMenu = document.getElementById("btn-menu");
  const contentMenu = document.getElementById("menu-content");
  const iconMenu = document.getElementById("icon-menu");

  btnMenu.addEventListener('click', function toggleMenu () {
    contentMenu.classList.toggle('open');
    htmlClass.classList.toggle('menu-open');
    iconMenu.classList.toggle("fa-bars");
    iconMenu.classList.toggle("fa-times");
  });


});
