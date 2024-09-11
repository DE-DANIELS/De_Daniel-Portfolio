// HOME NAV-BAR ACTIVE

const navLinkEls = document.querySelectorAll(".nav__link");
const sectionEls = document.querySelectorAll(".section");

let currentSection = "Home";
window.addEventListener("scroll", () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= sectionEl.offsetTop){
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach(navLinkEl => {
        if(navLinkEl.href.includes(currentSection)){
            document.querySelector(".active22").classList.remove("active22");
            navLinkEl.classList.add("active22");
        }
    });
});

// MOBLILE NAV-VIEW

const openMobileEls = document.querySelector(".fa-bars");
const closeMobileEls = document.querySelector(".fa-xmark");
const myMobileLinks = document.querySelector(".N-mobile");

openMobileEls.addEventListener("click", function(){
    myMobileLinks.style.display = "block";
    closeMobileEls.style.display = "block";
    openMobileEls.style.display = "none";
})

closeMobileEls.addEventListener("click", function(){
    myMobileLinks.style.display = "none";
    closeMobileEls.style.display = "none";
    openMobileEls.style.display = "block";
})

const closeMobileEls2 = document.querySelectorAll(".M-links");

closeMobileEls2.forEach.addEventListener("click", function(){
    myMobileLinks.style.display = "none";
})