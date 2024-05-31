document.addEventListener("DOMContentLoaded", function () {
  const menuOpener = document.getElementById("menuOpener");
  const menu = document.getElementById("menu");
  const menuCloser = document.getElementById("menuCloser");
  const mode = document.getElementById("mode");
  const sT = document.getElementById("switchThis");
  const mode2 = document.getElementById("mode2");
  const sT2 = document.getElementById("switchThis2");

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

  //Mode Switcher
  mode.addEventListener("click", function () {
    if (sT.classList.contains("bi-sun-fill")) {
      alert("e");
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

  mode2.addEventListener("click", function () {
    if (sT2.classList.contains("bi-sun-fill")) {
      document.body.classList.add("dark");
      sT2.classList.remove("bi-sun-fill");
      mode2.classList.add("bg-gray-700");
      mode2.classList.add("text-white");
      mode2.classList.remove("bg-white");
      mode2.classList.remove("text-gray-700");
      sT2.classList.add("bi-moon-fill");
    } else {
      document.body.classList.remove("dark");
      mode2.classList.add("bg-white");
      mode2.classList.add("text-gray-700");
      mode2.classList.remove("bg-gray-700");
      mode2.classList.remove("text-white");
      sT2.classList.remove("bi-moon-fill");
      sT2.classList.add("bi-sun-fill");
    }
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
