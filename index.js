document.addEventListener("DOMContentLoaded", function () {
  gsap.from("#navHead", {
    duration: 0.4,
    y: -50,
    opacity: 0,
    ease: "power2.out",
  });
  gsap.from("nav ul li", {
    duration: 1.5,
    x: -50,
    opacity: 0,
    stagger: 0.5,
    ease: "power2.out",
  });
  gsap.from("#trhg img", { scale: 0, duration: 1.6, ease: "bounce" });
  gsap.from("#text1", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
  gsap.from("#text", { opacity: 0, y: 50, duration: 1, delay: 1.2 });
  gsap.from("#element", {
    opacity: 0,
    y: 5,
    duration: 0.3,
    delay: 1.4,
    ease: "power2.out",
  });
  gsap.from("#prowess h3", {
    opacity: 0,
    x: -50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#prowess",
      start: "top 80%",
      end: "bottom 25%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#html", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#html",
      start: "top 80%", // Change start position to center 50%
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#css", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#css",
      start: "top 80%", // Change start position to center 50%
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#js", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#js",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#tcss", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#tcss",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#rjs", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#rjs",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#c", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#c",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#cpp", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#cpp",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#java", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#java",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  // Animation for HTML element
  gsap.from("#pchtml", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#prowess",
      start: "top 70.5%", // Adjust as needed, 80% from top of viewport
      end: "bottom 20%", // Adjust as needed
      toggleActions: "play none none reverse",
    },
  });

  // Animation for CSS element
  gsap.from("#pccss", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#pccss",
      start: "top 70.5%", // Adjust as needed, 80% from top of viewport
      end: "bottom 20%", // Adjust as needed
      toggleActions: "play none none reverse",
    },
  });

  // Animation for JavaScript element
  gsap.from("#pcjs", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#pcjs",
      start: "top 70.5%", // Adjust as needed, 80% from top of viewport
      end: "bottom 20%", // Adjust as needed
      toggleActions: "play none none reverse",
    },
  });

  // Animation for TailwindCSS element
  gsap.from("#pctcss", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#pctcss",
      start: "top 70.5%", // Adjust as needed, 80% from top of viewport
      end: "bottom 20%", // Adjust as needed
      toggleActions: "play none none reverse",
    },
  });

  // Animation for ReactJS element
  gsap.from("#pcrjs", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#pcrjs",
      start: "top 70.5%", // Adjust as needed, 80% from top of viewport
      end: "bottom 20%", // Adjust as needed
      toggleActions: "play none none reverse",
    },
  });

  // Animation for C element
  gsap.from("#pcc", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#pcc",
      start: "top 70.5%", // Adjust as needed, 80% from top of viewport
      end: "bottom 20%", // Adjust as needed
      toggleActions: "play none none reverse",
    },
  });

  // Animation for C++ element
  gsap.from("#pccpp", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#pccpp",
      start: "top 70.5%", // Adjust as needed, 80% from top of viewport
      end: "bottom 20%", // Adjust as needed
      toggleActions: "play none none reverse",
    },
  });

  // Animation for Java element
  gsap.from("#pcjava", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#pcjava",
      start: "top 70.5%", // Adjust as needed, 80% from top of viewport
      end: "bottom 20%", // Adjust as needed
      toggleActions: "play none none reverse",
    },
  });

  // Animation for first element with ScrollTrigger
  gsap.from("#pone", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    delay: 0.2, // Short delay
    scrollTrigger: {
      trigger: "#pone",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  // Animation for second element with ScrollTrigger
  gsap.from("#ptwo", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    delay: 0.4, // Short delay
    scrollTrigger: {
      trigger: "#ptwo",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  // Animation for third element with ScrollTrigger
  gsap.from("#pthree", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    delay: 0.6, // Short delay
    scrollTrigger: {
      trigger: "#pthree",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  // Animation for fourth element with ScrollTrigger
  gsap.from("#pfour", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    delay: 0.8, // Short delay
    scrollTrigger: {
      trigger: "#pfour",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  // Animation for fifth element with ScrollTrigger
  gsap.from("#pfive", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    delay: 1.0, // Short delay
    scrollTrigger: {
      trigger: "#pfive",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  // Animation for sixth element with ScrollTrigger
  gsap.from("#psix", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    delay: 1.2, // Short delay
    scrollTrigger: {
      trigger: "#psix",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#snom", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: "#snom",
      start: "top 80%", // Change start position to center 50%
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#sntm", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: "#sntm",
      start: "top 80%", // Change start position to center 50%
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#snthm", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: "#snthm",
      start: "top 80%", // Change start position to center 50%
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#snfm", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: "#snfm",
      start: "top 80%", // Change start position to center 50%
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#snfim", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#snfim",
      start: "top 80%", // Change start position to center 50%
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#creations h3", {
    opacity: 0,
    x: -50,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#creations",
      start: "top 80%",
      end: "bottom 25%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#one", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: "#one",
      start: "top 80%", // Change start position to center 50%
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#two", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.6,
    scrollTrigger: {
      trigger: "#two",
      start: "top 80%", // Change start position to center 50%
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#three", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.9,
    scrollTrigger: {
      trigger: "#three",
      start: "top 80%", // Change start position to center 50%
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#four", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.2,
    scrollTrigger: {
      trigger: "#four",
      start: "top 80%", // Change start position to center 50%
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#five", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.5,
    scrollTrigger: {
      trigger: "#five",
      start: "top 80%", // Change start position to center 50%
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  (() => {
    const options = {
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const item = entry.target;
          let counterInnerText = parseInt(item.textContent);

          let count = 0;
          let speed = item.dataset.speed / counterInnerText;

          // Set initial state
          item.textContent = "0";

          const stop = setInterval(() => {
            item.textContent = count++ + "+";
            if (counterInnerText < count) {
              clearInterval(stop);
            }
          }, speed);

          observer.unobserve(item);
        }
      });
    }, options);

    const counterElements = document.querySelectorAll(".counter");
    counterElements.forEach((element) => {
      observer.observe(element);
    });
  })();

  gsap.from("#me h3", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: "#me h3",
      start: "top 80%", // Change start position to center 50%
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#lkdn", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.1,
    scrollTrigger: {
      trigger: "#lkdn",
      start: "top 98%", // Change start position to center 50%
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#mail", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: "#mail",
      start: "top 98%", // Change start position to center 50%
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#wtsp", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#wtsp",
      start: "top 98%", // Change start position to center 50%
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#insta", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.7,
    scrollTrigger: {
      trigger: "#insta",
      start: "top 98%", // Change start position to center 50%
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  const menuOpener = document.getElementById("menuOpener");
  const menu = document.getElementById("menu");
  const menuCloser = document.getElementById("menuCloser");
  const mode = document.getElementById("mode");
  const sT = document.getElementById("switchThis");
  const mode2 = document.getElementById("mode2");
  const sT2 = document.getElementById("switchThis2");
  const doNothing = function () {};

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

  function closeMenu() {
    menu.classList.add("opacity-0");
    menu.classList.add("w-0");
    menu.classList.add("px-0");

    menu.classList.remove("opacity-100");
    menu.classList.remove("w-72");
  }

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
