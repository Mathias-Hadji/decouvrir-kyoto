const btnMenuSmallScreen = document.querySelector('.icon-menu-small-screen');
const menu = document.querySelector('.list-nav');

btnMenuSmallScreen.addEventListener('click', () => {

    menu.classList.toggle('active');
});


const allLinks = document.querySelectorAll('.list-nav li');

allLinks.forEach(link => {

    link.addEventListener('click', () => {

        menu.classList.remove('active');
    });
})


