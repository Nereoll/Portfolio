document.addEventListener("DOMContentLoaded", function() {
    // Fetch the CSV file
    fetch('../media/project.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.trim().split('\n'); // Split data into rows
        const tbody = document.querySelector('#project_table tbody');
        rows.forEach(row => {
            const columns = row.split(';'); // Split each row into columns using semicolon as separator
            const tr = document.createElement('tr');

            // Iterate over all columns except the last one
            for (let i = 0; i < columns.length - 1; i++) {
                const column = columns[i];
                const td = document.createElement('td');

                if (column.startsWith("https://")) { // Check if the content is a link
                    const a = document.createElement('a');
                    a.href = column;
                    a.textContent = column;
                    td.appendChild(a);
                } else if (column.startsWith("../media")) { // Check if the content is an image
                    const img = document.createElement('img');
                    img.src = column;
                    img.alt = "Image";
                    td.appendChild(img);
                } else {
                    const p = document.createElement('p');
                    //td.textContent = column;
                    p.textContent = column;
                    td.appendChild(p)
                }
                tr.appendChild(td);
            }

            tbody.appendChild(tr);
        });
    })
    .catch(error => console.error('Error fetching the CSV file:', error));
});
