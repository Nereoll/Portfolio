function create_card(tag, container) {
    fetch("../media/liste_projet.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const carte = document.createElement('div');
            const text = document.createElement('div');

            carte.classList.add("mt-10","flex", "justify-center", "rounded-lg");
            var fieldsToDisplay = [element.Title, element.Date];
            if (tag.includes(element.Favoris)) {
                fieldsToDisplay.forEach(field => {
                    const p = document.createElement('p');
                    p.textContent = field;
                    text.classList.add("flex-col","absolute", "font-bolder", "text-base");
                    text.style.textShadow = "1px 1px 1px #000000";
                    text.appendChild(p);
                });
                carte.appendChild(text);
                const img=document.createElement('img');
                img.src=element.Images;
                img.classList.add("rounded-lg");
                carte.appendChild(img);
                container.appendChild(carte);
                container.classList.add("cursor-pointer","mx-auto", "px-4", "max-w-[1500px]", "columns-sm");

                // Add event listener to change text color on click
                carte.addEventListener('click', function() {
                    window.open(element.Link, '_blank');
                });
                carte.addEventListener('mouseout', function() {
                    carte.style.transform = "scale(1)";
                    carte.style.transition = "transform 0.3s ease";
                });
                carte.addEventListener('mouseover', function() {
                    carte.style.transform = "scale(1.5)";
                    carte.style.transition = "transform 0.3s ease";
                });
            }
        });
    })
    .catch(error => console.error('Error fetching or processing JSON:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    const sample_project_container = document.getElementById("sample_project_container");
    const personnal_container = document.getElementById("personnal_container");
    const web_button = document.getElementById("web");
    const software_button = document.getElementById("software");
    const videoGame_button = document.getElementById("videoGame");
    const title=document.getElementById("title");
    create_card(["web", "software", "game"], sample_project_container);
    create_card(["personnal"], personnal_container);
    web_button.addEventListener("click", function() {
        sample_project_container.innerHTML = "";
        title.textContent="My Favorites Web projects : ";
        create_card(["web"], sample_project_container);
    });
    software_button.addEventListener("click", function() {
        sample_project_container.innerHTML = "";
        title.textContent="My Favorites Software projects : ";
        create_card(["software"], sample_project_container);
    });
    videoGame_button.addEventListener("click", function() {
        sample_project_container.innerHTML = "";
        title.textContent="My Favorites Video Game projects : ";
        create_card(["game"], sample_project_container);
    });
});
