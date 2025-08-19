document.addEventListener("DOMContentLoaded", function () {
  // Contact form submission alert
  const contactForm = document.querySelector("#contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for contacting us!");
      contactForm.reset();
    });
  }


  // Gallery popup functionality
  const galleryImages = document.querySelectorAll(".gallery-img");
  const imgModal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const closeModal = document.getElementById("closeModal");

  galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      modalImg.src = img.src;
      imgModal.style.display = "flex";
    });
  });

  if (closeModal) {
    closeModal.addEventListener("click", function () {
      imgModal.style.display = "none";
      modalImg.src = "";
    });
  }

  if (imgModal) {
    imgModal.addEventListener("click", function (e) {
      if (e.target === imgModal) {
        imgModal.style.display = "none";
        modalImg.src = "";
      }
    });
  }

  // Smooth scroll for navbar links
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  document.getElementById("whatsappBooking")?.addEventListener("click", function () {
    // Replace with your WhatsApp number (with country code, no +)
    const phone = "919007062180";
    const message = encodeURIComponent("Hello, I want to book a room at Kingsukh Guest House.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  });

  // Booking form functionality
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("bookingName").value;
      const email = document.getElementById("bookingEmail").value;
      const date = document.getElementById("bookingDate").value;
      alert(`Thank you, ${name}! Your booking for ${date} has been received. Confirmation will be sent to ${email}.`);
      bookingForm.reset();
    });
  }

  document.querySelectorAll('.book-room-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const roomName = btn.getAttribute('data-room');
      const phone = "919007062180"; // Your WhatsApp number
      const message = encodeURIComponent(`Hello, I want to book the ${roomName} at Kingsukh Guest House.`);
      window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    });
  });

  document.querySelector('form.form-inline')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.querySelector('input[type="search"]').value.toLowerCase();
    const roomCards = document.querySelectorAll('.room-card');
    let found = false;

    roomCards.forEach(card => {
      const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
      if (title.includes(query)) {
        card.style.border = "2px solid #2980b9";
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        found = true;
      } else {
        card.style.border = "";
      }
    });

    if (!found) {
      alert("No matching room found!");
    }
  });
});

// Footer JavaScript (if needed)
function bookNow() {
  alert("Redirecting to booking page...");
  const phone = "919007062180"; // Your WhatsApp number
  const message = encodeURIComponent("Hello, I want to book a room at Kingsukh Guest House.");
  window.location.href = `https://wa.me/${phone}?text=${message}`;
}
