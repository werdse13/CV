window.onscroll = function(){scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector("header").style.fontSize = "100%";
    document.querySelector(".self_img").style.height = "150px";
    document.querySelector(".header_p").style.fontSize = "15px";

  } else {
    document.querySelector("header").style.fontSize = "250%";
    document.querySelector(".self_img").style.height = "250px";
    document.querySelector(".header_p").style.fontSize = "30px";
  }
}

/*window.onscroll = function(){scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector("h1").style.fontSize = "10%";
    document.querySelector(".self_img").style.height = "150px";
  } else {
    document.querySelector("h1").style.fontSize = "100%";
    document.querySelector(".self_img").style.height = "250px";
  }
} */

  function scrollSkills() {
    window.scrollTo(0, 1000)
  }

  function scrollEducation() {
    window.scrollTo(0, 2000)
  }