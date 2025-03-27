function openMenu() {
const nav = document.getElementById("nav");
nav.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
fetch("./header/header.html")
.then((response) => response.text())
.then((data) => (document.getElementById("header").innerHTML = data));
});
document.addEventListener("DOMContentLoaded", function () {
fetch("./landing/landing.html")
.then((response) => response.text())
.then((data) => (document.getElementById("landing").innerHTML = data));
});
document.addEventListener("DOMContentLoaded", function () {
fetch("./about/about.html")
.then((response) => response.text())
.then((data) => (document.getElementById("about").innerHTML = data));
});
document.addEventListener("DOMContentLoaded", function () {
fetch("./features/features.html")
.then((response) => response.text())
.then((data) => (document.getElementById("features").innerHTML = data));
});
document.addEventListener("DOMContentLoaded", function () {
fetch("./slider/slider.html")
.then((response) => response.text())
.then((data) => (document.getElementById("slider").innerHTML = data));
});
document.addEventListener("DOMContentLoaded", function () {
fetch("./clients/clients.html")
.then((response) => response.text())
.then((data) => (document.getElementById("clients").innerHTML = data));
});
document.addEventListener("DOMContentLoaded", function () {
fetch("./download/download.html")
.then((response) => response.text())
.then((data) => (document.getElementById("download").innerHTML = data));
});
document.addEventListener("DOMContentLoaded", function () {
fetch("./contact/contact.html")
.then((response) => response.text())
.then((data) => (document.getElementById("contact").innerHTML = data));
});
document.addEventListener("DOMContentLoaded", function () {
fetch("./footer/footer.html")
.then((response) => response.text())
.then((data) => (document.getElementById("footer").innerHTML = data));
});
