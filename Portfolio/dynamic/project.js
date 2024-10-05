var ended_number = 0;
var pending_number = 0;

document.addEventListener("DOMContentLoaded", function() {
    const section = document.getElementById("project_section");
    const project_box=document.getElementById("project_box");
    const ended=document.getElementById("ended_number");
    const pending=document.getElementById("pending_number");
    fetch("../media/liste_projet.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            //Gestion de la div projet
            const div = document.createElement('div')
            div.classList.add("projet")
            div.classList.add("background_cover")
            div.style.backgroundImage = `url('${element.Images}')`
            //Éléments descriptifs du projet à afficher
            var fieldsToDisplay = [element.Title, element.Type, element.Date];
            fieldsToDisplay.forEach(field => {
                const p = document.createElement('p');
                p.textContent = field;
                p.classList.add("centre");
                p.classList.add("gras");
                p.classList.add("back");
                console.log(p.class);
                div.appendChild(p);
            });

            //création des vues détaillés "big_view"

        /*
            <div class="big_view line_flex hidden" >
                <div class="line_flex centre">
                    <div class="img_fit"><img src="../media/GameplayRobYvsTheMask.png" alt=""></div>
                    <div class="column_flex">
                        <div>Titre</div>
                        <div>Type</div>
                        <div>Technologies</div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magnam natus incidunt vero mollitia eos ipsam illo autem corrupti dolore quisquam animi rem quibusdam voluptatum culpa, blanditiis maiores. Dolorem, perspiciatis!</div>
                        <div>Lien</div>
                    </div>
                </div>
                <i class="fa-solid fa-xmark close_button"></i>
            </div>
        */

            const big_view = document.createElement('div');
            big_view.classList.add("hidden")
            big_view.classList.add("big_view")
            big_view.classList.add("line_flex")

            const centre =document.createElement('div');
            centre.classList.add("centre")
            centre.classList.add("line_flex")

            const img_container=document.createElement('div');
            img_container.classList.add("img_fit")

            const img=document.createElement('img');
            img.src=element.Images

            const info_container=document.createElement('div');
            info_container.classList.add("column_flex")
            var fieldsToDisplay = [element.Title,element.Type, element.Language, element.Description];
            fieldsToDisplay.forEach(field => {
                const span = document.createElement('span');
                span.textContent = field;
                info_container.appendChild(span);
            });
            const a=document.createElement('a')
            a.href=element.Link
            a.textContent="Click to see the project"

            const close_button=document.createElement('i');
            close_button.classList.add("fa-solid")
            close_button.classList.add("fa-xmark")
            close_button.classList.add("close_button")
            close_button.onclick=function(){
                big_view.classList.add("hidden")
            }

            //hiérarchie des éléments
            img_container.appendChild(img)
            centre.appendChild(img_container)
            centre.appendChild(info_container)
            big_view.appendChild(centre)
            big_view.appendChild(close_button)

            div.onclick = function(){
                big_view.classList.remove("hidden")
                big_view.scrollIntoView({
                    behavior: 'smooth',  // Défilement fluide
                    block: 'center',     // Centrer verticalement
                    inline: 'center'     // Centrer horizontalement (si nécessaire)
                })
            }

            //Gestion des nombres de projets terminés et en cours
            if (element.Avancement){
                ended_number++;
            }
            else{
                pending_number++;
            }
            pending.textContent=pending_number;
            ended.textContent=ended_number;
            project_box.appendChild(div)
            section.appendChild(big_view)
        })
        });
    });
