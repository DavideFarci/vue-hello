/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

//VECCHIA ANNOTAZIONE 

// console.log(Vue); 

// const createApp = vue.createApp;

// createApp((

// )).mount("app");




//ANNOTAZIONE MODERNA

// const { createApp } = Vue;

// createApp((

// )).mount("app");




// METODO DI HENRI

const app = Vue.createApp({
    data: function() {
        return {
            message: `Dinamo Sassari nella storia: campione d'Italia e Triplete! (2015)`, 
            image: "https://www.sardegnainblog.it/wp-content/uploads/2015/06/dinamo-sassari-campione-italia-2015.jpg",
        }
    }
});
// Qui potrebbero esserci altre disposizioni prima di mount
app.mount("#app");
