"use strict";

// Uncheck the menu toggle checkbox to close the menu after a link is clicked
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu-toggle").checked = false;
  });
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelectorAll("nav a");

// Close menu and remove scroll lock when any nav link is clicked
navLinks.forEach((link) => {
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

// Modal elements
const modal = document.getElementById("program-modal");
const modalBody = document.getElementById("modal-body");
const modalOverlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");

// Program modal content
const programContent = {
  infants: `
      <h2>Infant Care at NurtureNest</h2>
      <p>
        Our infant program offers a peaceful, secure environment where your baby can grow at their own pace. Each child receives one-on-one attention from experienced caregivers who follow your baby's unique schedule and cues.
      </p>
      <ul>
        <li>Low caregiver-to-infant ratio for focused attention</li>
        <li>Daily tummy time, sensory play, and music</li>
        <li>Individual feeding, diapering, and nap routines</li>
        <li>Ongoing communication with parents through daily reports</li>
      </ul>
    `,
  toddlers: `
      <h2>Toddler Program at NurtureNest</h2>
      <p>
        Our toddler rooms are designed for exploration and discovery. Through guided play and hands-on activities, children learn to express themselves, build confidence, and navigate social interactions.
      </p>
      <ul>
        <li>Play-based curriculum encouraging language and motor skills</li>
        <li>Supportive routines for emotional and social development</li>
        <li>Safe, toddler-friendly spaces for movement and creativity</li>
        <li>Focus on early independence and self-help skills</li>
      </ul>
    `,
  preschool: `
      <h2>Preschool at NurtureNest</h2>
      <p>
        Designed to prepare children for kindergarten and beyond, our preschool program blends early academics with social learning and creative exploration. Children gain the confidence and skills to thrive in a school setting.
      </p>
      <ul>
        <li>Structured activities in literacy, math, and science</li>
        <li>Small group projects and storytelling sessions</li>
        <li>Daily outdoor time for play and movement</li>
        <li>Emphasis on kindness, collaboration, and curiosity</li>
      </ul>
    `,
};

// Utility to open modal with selected content
function openModal(contentKey) {
  modalBody.innerHTML = programContent[contentKey];
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

// Close modal utility
function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  modalBody.innerHTML = ""; // Clear content
}

// Add event listeners to buttons
document.querySelectorAll(".learn-more-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const keys = ["infants", "toddlers", "preschool"];
    openModal(keys[index]);
  });
});

modalOverlay.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// FAQ interaction
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const allItems = document.querySelectorAll(".faq-item");

    allItems.forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active"); // Close other open FAQs
      }
    });

    item.classList.toggle("active"); // Toggle the clicked one
  });
});
