document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('nav');
    var navOffset = nav.offsetTop;
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');
  
    menuToggle.addEventListener('click', function () {
      menu.classList.toggle('show');
    });
  
    window.addEventListener('scroll', function () {
      if (window.pageYOffset >= navOffset) {
        nav.classList.add('fixed');
      } else {
        nav.classList.remove('fixed');
        menu.classList.remove('show');
      }
    });
  });