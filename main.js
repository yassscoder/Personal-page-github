const hamburguer = document.getElementById("hamburger");
const personal = document.getElementById("personal");
const btn_switch= document.getElementById("switch");
const menu= document.getElementById("menu");
const body= document.body;
const footer=document.getElementById("end");
const greet=document.getElementById("greet");
const position=document.getElementById("position");
const contact=document.getElementsByClassName("contact-icon");
const git=document.getElementById("git-icon");
const linkedin=document.getElementById("lnk-icon");
const mail=document.getElementById("mail-icon")
function  changeMenu(){
    personal.classList.toggle("show");
}
hamburguer.addEventListener("click", changeMenu);

function darkMode(){
    menu.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
    greet.classList.toggle("dark-mode");
    position.classList.toggle("dark-mode");
    contact.classList.toggle("dark-mode");
    git.classList.toggle("dark-mode");
    linkedin.classList.toggle("dark-mode");
    mail.classList.toggle("dark-mode");
}
btn_switch.addEventListener("click", darkMode);