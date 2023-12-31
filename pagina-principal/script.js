document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    menuToggle.addEventListener('mouseover', function() {
        menuToggle.classList.add('hover');
    });

    menuToggle.addEventListener('mouseout', function() {
        menuToggle.classList.remove('hover');
    });
});
