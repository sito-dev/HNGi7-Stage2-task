<script>

 function sitoInformation(){

//my information Object goes here.

  const personalInformation = {
   fullName: "Ogundare Israel Taiwo",
   ID: "HNG-03186",
   programmeLang: "Javascript",
   fullHistory: function() {
    return `Hello world, this is ${this.fullName} with HNGi7 ID: ${this.ID} using ${this.programmeLang} for Stage 2 Task`;
   }

}

 document.write(personalInformation.fullHistory());


}

//calling my sitoInformation function for a print

sitoInformation();




</script>
