<script>


function sitoInformation(){
 const personalInformation = {
  firstName: "Ogundare",
  lastName: "Israel Taiwo",
  hng_id: "HNG-03186",
  email: "ogundare_taiwo1@yahoo.com",
  language: "Javascript",
  fullHistory: function() {
    return `Hello world, this is ${this.firstName} ${this.lastName} with HNGi7 ID ${this.hng_id} and email ${this.email} using ${this.language} for stage 2 task`
  }
 }
  console.log(personalInformation.fullHistory());
}

sitoInformation();
</script>
