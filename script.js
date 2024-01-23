function toggle() {
  const btnToggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  const blackScreen = document.querySelector(".layar-hitam");
  btnToggle.addEventListener("click", function () {
    const items = btnToggle.children;
    items[0].classList.toggle("w-full");
    items[2].classList.toggle("w-full");
    menu.classList.toggle("-translate-y-[120%]");
    blackScreen.classList.toggle("hidden");
  });
}

function main() {
  toggle();
}

main();
