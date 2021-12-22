const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", (e) => {
    e.preventDefault();
    faqs.forEach((fa) => {
      if (fa === faq) {
        return;
      } else if (fa.classList.contains("active")) {
        fa.classList.remove("active");
      }
    });
    faq.classList.toggle("active");
  });
});
