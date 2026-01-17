document.addEventListener("DOMContentLoaded", function () {
    const menuBar = document.getElementById("menuBar");
    const mobileMenu = document.getElementById("mobileMenu");

    menuBar.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector("span");

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.textContent = "+";
    } else {
      document.querySelectorAll(".faq-answer").forEach(a => a.style.maxHeight = null);
      document.querySelectorAll(".faq-question span").forEach(i => i.textContent = "+");

      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.textContent = "−";
    }
  });
});