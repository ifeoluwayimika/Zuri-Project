const firstSection = document.querySelector(".first-section");
const secondSection = document.querySelector(".second-section");
const thirdSection = document.querySelector(".third-section");
const fourthSection = document.querySelector(".fourth-section");
links = document.querySelectorAll(".main-nav-right__link");

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (secondSection.offsetTop >= scroll <= firstSection.offsetTop) {
    links[0].classList.add("active");
    if (
      links[1].classList.contains(
        "active" || links[2].classList.contains("active")
      )
    ) {
      links[1].classList.remove("active");
      links[2].classList.remove("active");
    }
  }
  if (firstSection.offsetTop < scroll && scroll >= secondSection.offsetTop) {
    if (
      links[0].classList.contains("active") ||
      links[2].classList.contains("active") ||
      links[3].classList.contains("active")
    ) {
      links[0].classList.remove("active");
    }
    links[1].classList.add("active");
  }
  if (secondSection.offsetTop < scroll && scroll >= thirdSection.offsetTop) {
    links[2].classList.add("active");
    if (
      links[1].classList.contains("active") ||
      links[3].classList.contains("active")
    ) {
      links[1].classList.remove("active");
    }
  }
  if (thirdSection.offsetTop < scroll && scroll >= fourthSection.offsetTop) {
    links[2].classList.remove("active");
    links[3].classList.add("active");
  }
});