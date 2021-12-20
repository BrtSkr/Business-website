//checks current pageYoffset every 2s and if it's position is equal or greater than desired value


function checkCurrentPos() {
    setInterval(() => {
        let currentPos = window.pageYOffset;
        let scrollUpBtn = document.querySelector('.scroll-up');
        let navbarFixed = document.querySelector('.navbar-fixed');
        if (currentPos >= 300) {
            scrollUpBtn.style.margin = '0vh'
            navbarFixed.style.top = '0'
            console.log('scroll up and navbar-fixed are now visible')
        }
        else {
            scrollUpBtn.style.margin = '0 -10vh 0 0'
            navbarFixed.style.top = '-15vh'
            console.log('navbar-fixed and scrollUpBtn are now hidden')
        } 
        console.log(currentPos);
    },2000)
}
//event listener with all functions that will be loaded on load
addEventListener('load', () => {
    checkCurrentPos();
})
