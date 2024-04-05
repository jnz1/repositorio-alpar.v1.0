document.addEventListener("DOMContentLoaded", function() {
    var contactContainer = document.getElementById("contactContainer");
    contactContainer.style.display = "none"; // Oculta o container de contato ao carregar a página
  });
  
  function toggleContact() {
    var contactContainer = document.getElementById("contactContainer");
    if (contactContainer.style.display === "none") {
      contactContainer.style.display = "block";
    } else {
      contactContainer.style.display = "none";
    }
  }