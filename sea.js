// ============================
// ظهور صناديق المعلومات
// ============================

const boxes = document.querySelectorAll(".info-box");

function showOnScroll() {
    boxes.forEach(function(box) {

        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;

        if (boxPosition < screenPosition) {
            box.classList.add("show");
        }

    });
}

window.addEventListener("scroll", showOnScroll);

// تشغيل التأثير عند فتح الصفحة
showOnScroll();


function showSecret(button) {

    const info = button.nextElementSibling;

    if (info.style.display === "block") {

        info.style.display = "none";
        button.textContent = "اكتشف المزيد";

    } else {

        info.style.display = "block";
        button.textContent = "إخفاء";

    }
}



function showExploration(button) {

    const info = button.nextElementSibling;

    if (info.style.display === "block") {

        info.style.display = "none";
        button.textContent = "اكتشف الرحلة";

    } else {

        info.style.display = "block";
        button.textContent = "إخفاء";

    }

}


const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});