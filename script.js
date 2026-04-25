window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
  const scrolled = document.body.scrollTop > 10 || document.documentElement.scrollTop > 10;

  document.querySelector("header").style.fontSize = scrolled ? "50%" : "100%";
  document.querySelector(".self_img").style.height = scrolled ? "100px" : "160px";

  document.querySelectorAll(".header_p").forEach(el => {
    el.style.fontSize = scrolled ? "10px" : "15px";
  });

  document.querySelectorAll(".linked_img").forEach(el => {
    el.style.height = scrolled ? "20px" : "40px";
  });
}