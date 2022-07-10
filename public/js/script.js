const toggleButton = document.getElementById('arrow-icon')
const navbar = document.getElementById('navbar')
const nav = document.getElementById('nav')

// const arrowIcon = document.getElementById('arrow-icon')
toggleButton.onclick = () => {
    navbar.classList.toggle("active");
    nav.classList.toggle("move-arrow");


}