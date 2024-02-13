window.onload = toggleDark;

function toggleDark() {
    var img = document.querySelector("#image02 .frame img");
    var img2 = document.querySelector("#image03 .frame img");
    var wrapper = document.querySelectorAll(".wrapper");
    var buttons = document.querySelectorAll(".button");
    var text = document.querySelectorAll("span.p");
    var body = document.querySelector("body");
    if ((!img) || (!wrapper)) return;

    var date = new Date();

    if (date.getHours() < 6 || date.getHours() > 18) {
        body.classList.add('dark');
        wrapper.forEach(element => {
            element.classList.add('dark');
        });
        buttons.forEach(element => {
            element.classList.add('dark');
        });
        text.forEach(element => {
            element.classList.add('dark');
        });
        img.src = "/assets/images/image01.gif";
        img2.src = "/assets/images/image01.gif";
    }
}