var typed = new Typed(".text",{
    strings:["Frontend Developer", "Java Developer", "Web Developer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function () {
        this.classList.toggle('open');
        navbar.classList.toggle('active');
    });

    navbar.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', () => {
            menuIcon.classList.remove('open');
            navbar.classList.remove('active');
        });
    });
});

