/* ARANRUTH INDUSTRIES — shared UI script for all pages.
   Menu overlay, footer accordions, boot bar. No dependencies. */
(function () {
  "use strict";

  // Boot progress line
  var boot = document.createElement("div");
  boot.className = "boot-bar";
  document.body.appendChild(boot);
  setTimeout(function () { boot.remove(); }, 1400);

  // Full-screen menu overlay
  var btn = document.getElementById("menuBtn");
  var overlay = document.getElementById("menuOverlay");

  function setMenu(open) {
    if (!btn || !overlay) return;
    document.body.classList.toggle("menu-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    overlay.setAttribute("aria-hidden", open ? "false" : "true");
  }

  if (btn && overlay) {
    btn.addEventListener("click", function () {
      setMenu(!document.body.classList.contains("menu-open"));
    });
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
  }

  // Footer accordions
  document.querySelectorAll(".block-h").forEach(function (b) {
    b.addEventListener("click", function () {
      var block = b.parentElement;
      var isOpen = block.classList.toggle("open");
      b.setAttribute("aria-expanded", isOpen);
      var sign = b.querySelector(".sign");
      if (sign) sign.textContent = isOpen ? "\u2014" : "+";
    });
  });
})();
