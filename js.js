document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS when DOM is ready
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 50,
      delay: 0,
      disable: false, // Enable on all devices including mobile
    });
  }

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
    const words = [
      "Full Stack Web Apps",
      "Design with Figma",
      "WordPress & Elementor",
      "WebFlow",
    ];

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

  // Get all skill boxes
  const skillBoxes = document.querySelectorAll(".skill-box");

  // Function to handle both mobile and desktop interactions
  skillBoxes.forEach((box) => {
    // For touch devices (like mobile)
    box.addEventListener("click", function () {
      // If the box is already active, close it
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        this.setAttribute("aria-expanded", "false");
        return;
      }

      // Close all other active boxes
      skillBoxes.forEach((otherBox) => {
        if (otherBox !== this && otherBox.classList.contains("active")) {
          otherBox.classList.remove("active");
          otherBox.setAttribute("aria-expanded", "false");
        }
      });

      // Toggle active class on the clicked box
      this.classList.toggle("active");
      this.setAttribute("aria-expanded", "true");
    });

    // For accessibility: handle keyboard navigation
    box.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click(); // Trigger the click event
      }
    });

    // Ensure boxes are focusable
    if (!box.hasAttribute("tabindex")) {
      box.setAttribute("tabindex", "0");
    }

    // Ensure aria-expanded is set
    if (!box.hasAttribute("aria-expanded")) {
      box.setAttribute("aria-expanded", "false");
    }
  });

  // Close active skill box when clicking elsewhere
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".skill-box")) {
      skillBoxes.forEach((box) => {
        box.classList.remove("active");
        box.setAttribute("aria-expanded", "false");
      });
    }
  });

  // Dynamic Year in footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
});
