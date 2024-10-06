document.addEventListener("DOMContentLoaded", function() {
    // Fetch the CSV file
    const carousel = document.querySelector('#carousel');
    let currentIndex=0;

    fetch('../media/liste_projet.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            if (element.Favoris){
                const card=document.createElement('div');
                card.classList.add('card');
                carousel.appendChild(card);
                const img = document.createElement('img');
                img.src = element.Images;
                img.width="800";
                img.height="500";
                img.alt = "Image carousel";
                card.appendChild(img);
                const text = document.createElement('p');
                text.textContent = element.Description;
                card.appendChild(text);
            }
        });
        const prevButton = document.createElement('button');
        prevButton.classList.add('prev-button');
        prevButton.innerHTML='<i class="fa-solid fa-chevron-left fa-2xl"></i>';
        carousel.parentNode.insertBefore(prevButton, carousel);
        
        const nextButton = document.createElement('button');
        nextButton.classList.add('next-button');
        nextButton.innerHTML='<i class="fa-solid fa-chevron-right fa-2xl"></i>';
        carousel.parentNode.insertBefore(nextButton, carousel.nextSibling);

        const cards = carousel.querySelectorAll('.card');

        // Event listeners for navigation buttons
        prevButton.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                cards[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
        });

        nextButton.addEventListener('click', function() {
            if (currentIndex < cards.length - 1) {
                currentIndex++;
                cards[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
        });
    })


    carousel.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        carousel.scrollLeft -= evt.deltaY;
    })

    .catch(error => console.error('Error fetching the CSV file:', error));
});
