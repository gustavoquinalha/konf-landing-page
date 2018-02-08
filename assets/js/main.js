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

    btnMenu.addEventListener('click', function toggleMenu() {
        contentMenu.classList.toggle('open');
        htmlClass.classList.toggle('menu-open');
        iconMenu.classList.toggle("fa-bars");
        iconMenu.classList.toggle("fa-times");
    });

    var scrollpos = window.scrollY;
    var menuClass = document.getElementById("menu");

    window.addEventListener('scroll', function() {
        scrollpos = window.scrollY;
        if (scrollpos > 200) {
            menuClass.classList.add("menu-fixed");
        } else {
            menuClass.classList.remove("menu-fixed");
        }
    });




});

function showCurrentStep(evt, stepName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("getting-started--code--tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("getting-started--list--item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" selected", "");
    }
    document.getElementById(stepName).style.display = "block";
    evt.currentTarget.className += " selected";
}

document.getElementById("defaultStep").click();
