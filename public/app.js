const burger=document.querySelector(".burger")
const nav=document.querySelector(".nav-links")



burger.addEventListener("click",showBurger)
let angle=100;
function showBurger(e){
    nav.classList.toggle("show")
    // burger.classList.toggle("cross")
    // line1.style.transform="rotate(`40`deg)"
}