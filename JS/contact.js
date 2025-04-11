(function() {
  emailjs.init("FYOriEIArK3tXNeAg");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  emailjs.sendForm("service_ujikgog", "template_vze2tkb", this)
    .then(() => alert("✅ Message sent successfully!"))
    .catch(error => {
      console.error(error);
      alert("❌ Something went wrong.");
    });
});

function toggleMenu() {
document.getElementById("navLinks").classList.toggle("active");
}
