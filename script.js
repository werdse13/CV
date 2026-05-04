window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
  const scrolled = document.body.scrollTop > 100 || document.documentElement.scrollTop > 100;

  document.querySelector("header").classList.toggle("scrolled", scrolled);
}

function submitForm() {
  if (document.getElementById("name").value == "") {
    alert("Name must be filled out");
    return false;
  }
  if (document.getElementById("email").value == "") {
    alert("Email must be filled out");
    return false;
  }
  if (document.getElementById("subject").value == "") {
    alert("Subject must be filled out");
    return false;
  }
  if (document.getElementById("message").value == "") {
    alert("Message must be filled out");
    return false;
  }
  alert("Message sent!");
  document.getElementById("contactForm").reset();
}

function scrollToTop(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}