// Descrizione:
// Facciamo una chiamata ajax all’api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L’api ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Vue.

var app = new Vue({
   el: "#app",
   data: {

      albums: [],
      genreSelected: ""
   },
   mounted: function(index) {

      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then(risposta => {

         this.albums = risposta.data.response;
         console.log(this.albums);

      });
   },
   computed: {
      genreFilter: function () {
         return this.albums.filter((album) => {
            if (this.genreSelected === "" || this.genreSelected === "Tutti") {
               return this.albums;
            } else {
               return album.genre === this.genreSelected;
            }
         });
      }
   }
});
