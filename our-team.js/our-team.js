/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe*/



// Creare l’array di oggetti con le informazioni fornite.
const membriTeam = [
    {"nome" : "Wayne Barnett",	
    "ruolo" : "Founder & CEO",	
    "foto" : "wayne-barnett-founder-ceo.jpg",
    },
    {"nome" : "Angela Caroll",	
    "ruolo" : "Chief Editor",	
    "foto" : "angela-caroll-chief-editor.jpg",
    },
    {"nome" : "Walter Gordon",	
    "ruolo" : "Social Media Manager",	
    "foto" : "wayne-barnett-founder-ceo.jpg",
    },
    {"nome" : "Angela Lopez",	
    "ruolo" : "Founder & CEO",	
    "foto" : "angela-lopez-social-media-manager.jpg",
    },
    {"nome" : "Scott Estrada",	
    "ruolo" : "Developer",	
    "foto" : "scott-estrada-developer.jpg",
    },
    {"nome" : "Barbara Ramos",	
    "ruolo" : "Graphic Designer",	
    "foto" : "barbara-ramos-graphic-designer.jpg",
    },
]

console.log(membriTeam);


// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (let i = 0; i < membriTeam.length; i++) {
    const datiTeam = membriTeam[i];
    console.log(membriTeam[i]);
    
}
