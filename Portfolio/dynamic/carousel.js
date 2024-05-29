document.addEventListener("DOMContentLoaded", function() {
    // Fetch the CSV file
    fetch('../media/project.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.trim().split('\n'); // Split data into rows
        const carousel = document.querySelector('#carousel');
        let currentIndex = 0;

        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const columns = row.split(';'); // Split each row into columns using semicolon as separator
            const shorttexte = columns[3].trim(); // Get the image column and remove whitespace
            const image = columns[4].trim(); // Get the image column and remove whitespace
            const favoris = columns[6].trim(); // Get the favorite column and remove whitespace

            if (favoris !=='') { // Check if the favoris column is not empty
                const card=document.createElement('div');
                card.classList.add('card');
                carousel.appendChild(card);
                const img = document.createElement('img');
                img.src = image;
                img.width="800";
                img.height="500";
                img.alt = "Image carousel";
                card.appendChild(img);
                const text = document.createElement('p');
                text.textContent = shorttexte;
                card.appendChild(text);
            }
        };

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
