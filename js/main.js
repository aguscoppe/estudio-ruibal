/* DISPLAY GRID AREAS INFO */

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
