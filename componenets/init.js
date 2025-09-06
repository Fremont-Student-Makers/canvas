const base = '/canvas/components/';

document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Load navbar
    const navbarRes = await fetch(`${base}navbar.html`);
    const navbarHTML = await navbarRes.text();
    document.getElementById("navbar-container").innerHTML = navbarHTML;

    // Load footer
    const footerRes = await fetch(`${base}footer.html`);
    const footerHTML = await footerRes.text();
    document.getElementById("footer-container").innerHTML = footerHTML;

    // Attach navbar toggle logic
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }
  } catch (err) {
    console.error("Layout load failed:", err);
  }
});
