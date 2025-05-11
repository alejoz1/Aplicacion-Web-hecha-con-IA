document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const msg = document.getElementById("form-msg");
  msg.textContent = "Gracias por tu mensaje. ¡Te responderemos pronto!";
  this.reset();
});
