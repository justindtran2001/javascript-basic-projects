// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggleBtn = document.querySelector('.nav-toggle');
const linksList = document.querySelector(".links");

/** Listeners */
navToggleBtn.addEventListener('click', () => {
    linksList.classList.toggle('show-links');
    // if (linksList.classList.contains('show-links'))
    //     linksList.classList.toggle('show-links', false);
    // else
    //     linksList.classList.toggle('show-links', true);
});