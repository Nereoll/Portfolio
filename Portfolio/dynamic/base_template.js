// Fonction pour charger le header et le footer
function loadHeaderFooter() {
    // Charger le header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
        });

    // Charger le footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });
}

// Appeler la fonction au chargement de la page
window.onload = loadHeaderFooter;
