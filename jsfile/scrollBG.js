const heroElem = document.querySelector(".contentBG");
const lionElem = document.querySelector(".Homebg");
const elephantElem = document.querySelector(".Homebg.bg2");

const scrollAmount = -500;
window.addEventListener("scroll", (event) => {
  const { top } = heroElem.getBoundingClientRect();
  const heroInView = top - window.innerHeight < scrollAmount;
  lionElem.style.opacity = +!heroInView;
  elephantElem.style.opacity = +heroInView;
});
