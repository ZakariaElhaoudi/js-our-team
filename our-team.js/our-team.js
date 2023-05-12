/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe*/

/*BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede*/

// variabili globali 
const elContainer = document.getElementById("container")


// Creare l’array di oggetti con le informazioni fornite.
const membriTeam = [
    {"nome" : "Wayne Barnett",	
    "ruolo" : "Founder & CEO",	
    "foto" : "img/wayne-barnett-founder-ceo.jpg",
    },
    {"nome" : "Angela Caroll",	
    "ruolo" : "Chief Editor",	
    "foto" : "img/angela-caroll-chief-editor.jpg",
    },
    {"nome" : "Walter Gordon",	
    "ruolo" : "Social Media Manager",	
    "foto" : "img/wayne-barnett-founder-ceo.jpg",
    },
    {"nome" : "Angela Lopez",	
    "ruolo" : "Founder & CEO",	
    "foto" : "img/angela-lopez-social-media-manager.jpg",
    },
    {"nome" : "Scott Estrada",	
    "ruolo" : "Developer",	
    "foto" : "img/scott-estrada-developer.jpg",
    },
    {"nome" : "Barbara Ramos",	
    "ruolo" : "Graphic Designer",	
    "foto" : "img/barbara-ramos-graphic-designer.jpg",
    },
]

console.log(membriTeam);


// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (let i = 0; i < membriTeam.length; i++) {
    const datiMembro = membriTeam[i];
    console.log(datiMembro.nome, datiMembro.ruolo, datiMembro.foto);
    
    // Stampare le stesse informazioni su DOM sottoforma di stringhe
    // Trasformare la stringa foto in una immagine effettiva
    elContainer.innerHTML += `<div class ="cards">  
                            <div class ="membro img"><img src="${datiMembro.foto}" alt="immagine"></div>
                            <div class ="dati">${datiMembro.nome}, ${datiMembro.ruolo}</div>
                            </div>`
}