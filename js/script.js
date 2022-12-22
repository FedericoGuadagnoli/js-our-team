console.log( 'JS OK');

// Creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede e rendere la pagina gradevole (potete usare lo screen in allegato come spunto

// Prendo gli elementi dalla pagina
const cardElement = document.getElementById('row');


//  Creo l'array di oggetti

    
       const members = [
            { firstName: 'Wayne', lastName: 'Barnett', role: 'Founder & CEO', img: "wayne-barnett-founder-ceo.jpg" },
            { firstName: 'Angela', lastName: 'Caroll', role: 'Chief Editor', img: "angela-caroll-chief-editor.jpg" },
            { firstName: 'Walter', lastName: 'Gordon', role: 'Office Manager', img: "walter-gordon-office-manager.jpg" },
            { firstName: 'Angela', lastName: 'Lopez', role: 'Social Media Manager', img: "angela-lopez-social-media-manager.jpg" },
            { firstName: 'Scott', lastName: 'Estrada', role: 'Developer', img: "scott-estrada-developer.jpg" },
            { firstName: 'Barbara', lastName: 'Ramos', role: 'Graphic Designer', img: "barbara-ramos-graphic-designer.jpg" },          
        ] 

let listItems = '';

for (let i = 0; i < members.length; i++) {
    const member = members[i];
        listItems += `<div class="col-4">
        <div class="card border-0 text-center">
        <figure> 
           <img src= "img/${member.img}">
        </figure> 
        <h5> ${member.firstName} ${member.lastName} </h5>
         <span class="role"> ${member.role}</h5></div></div>`;
    }
cardElement.innerHTML = listItems;



