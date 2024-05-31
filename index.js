document.addEventListener("DOMContentLoaded", function () {
  const menuOpener = document.getElementById("menuOpener");
  const menu = document.getElementById("menu");
  const menuCloser = document.getElementById("menuCloser");
  const mode = document.getElementById("mode");
  const sT = document.getElementById("switchThis");
  const nav = document.getElementById("navHead");

  //Open button
  menuOpener.addEventListener("click", function () {
    menu.classList.remove("opacity-0");
    menu.classList.remove("w-0");
    menu.classList.remove("px-0");

    menu.classList.add("opacity-100");
    menu.classList.add("w-72");
  });

  //Close Button
  menuCloser.addEventListener("click", function () {
    menu.classList.add("opacity-0");
    menu.classList.add("w-0");
    menu.classList.add("px-0");

    menu.classList.remove("opacity-100");
    menu.classList.remove("w-72");
  });

  const propsLight = {
    dotColor: "#FF0000",
    invert: true,
    size: 80,
    font: "sans-serif",
    fontSize: 16,
    zIndex: 1,
    fontColor: "#000000",
    tooltipPadding: 10,
    focusableElementsOffsetX: 0.7,
    focusableElementsOffsetY: 0.7,
  };

  const propsDark = {
    dotColor: "#FF0000",
    invert: true,
    size: 50,
    font: "sans-serif",
    fontSize: 16,
    zIndex: 1,
    fontColor: "#FFFFFF",
    tooltipPadding: 10,
    focusableElementsOffsetX: 0.7,
    focusableElementsOffsetY: 0.7,
  };

  var current = propsLight;

  //Mode Switcher
  mode.addEventListener("click", function () {
    if (sT.classList.contains("bi-sun-fill")) {
      document.body.classList.add("dark");
      sT.classList.remove("bi-sun-fill");
      mode.classList.add("bg-gray-700");
      mode.classList.add("text-white");
      mode.classList.remove("bg-white");
      mode.classList.remove("text-gray-700");
      sT.classList.add("bi-moon-fill");
    } else {
      document.body.classList.remove("dark");
      mode.classList.add("bg-white");
      mode.classList.add("text-gray-700");
      mode.classList.remove("bg-gray-700");
      mode.classList.remove("text-white");
      sT.classList.remove("bi-moon-fill");
      sT.classList.add("bi-sun-fill");
    }
  });

  const blobity = new Blobity(current);

  const header = document.querySelector("header");
  const headerHeight = header.offsetHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight) {
      header.classList.add("shadow-lg");
    } else {
      header.classList.remove("shadow-lg");
    }
  });
});
