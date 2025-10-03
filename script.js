// circle skill////////////////////////////////////////

const circles = document.querySelectorAll('.circle');

circles.forEach(elem=> {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot: ${rotate}deg;"></div>`;
    };
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll(".points");
    for(let i = 0 ; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})


// active menu ///////////////////////

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// Animation au scrolle ///////////////////////////////////

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if(entry.isIntersecting){
        entry.target.classList.add("show-items");
    }else{
        entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

const scrollLeft = document.querySelectorAll(".scroll-left");
scrollLeft.forEach((el) => observer.observe(el));

const scrollRight = document.querySelectorAll(".scroll-right");
scrollRight.forEach((el) => observer.observe(el));

// Burger Menu //////////////////////////
const btnMenu = document.querySelector(".burgerBtn");
const navig = document.querySelector(".navigbar");

btnMenu.addEventListener("click", () => {
    navig.classList.toggle("show-menu");
});

// Envoi et réception d'un message par mail /////////////////
function initEmailForm() {
  emailjs.init("Y-jNQ8tZrTdkO2r98");

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.btn');
    const originalText = submitBtn.value;
    submitBtn.value = 'Envoi en cours...';
    submitBtn.disabled = true;

    emailjs.sendForm("service_nak2agq", "template_22jea9v", this)
        .then(() => {
            // Message de succès plus stylé
            alert("🎉 Message envoyé avec succès !\nJe vous répondrai dans les plus brefs délais.");
            this.reset();
        }, (err) => {
            console.error("Erreur EmailJS:", err);
            alert("❌ Une erreur est survenue lors de l'envoi.\nVeuillez réessayer ou me contacter directement à neofront188@gmail.com");
        })
        .finally(() => {
            submitBtn.value = originalText;
            submitBtn.disabled = false;
        });
});
}

document.addEventListener("DOMContentLoaded", initEmailForm);

// console.log("Service ID:", "service_a8fs4es");

