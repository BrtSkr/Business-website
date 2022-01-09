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
    //console.log(currentPos);
  }, 2000);
}

//Scrolls to top of the webpage (used for scroll up button)
function scrollUp() {
  window.scrollTo(top);
}

slidingElement = document.querySelector(".nav-slide");
openButton = document.querySelectorAll(".nav-mbtn");
closeButton = document.querySelector(".nav-close");

class NavSlide {
  constructor(slideElement, openNavBtn, closeBtn) {
    this.slideElement = slideElement;
    this.openNavBtn = openNavBtn;
    this.closeBtn = closeBtn;
  }
  openNav() {
    this.slideElement.style.top = "0%";
  }
  closeNav() {
    this.slideElement.style.top = "100%";
    console.log("worked");
  }
}

let slideNav = new NavSlide(slidingElement, openButton, closeButton);

//on click close nav (mobile)
closeButton.addEventListener("click", () => {
  slideNav.closeNav();
});
//In mobile navs for each 'menu button' adds event listener with function from class
openButton.forEach((el) => {
  el.addEventListener("click", () => {
    slideNav.openNav();
  });
});

//scroll into view to specified section on button click in navbar
function scrollToSection() {
  document.querySelector(".navs").addEventListener("click", (event) => {
    const tgt = event.target.closest("button");
    if (
      tgt &&
      (tgt.classList.contains("teamBtn") ||
        tgt.classList.contains("serviceBtn") ||
        tgt.classList.contains("contactBtn") ||
        tgt.classList.contains("aboutBtn"))
    ) {
      document.getElementById(tgt.dataset.id).scrollIntoView();
    } else if (tgt.classList.contains("homeBtn")) {
      scrollUp();
    }
  });
  document.querySelector(".header").addEventListener("click", (event) => {
    if (event.target.classList.contains("seeMore")) {
      document.getElementById(event.target.dataset.id).scrollIntoView();
    }
  });
}
//Lazy Loading
const lazyLoading = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
      const images = document.querySelectorAll('.images')
        images.forEach(image => {
        image.classList.add('show')
      })
      }
  
    
    })
});
lazyLoading.observe(document.querySelector(".team"))

//Event listener for scrollUpBtn (It just scrolls up to the top of the document)
//Might be changed in the future for more universal usage
scrollUpBtn.addEventListener("click", scrollUp);

// removes element after specified time
// currently removes loader
const removeLoader = () => {
  let loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.remove();
  }, 2000);
};

//event listener with all functions that will be loaded on load
addEventListener("load", () => {
  checkCurrentPos();
  removeLoader();
  scrollToSection();
});
