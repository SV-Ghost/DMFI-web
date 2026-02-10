// Défilement fluide quand on clique sur le menu
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Petit message dans la console (test JS)
console.log("Site de l'entreprise chargé avec succès !");
