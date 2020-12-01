// Descrizione:
// Facciamo una chiamata ajax all’api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L’api ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Vue.

var app = new Vue({
   el: "#app",
   data: {

      albums: []

   },
   mounted: function(index) {

      // for (let i = 0; i < 10; i++) {
      //    this.album.push("");
      // }

      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then(risposta => {

         let response = risposta.data.response;


         for (var i = 0; i < response.length; i++) {

            this.albums.push(response[i].title + response[i].author + response[i].year)

         }






      });
   }
});
