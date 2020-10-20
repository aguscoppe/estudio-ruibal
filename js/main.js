/* BURGER MENU */

const burgerNav = document.querySelector(".burger-nav");
const navMenu = document.querySelector(".nav-menu ul");

function showMenu() {
  if (navMenu.classList[0] === "burger-show") {
    navMenu.classList.remove("burger-show");
    burgerNav.innerHTML = `<i class="fa fa-bars"></i>`;
  } else {
    navMenu.classList.add("burger-show");
    burgerNav.innerHTML = `<i class="fa fa-times"></i>`;
  }
}

burgerNav.addEventListener("click", showMenu);

/* CHANGE HEADER IMAGE */

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

/* DISPLAY HIDDEN INFO */

const areaBtns = document.querySelectorAll(".area-btn");

function textDisplay(element) {
  if (element.classList[1] === "hidden") {
    element.classList.remove("hidden");
    element.nextElementSibling.innerHTML = "<p>OCULTAR</p>";
  } else {
    element.classList.add("hidden");
    element.nextElementSibling.innerHTML = "<p>VER MÁS</p>";
  }
}

areaBtns.forEach(function (areaBtn) {
  areaBtn.addEventListener("click", function () {
    const areaText = areaBtn.previousElementSibling;
    textDisplay(areaText);
  });
});

/* DISPLAY FAQ ANSWERS */

const questionText = document.querySelectorAll(".question-text");

function replyDisplay(element) {
  if (element.classList[1] === "hidden") {
    element.classList.remove("hidden");
    element.previousElementSibling.style.color = "#1f2839";
    element.previousElementSibling.style.fontWeight = "bold";
  } else {
    element.classList.add("hidden");
    element.previousElementSibling.style.fontWeight = "200";
  }
}

questionText.forEach(function (question) {
  question.addEventListener("click", function () {
    const reply = question.nextElementSibling;
    replyDisplay(reply);
  });
});

/* DISPLAY SUCCESS MESSAGE */

let currentPath = location.href;

function successMsg() {
  document.querySelector(".success").style.display = "block";
  const btn = document.querySelector(".ok-btn");
  btn.addEventListener("click", hideMsg);
  setTimeout(hideMsg, 3000);
}

function hideMsg() {
  document.querySelector(".success").style.display = "none";
}

if (currentPath === "https://jasoc.com.ar/index.php?mailsent") {
  successMsg();
}
