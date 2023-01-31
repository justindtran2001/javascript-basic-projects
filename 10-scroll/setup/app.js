// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  //   linksContainer.classList.toggle("show-links");
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (linksContainerHeight === 0)
    linksContainer.style.height = `${linksHeight}px`;
  else linksContainer.style.height = 0;
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
const homeSection = document.getElementById("home");
window.addEventListener("scroll", () => {
  const pageOffsetY = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  const homeSectionHeight = homeSection.getBoundingClientRect().height;

  if (pageOffsetY > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (pageOffsetY > homeSectionHeight / 2) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((srlLink) => {
  srlLink.addEventListener("click", (e) => {
    e.preventDefault();

    const hrefId = e.currentTarget.getAttribute("href").slice(1);
    const hrefTargetElement = document.getElementById(hrefId);

    const navHeight = navbar.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const navIsFixed = navbar.classList.contains("fixed-nav");

    let position = hrefTargetElement.offsetTop - navHeight;
    // console.group("DEBUG");
    // console.log(hrefTargetElement.offsetTop);
    // console.log(position);
    // console.log(navHeight);
    // console.groupEnd()
    if (!navIsFixed) {
      /**
       **   Self-note:
       **       If an element (nav) is fixed,
       **       it is removed from the normal flow.
       **       Hence, the offset is different.
       */
      position -= navHeight;
    }

    if (navHeight > 82) {
      /**
       **   Self-note:
       **       82px is the height of the navBar
       **       (according to DevTools)
       */
      position += linksContainerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
