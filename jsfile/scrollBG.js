var scroll = 0;
var conponent = document.querySelector(".imgcontainer");
var windowHeight = window.innerHeight;
document.addEventListener("scroll", () => {
  scroll = window.pageYOffset;
  if (scroll > 0 && scroll < windowHeight) {
    //to remove all classes sauf .container
    conponent.setAttribute("class", "imgcontainer");
    conponent.classList.add("slide2");
  } else if (scroll < 1 && scroll < windowHeight) {
    //to remove all classes sauf .container
    conponent.setAttribute("class", "imgcontainer");
    conponent.classList.add("slide1");
  }
});
