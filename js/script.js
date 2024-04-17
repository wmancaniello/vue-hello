// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

console.log(Vue);

const { createApp } = Vue;

createApp({
  // Inserire dati e logica dell'app
  data() {
    return {
      // inserisco i dati
      firstApproach: "Il mio primo approccio a VUE senza OLGA:",
      imageName: "blind.jpeg",
      imageAlt: "Blind man",
      divClass: "hidden"
    };
  },
  methods: {
    // Metto tutte le funzioni che posso invocare nell'app
    showImage: function () {
        if (this.divClass === "hidden") {
            this.divClass = ""
        } else {
            this.divClass = "hidden"
        }
    }
  },
}).mount("#app");

// CDN
// <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

// DIV nel body
// <div id="app"></div>
