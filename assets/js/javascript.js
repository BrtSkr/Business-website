let scrollUpBtn = document.querySelector(".scroll-up");
//checks current pageYoffset every 2s and if it's position is equal or greater than desired value
function checkCurrentPos() {
  setInterval(() => {
    let currentPos = window.pageYOffset;
    let navbarFixed = document.querySelector(".navbar-fixed");
    //Checks if currentPos is equal or higher than desired value
    //if it's true then scrollUpBtn and navbar fixed appears
    if (currentPos >= 300) {
      scrollUpBtn.style.margin = "0vh";
      navbarFixed.style.top = "0";
      console.log("scroll up and navbar-fixed are now visible");
    }
    //otherwise it's still hidden
    else {
      scrollUpBtn.style.margin = "0 -10vh 0 0";
      navbarFixed.style.top = "-15vh";
      console.log("navbar-fixed and scrollUpBtn are now hidden");
    }
    console.log(currentPos);
  }, 2000);
}
function scrollUp() {
    window.scrollTo(top);
}
//Event listener for scrollUpBtn (It just scrolls up to the top of the document)
//Might be changed in the future for more universal usage
scrollUpBtn.addEventListener('click', scrollUp)


//event listener with all functions that will be loaded on load
addEventListener("load", () => {
  checkCurrentPos();
});

