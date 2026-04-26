window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
  const scrolled = document.body.scrollTop > 100 || document.documentElement.scrollTop > 100;

  document.querySelector("header").classList.toggle("scrolled", scrolled);
}