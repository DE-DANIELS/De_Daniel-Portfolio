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
