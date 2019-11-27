const parallax = document.getElementById("parallax1");

console.log(parallax);

const mq = window.matchMedia( "(max-width: 1000px)" );




window.addEventListener("scroll",function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = (offset*-.16)+400 +"px";
})