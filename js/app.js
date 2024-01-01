
const Hamburger = document.querySelector(".hamburger");
const CloseIcon = document.querySelector(".closeicon")
const SideBar = document.querySelector(".side-bar");
const overlay = document.querySelector(".overlay");


function ShowHamburgerIcon (){
    Hamburger.style.display = "block";
}
function HideHamburgerIcon (){
    Hamburger.style.display = "none";
}
function ShowCloseIcon (){
    CloseIcon.style.display = "block";
}
function HideCloseIcon (){
    CloseIcon.style.display = "none";
}
function ShowSidebar (){
    SideBar.style.left = "0%";
}
function HideSidebar (){
    SideBar.style.left = "-68.27%";
}
function ShowOverlay (){
    overlay.style.display = "block";
}
function HideOverlay (){
    overlay.style.display = "none";
}
function setBodyOverflowVisible (){
    document.body.style.overflow = "";
}
function setBodyOverflowHidden (){
    document.body.style.overflow = "hidden";
}


function OpenSidebar() {
    HideHamburgerIcon();
    ShowCloseIcon();
    ShowSidebar();
    ShowOverlay();
    setBodyOverflowHidden();     
}

function CloseSidebar() {
    ShowHamburgerIcon();
    HideCloseIcon();
    HideSidebar();
    HideOverlay();
    setBodyOverflowVisible();     
}


Hamburger.addEventListener("click", OpenSidebar);
CloseIcon.addEventListener("click", CloseSidebar);




















// Hamburger.addEventListener("click", function (){

//     if (!SideBar.classList.contains("hide")) {

//         SideBar.classList.toggle("hide");
//         // hide the overlay
//         document.body.style.overflow = "";
//     } else {
//         SideBar.classList.toggle("hide");
//         // show the overlay
//         document.body.style.overflow = "hidden";
//     }

    
// });

