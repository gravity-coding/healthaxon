var hme = document.querySelector(".home");
var wwa = document.querySelector(".wwa");
var data = document.querySelector(".data");
var mission = document.querySelector(".mission");
var contact = document.querySelector(".contact");
var people = document.querySelector(".people");
var cirMenu = document.querySelector(".cir-menu");

hme.addEventListener("mouseenter", function () {
  cirMenu.style.backgroundImage =
    "url(https://images.unsplash.com/photo-1711470053377-bdd52fdba484?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
});

wwa.addEventListener("mouseenter", function () {
  cirMenu.style.backgroundImage =
    "url(https://images.unsplash.com/photo-1711555803385-584e8fcdccf8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
});

data.addEventListener("mouseenter", function () {
  cirMenu.style.backgroundImage =
    "url(https://images.unsplash.com/photo-1711066444208-432f9d4e6db4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
});

mission.addEventListener("mouseenter", function () {
  cirMenu.style.backgroundImage =
    "url(https://images.unsplash.com/photo-1710687048431-0861b83eb1d3?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
});

contact.addEventListener("mouseenter", function () {
  cirMenu.style.backgroundImage =
    "url(https://images.unsplash.com/photo-1711127016876-9a1b7e05126f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
});

people.addEventListener("mouseenter", function () {
  cirMenu.style.backgroundImage =
    "url(https://images.unsplash.com/photo-1711419397450-476643e9020a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
});


var openR = document.querySelector(".ri-menu-3-line");
var closeR = document.querySelector(".ri-close-fill");
var mainMenu = document.querySelector(".menu");

openR.addEventListener("click", function(){
    mainMenu.style.top = "0%";
    openR.style.display = "none";
    closeR.style.display = "initial";
})

closeR.addEventListener("click", function(){
    mainMenu.style.top = "-100%";
    openR.style.display = "initial";
    closeR.style.display = "none";
})


