

$(document).ready(function () {
  $(".menu").on("click", () => {
    $("nav").toggleClass("active");

    $("nav .menu .fa-bars").toggleClass("active");
    $("nav .menu .fa-x").toggleClass("active");
  });

  window.onscroll = () => {
    $("nav").removeClass("active");
    $("nav .menu .fa-x").removeClass("active");
    $("nav .menu .fa-bars").addClass("active");
  };

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $(".nav").addClass("shrink");
    } else {
      $(".nav").removeClass("shrink");
    }
  });

  $(".nav a").on("click", () => {
    $("nav .menu .fa-x").removeClass("active");
    $("nav .menu .fa-bars").addClass("active");

    $(".nav").removeClass("active");
  });



  // document.addEventListener("mousemove",(e)=>{
  //   const mouseX=e.clientX;
  //   const mouseY=e.clientY;

  //   const anchor = document.getElementById("logo-box");
  //   const rekt = anchor.getBoundingClientRect();
  //   const anchorX = rekt.left+rekt.width/2;

  // })


  //typing effect
  const textElement = $('#typing-text');
  console.log(document.title)
  let words;
  if(document.title){
     words = ['do Front-End Development.', 'do Back-end Development. ', 'Design WebSite. ', 'Manage Database. '];

  }else{
    words = ['Faire du développement Front-End. ', 'Faire du développement Back-End. ', 'Concevoir un site Web. ', 'Gérer une base de données. '];

  }
  let wordIndex = 0;
  let charIndex = 0;

  function type() {
      if (charIndex < words[wordIndex].length) {
          textElement.text(textElement.text() + words[wordIndex].charAt(charIndex));
          charIndex++;
          setTimeout(type, 100);
      } else {
          setTimeout(erase, 1000);
      }
  }

  function erase() {
      if (charIndex > 0) {
          textElement.text(words[wordIndex].substring(0, charIndex - 1));
          charIndex--;
          setTimeout(erase, 100);
      } else {
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, 500);
      }
    }
    setTimeout(type, 500);

});
