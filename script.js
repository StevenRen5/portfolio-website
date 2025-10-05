
// Declaring variables
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// click on menu icon (hamburger), the class (icon) is going to change to the X icon, so we can close the menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Change icon (e.g., hamburger to X)
    navbar.classList.toggle('active'); // Show the navbar in mobile view 
}