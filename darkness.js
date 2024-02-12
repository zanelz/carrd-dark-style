window.onload = toggleDark;

function toggleDark() {
var img = document.querySelector("#image02 .frame img");
var wrapper = document.querySelector(".wrapper");
var body = document.querySelector("body");
if ((!img) || (!wrapper)) return;

var date = new Date();

if (date.getHours() < 6 || date.getHours() > 18) {
body.classList.add('dark');
wrapper.classList.add('dark');
img.src = "/assets/images/image01.gif";
}
}