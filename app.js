const menuButton = document.getElementById("menu-button");
const dropdownMenu = document.getElementById("dropdown-menu");

menuButton.addEventListener("click", function() {
  dropdownMenu.classList.toggle("show");
});


document.getElementById("device").addEventListener("change", function() {
    var otherDeviceContainer = document.querySelector(".other-device-container");
    if (this.value === "other") {
        otherDeviceContainer.style.display = "block";
    } else {
        otherDeviceContainer.style.display = "none";
    }
});


document.getElementById("email").addEventListener("blur", function() {
    var email = this.value;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        this.style.borderColor = "red";
    } else {
        this.style.borderColor = "";
    }
});


document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // empêche la soumission de formulaire par défaut

    var formData = new FormData(this); // récupère les données du formulaire
    formData.append("to", "contact@wayifix.fr"); // ajoute l'adresse e-mail de destination

    // ici, vous pouvez utiliser une bibliothèque telle que Axios ou Fetch pour envoyer les données de formulaire à votre serveur
    // pour l'exemple, je vais vous montrer comment utiliser Fetch :
    fetch("/send-form", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(response => {
        // affiche un message de remerciement
        document.getElementById("form").innerHTML = "<p>Merci ! Nous avons bien reçu votre demande.</p>";
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
