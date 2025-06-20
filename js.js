document.addEventListener("DOMContentLoaded", function () {
  // Menu toggle functionality
  const menuButton = document.querySelector(".menu");
  const nav = document.querySelector("nav");
  const menuBars = document.querySelector("nav .menu .fa-bars");
  const menuX = document.querySelector("nav .menu .fa-x");

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      nav.classList.toggle("active");
      menuBars.classList.toggle("active");
      menuX.classList.toggle("active");
    });
  }

  // Handle scroll events
  window.onscroll = () => {
    if (nav) nav.classList.remove("active");
    if (menuX) menuX.classList.remove("active");
    if (menuBars) menuBars.classList.add("active");

    // Shrink nav on scroll
    const navElement = document.querySelector(".nav");
    if (navElement) {
      if (window.scrollY > 0) {
        navElement.classList.add("shrink");
      } else {
        navElement.classList.remove("shrink");
      }
    }
  };

  // Nav link click handling
  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuX) menuX.classList.remove("active");
      if (menuBars) menuBars.classList.add("active");
      if (nav) nav.classList.remove("active");
    });
  });

  // Typing effect
  const textElement = document.getElementById("typing-text");
  if (textElement) {
    console.log(document.title);
    let words;
    // Check if we're on the French version or English version
    if (document.title.includes("FullStack Developer")) {
      words = [
        "do Front-End Development.",
        "do Back-end Development. ",
        "Design WebSite. ",
        "Manage Database. ",
      ];
    } else {
      words = [
        "Faire du développement Front-End. ",
        "Faire du développement Back-End. ",
        "Concevoir un site Web. ",
        "Gérer une base de données. ",
      ];
    }

    let wordIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < words[wordIndex].length) {
        textElement.textContent =
          textElement.textContent + words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 1000);
      }
    }

    function erase() {
      if (charIndex > 0) {
        textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
      } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
      }
    }

    setTimeout(type, 500);
  }
});
