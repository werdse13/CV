window.onscroll = function(){scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector("header").style.fontSize = "140%";
    document.querySelector(".self_img").style.height = "200px";
    document.querySelector(".header_p").style.fontSize = "20px";
  } else {
    document.querySelector("header").style.fontSize = "250%";
    document.querySelector(".self_img").style.height = "280px";
    document.querySelector(".header_p").style.fontSize = "30px";
  }
}


  function scrollAbout() {
    window.scrollTo(0, 0)
  }
  function scrollSkills() {
    window.scrollTo(0, 1000);
  }

  function scrollEducation() {
    window.scrollTo(0, 2200)
  }

  function scrollExperience() {
    window.scrollTo(0, 3300)
  }

    function scrollProjects() {
    window.scrollTo(0, 4400)
  }

  function scrollContact() {
    window.scrollTo(0, 5500)
  }