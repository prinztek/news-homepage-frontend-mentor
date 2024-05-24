const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  let navState = false;

  burger.addEventListener("click", () => {
    if (!navState) {
      nav.setAttribute("id", "nav-active");
      navState = !navState;
      const burgerSvg = burger.querySelector("img");
      burgerSvg.setAttribute("src", "./assets/images/icon-menu-close.svg");
    } else {
      nav.removeAttribute("id");
      navState = !navState;
      const burgerSvg = burger.querySelector("img");
      burgerSvg.setAttribute("src", "./assets/images/icon-menu.svg");
    }
  });
};

navSlide();
