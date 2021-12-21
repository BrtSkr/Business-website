let scrollUpBtn = document.querySelector(".scroll-up");

//checks current pageYoffset every 2s and if it's position is equal or greater than desired value
function checkCurrentPos() {
  setInterval(() => {
    let currentPos = window.pageYOffset;
    let navbarFixed = document.querySelector(".navbar-fixed");
    let navMobileFixed = document.querySelector(".navbar-mobile-fixed");
    //Checks if currentPos is equal or higher than desired value
    //if it's true then scrollUpBtn and navbar fixed appears
    if (currentPos >= 300) {
      scrollUpBtn.style.margin = "0vh";
      navbarFixed.style.top = "0";
      navMobileFixed.style.top = "0";
      console.log("scroll up and navbar-fixed are now visible");
    }
    //otherwise it's still hidden
    else {
      scrollUpBtn.style.margin = "0 -10vh 0 0";
      navbarFixed.style.top = "-25vh";
      navMobileFixed.style.top = "-25vh";
      console.log("navbar-fixed and scrollUpBtn are now hidden");
    }
    console.log(currentPos);
  }, 2000);
}
function scrollUp() {
  window.scrollTo(top);
}

let navSlide = document.querySelector(".nav-slide");
const openNav = () => {
  navSlide.style.top = "0%";
};
const closeNav = () => {
  navSlide.style.top = "100%";
  console.log("worked");
};

let closeBtn = document.querySelector(".nav-close");
let navMobileBtn = document.querySelectorAll(".nav-mbtn");

navMobileBtn.forEach((el) => {
  el.addEventListener("click", openNav, false);
});
closeBtn.addEventListener("click", closeNav);

//Event listener for scrollUpBtn (It just scrolls up to the top of the document)
//Might be changed in the future for more universal usage
scrollUpBtn.addEventListener("click", scrollUp);

let aboutSection = document.querySelector('.about')
let serviceSection = document.querySelector('.services')
let teamSection = document.querySelector('.team')
let homeBtn = document.querySelectorAll('.homeBtn');
let aboutBtn = document.querySelectorAll('.aboutBtn');
let serviceBtn = document.querySelectorAll('.serviceBtn')

let teamBtn = document.querySelectorAll('.teamBtn')
let myArray = [];
myArray[0] = homeBtn;
myArray[1] = aboutBtn;
myArray[2] = serviceBtn;
myArray[3] = teamBtn;

myArray.forEach(el => {
  addEventListener('click', () => {
    const yOffset = -200;
    teamBtn.forEach(() => {
      const yOffset = -200;
      const z =
        teamSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: z})
    });
    serviceBtn.forEach(() => {
      const yOffset = -200;
      const x = serviceSection.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: x})
      //serviceSection.scrollIntoView();
    });

  })
})

////event listener with all functions that will be loaded on load
addEventListener("load", () => {
  checkCurrentPos();
});
