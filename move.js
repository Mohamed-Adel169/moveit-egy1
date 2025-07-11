document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.animate');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
});
<script>
  function openForm() {
    document.getElementById("popupForm").style.display = "flex";
  }

  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

  function sendToWhatsApp() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value.trim();
    const notes = document.getElementById("notes").value.trim();

    if (!name || !phone || !service) {
      alert("من فضلك املأ الحقول المطلوبة.");
      return;
    }

    const message = `الاسم: ${name}%0aرقم الموبايل: ${phone}%0aنوع الرخصة: ${service}%0aملاحظات: ${notes}`;
    const ownerNumber = "2010XXXXXXXX"; // ← ← ← غير ده لرقمك واتساب بدون +

    const whatsappURL = `https://wa.me/${ownerNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
    closeForm();
  }
</script>
