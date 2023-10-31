const nextBtn = Array.from(document.querySelectorAll(".icon-next"));
const prevBtn = Array.from(document.querySelectorAll(".icon-prev"));
const track = document.querySelector(".container__slide-parent");
const slides = Array.from(document.querySelectorAll(".container__slide"));
let offset = 0;

nextBtn.forEach((item) => {
  item.addEventListener("click", slideLeft);
});

prevBtn.forEach((item) => {
  item.addEventListener("click", slideRight);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    slideLeft();
  } else if (e.key === "ArrowLeft") {
    slideRight();
  }
});

function slideLeft() {
  if (offset > -slides.length - 1 * slides[0].clientWidth) {
    offset -= slides[0].clientWidth;
    track.style.transform = `translateX(${offset}px)`;
  }
}

function slideRight() {
  if (offset < 0) {
    offset += slides[0].clientWidth;
    track.style.transform = `translateX(${offset}px)`;
  }
}
