const links = document.querySelectorAll(".navigator ul li a");

const currentURL = window.location.pathname;

links.forEach(link => {
  const href = link.getAttribute("href");

  if (href === "#") {
    link.classList.add("active"); 
  } else {
    link.classList.remove("active"); 
  }
});