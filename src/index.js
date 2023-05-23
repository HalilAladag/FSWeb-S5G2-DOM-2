import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

const global = document.querySelector("body");
global.style.backgroundColor = "antiquewhite";


const headCont = document.querySelector(".logo-heading");
headCont.addEventListener("mouseover", function (e) {
    if (headCont.style.color === "red") {
        headCont.style.color = "black";
    } else {
        headCont.style.color = "red";
    }
});

const mainNavCont = document.querySelectorAll(".main-navigation .nav-link");
mainNavCont.forEach(function (navLink) {
    navLink.addEventListener("click", function (e) {
        alert("Daha fazla bilgi almak isterseniz bize ulaşın!");
        if (navLink.style.color === "red") {
            navLink.style.color = "black";
        } else {
            navLink.style.color = "red";
        }
    });
});

const destCont = document.querySelectorAll(".destination");

destCont.forEach(function (destination) {
    destination.addEventListener("click", function (e) {
        if (destination.style.backgroundColor === "gray") {
            destination.style.backgroundColor = "antiquewhite";
        } else {
            destination.style.backgroundColor = "gray";
        }
    });
});

const footer = document.querySelector(".footer");
footer.addEventListener("click", function () {
    if (footer.style.backgroundColor === "black") {
        footer.style.backgroundColor = "antiquewhite";
    } else {
        footer.style.backgroundColor = "black";
    }
});

const footerP = document.querySelector(".footer p");
footerP.addEventListener("click", function () {
    if (footerP.style.color === "antiquewhite") {
        footerP.style.color = "black";
    } else {
        footerP.style.color = "antiquewhite";
    }
});

window.addEventListener("wheel", function (e) {
    if (event.deltaY > 0) {
        window.scrollBy(0, 100);
    } else {
        window.scrollBy(0, -100);
    }
});
window.addEventListener("keydown", function (e) {
    if (event.key === "ArrowUp") {
        window.scrollBy(0, -200);
    } else if (event.key === "ArrowDown") {
        window.scrollBy(0, 200);
    }
});
window.addEventListener("resize", function (e) {
    const container = document.querySelector(".container");

    if (window.innerWidth < 800) {
        container.classList.add("small");
    } else {
        container.classList.remove("small");
    }
});



// Kodlar buraya gelecek!