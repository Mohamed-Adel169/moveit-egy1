document.addEventListener("DOMContentLoaded", () => {
  // ==== Animation Observer ====
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // عناصر الأنيميشن كلها (شاملة الصورة والنص والباقي)
  const animatedElements = document.querySelectorAll('.animate, .animate-truck, .animate-text');
  animatedElements.forEach(el => observer.observe(el));

  // ==== Show/Hide Form ====
  const openFormBtn = document.getElementById("openFormBtn");
  const formPopup = document.getElementById("registrationForm");
  const closeBtn = document.getElementById("closeForm");

  openFormBtn.addEventListener("click", () => {
    formPopup.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    formPopup.classList.remove("show");
  });

  // ==== Form Submission ====
  document.getElementById("formData").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const type = document.getElementById("type").value;

    if (name && phone && type) {
      const message = New Request:\n👤 Name: ${name}\n📞 Phone: ${phone}\n🚛 Vehicle Type: ${type};
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = https://wa.me/201013474771?text=${encodedMessage};
      window.open(whatsappURL, "_blank");
    } else {
      alert("من فضلك املأ كل البيانات.");
    }
  });
});
