let scrollUpBtn=document.querySelector(".scroll-up");function checkCurrentPos(){setInterval((()=>{let e=window.pageYOffset,t=document.querySelector(".navbar-fixed"),o=document.querySelector(".navbar-mobile-fixed");e>=300?(scrollUpBtn.style.margin="0vh",t.style.top="0",o.style.top="0",console.log("scroll up and navbar-fixed are now visible")):(scrollUpBtn.style.margin="0 -10vh 0 0",t.style.top="-25vh",o.style.top="-25vh",console.log("navbar-fixed and scrollUpBtn are now hidden"))}),2e3)}function scrollUp(){window.scrollTo(top)}slidingElement=document.querySelector(".nav-slide"),openButton=document.querySelectorAll(".nav-mbtn"),closeButton=document.querySelector(".nav-close");class NavSlide{constructor(e,t,o){this.slideElement=e,this.openNavBtn=t,this.closeBtn=o}openNav(){this.slideElement.style.top="0%"}closeNav(){this.slideElement.style.top="100%",console.log("worked")}}let slideNav=new NavSlide(slidingElement,openButton,closeButton);function scrollToSection(){document.querySelector(".navs").addEventListener("click",(e=>{const t=e.target.closest("button");t&&(t.classList.contains("teamBtn")||t.classList.contains("serviceBtn")||t.classList.contains("contactBtn")||t.classList.contains("aboutBtn"))?document.getElementById(t.dataset.id).scrollIntoView():t.classList.contains("homeBtn")&&scrollUp()})),document.querySelector(".header").addEventListener("click",(e=>{e.target.classList.contains("seeMore")&&document.getElementById(e.target.dataset.id).scrollIntoView()}))}closeButton.addEventListener("click",(()=>{slideNav.closeNav()})),openButton.forEach((e=>{e.addEventListener("click",(()=>{slideNav.openNav()}))}));const lazyLoading=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){document.querySelectorAll(".images").forEach((e=>{e.classList.add("show")}))}}))}));lazyLoading.observe(document.querySelector(".team")),scrollUpBtn.addEventListener("click",scrollUp);const removeLoader=()=>{let e=document.querySelector(".loader");setTimeout((()=>{e.remove()}),2e3)};addEventListener("load",(()=>{checkCurrentPos(),removeLoader(),scrollToSection()}));
//# sourceMappingURL=index.2987f896.js.map