/* DISPLAY GRID AREAS INFO */
const areaBtns = document.querySelectorAll(".area-btn");
const hiddenText = document.querySelectorAll(".area-text");

function textDisplay(btn) {
  btn.previousElementSibling.style.display = "block";
}

areaBtns.forEach(function (areaBtn) {
  areaBtn.addEventListener("click", function (e) {
    hiddenText.forEach(function (text) {
      text.style.display = "none";
    });
    textDisplay(areaBtn);
  });
});

/* SUCCESS MESSAGE */

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
