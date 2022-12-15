// JavaScript Document
console.log("hi");
var hamburgerMenusluiten=document.querySelector(".sluiten")

var hamburgerMenu=document.querySelector(".hamburgermenu");

hamburgerMenu.addEventListener("click",openMenu)
console.log("menu")

hamburgerMenusluiten.addEventListener("click", sluitMenu)
function openMenu(){ 
    var navi=document.querySelector(".verstopt")

    navi.classList.add("zichtbaar")
}

function sluitMenu(){
    var navi2=document.querySelector(".verstopt")
    navi2.classList.remove("zichtbaar")
}
