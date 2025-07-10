"use strict";

// Uncheck the menu toggle checkbox to close the menu after a link is clicked
 document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("menu-toggle").checked = false;
    });
  });


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelectorAll("nav a");

// Close menu and remove scroll lock when any nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.checked = false;
    document.body.classList.remove("no-scroll");
  });
});

// Add or remove scroll lock based on toggle state
menuToggle.addEventListener("change", () => {
  if (menuToggle.checked) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
});


// FAQ interaction
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const allItems = document.querySelectorAll('.faq-item');

    allItems.forEach(faq => {
      if (faq !== item) {
        faq.classList.remove('active'); // Close other open FAQs
      }
    });

    item.classList.toggle('active'); // Toggle the clicked one
  });
});