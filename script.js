window.addEventListener("DOMContentLoaded", (event) => { //Permet de mettre ma balise script dans mon head//

    const addForm = document.querySelector('.add'); //Déclaration de la constante qui va aller chercher la donnée que je rentre dans mon form//
    const list = document.querySelector('.task'); //Déclaration de la constante qui va donner le chemin de ma list//

    addForm.addEventListener('submit', (e) => { //Quand j'appuie sur entrer l'action suivante s'effectue//
        e.preventDefault();
        const task = addForm.add.value.trim(); //Ma nouvlle tache//

        if (task.length != 0) {
            generateTemplate(task);
            addForm.reset(); // Si jamais le champ de caractère rentré est supérieur à 0 alors une tache est créée en supprimant le text/date/options que j'ai rentré dans tout les champs//
        } else {
            alert('Veuillez renseigner le champ'); // Sinon une alerte apparait et me dit que je doit renseigner le champ//
        }
    });


    /* Récupération de l'input de la dâte (ne marche pas)
    
    addForm.addEventListener('submit', (e) => {
         e.preventDefault();
         const date = addForm.add.value.trim();
 
         if (date.value != '01/01/2000') {
             generateTemplate(date);
             addForm.reset();
         } else {
             alert('Veuillez renseigner le champ de la dâte');
         }
     }); */

    /* Récupération du menu déroulant (ne marche pas)
    
        addForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const menu = addForm.add.value.trim();
    
            if (menu.value != '--Choisissez une option--') {
                generateTemplate(menu);
                addForm.reset();
            } else {
                alert('Veuillez renseigner une catégorie');
            }
        }); */

    const generateTemplate = (task) => { //Constante qui créée et affiche la tache suivant ce template HTML a partir de ma constante task//
        const divli = `<li class='class'>
            <span>${task}</span>
            <i class="fa fa-trash-o delete"></i> 
        </li>`;
        list.innerHTML += divli; //Créer une div en HTML avec mon input et une corbeille pour supprimer la tache//
    }

    list.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
        } // Evenement qui au click sur la corbeille va venir supprimer ma tache de la page sans rafraichir toute la page//
    })

});
