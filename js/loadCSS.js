/* Load CSS files asynchronously */
function loadCSS(href) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

// Load non-critical CSS after page has started rendering
document.addEventListener("DOMContentLoaded", function () {
  loadCSS("./css/media.css");
  loadCSS("./css/help-section.css");
  loadCSS("./css/enhanced-skills.css");
});
