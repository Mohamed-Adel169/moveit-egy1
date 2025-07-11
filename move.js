document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.animate');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));

  const openFormBtn = document.getElementById("openFormBtn");
  const formPopup = document.getElementById("registrationForm");
  const closeBtn = document.getElementById("closeForm");

  openFormBtn.addEventListener("click", () => {
    formPopup.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    formPopup.classList.remove("show");
  });

  document.getElementById("formData").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const type = document.getElementById("type").value;

    // تأكد إن كل حاجة دخلت فعلاً
    if (name && phone && type) {
    const message = `طلب جديد:\nالاسم: ${name}\nرقم الهاتف: ${phone}\nنوع العربية: ${type}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = https://wa.me/201013474771?text=${encodedMessage};
      window.open(whatsappURL, "_blank");
    } else {
      alert("من فضلك املأ كل البيانات.");
    }
  });
});
