window.addEventListener("scroll", () => {
  // add/remove window.scrollY , depending on test conditional, window.scrollY less than 10
  document
    .querySelector("nav")
    .classList.toggle("window-scrolled", window.scrollY > 0);
});

//CONTACT BUTTONS (circular text buttons)
const textButtons = document.querySelectorAll(".contact_btn");

textButtons.forEach((textButton) => {
  let text = textButton.querySelector("p");

  text.innerHTML = text.innerHTML
    .split("")
    .map(
      (character, index) =>
        `<span style="transform: rotate(${index * 12}deg)">${character}</span>`
    )
    .join("");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    599: {
        slidesPerView: 2,
        spaceBetween: 40
    },
    1023: {
        slidesPerView: 3,
        spaceBetween: 60
    }
  }
});


const nav = document.querySelector('.navLinks');
const openNavBtn = document.querySelector('#nav_toggle-open');
const close