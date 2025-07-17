document.addEventListener("DOMContentLoaded", () => {
  // ========== ANIMATION OBSERVER ==========
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const animatedElements = document.querySelectorAll('.animate, .animate-truck, .animate-text');
  animatedElements.forEach(el => observer.observe(el));

  // ========== FORM BUTTONS ==========
  const openFormBtn = document.getElementById("openFormBtn");
  const formPopup = document.getElementById("registrationForm");
  const closeBtn = document.getElementById("closeForm");

  if (openFormBtn && formPopup) {
    openFormBtn.addEventListener("click", () => {
      formPopup.classList.add("show");
    });
  }

  if (closeBtn && formPopup) {
    closeBtn.addEventListener("click", () => {
      formPopup.classList.remove("show");
    });
  }

  // ========== WHATSAPP SEND ==========
  const form = document.getElementById("formData");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameInput = document.getElementById("name");
      const phoneInput = document.getElementById("phone");
      const typeInput = document.getElementById("type");

      if (!nameInput || !phoneInput || !typeInput) {
        alert("عنصر مفقود من الصفحة!");
        return;
      }

      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();
      const type = typeInput.value;

      if (name && phone && type) {
        const message = `New Request:\n👤 Name: ${name}\n📞 Phone: ${phone}\n🚛 Vehicle Type: ${type}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/201013474771?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
      } else {
        alert("من فضلك املأ كل البيانات.");
      }
    });
  }
});









document.addEventListener("DOMContentLoaded", () => {
  const videoButtons = document.querySelectorAll('.video-btn');
  const videoPopup = document.getElementById('videoPopup');
  const videoFrame = document.getElementById('videoFrame');
  const closePopup = document.getElementById('closePopup');

  videoButtons.forEach(button => {
    button.addEventListener('click', () => {
      const videoUrl = button.getAttribute('data-video');
      videoFrame.src = videoUrl;
      videoPopup.style.display = 'flex';
    });
  });

  closePopup.addEventListener('click', () => {
    videoPopup.style.display = 'none';
    videoFrame.pause();
    videoFrame.currentTime = 0;
    videoFrame.src = '';
  });
});


