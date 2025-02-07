document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Affichage du message de succès
    let successMessage = document.getElementById("successMessage");
    successMessage.textContent = "Message envoyé avec succès !";
    successMessage.style.display = "block";

    // Réinitialisation du formulaire après 2 secondes
    setTimeout(() => {
        document.getElementById("contactForm").reset();
        successMessage.style.display = "none";
    }, 2000);
});
