const btn = document.getElementById("navIcon");
const ulCon = document.getElementById("navbarContent");

/**
 * @desc: This listen to the navbar icon to show navbar content and to hide tha content

 */

btn.addEventListener("click", () => {
  if (ulCon.classList.contains("navbarRightSecDiv")) {
    ulCon.classList.add("displayNavContent");
    ulCon.classList.remove("navbarRightSecDiv");
  } else {
    ulCon.classList.remove("displayNavContent");
    ulCon.classList.add("navbarRightSecDiv");
  }
});

/**
 * @desc: This listen to the window resize to hide mobile view of navbar

 */

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    ulCon.classList.remove("displayNavContent");
    ulCon.classList.add("navbarRightSecDiv");
  }
});
