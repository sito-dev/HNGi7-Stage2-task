
<script>



//my information Object goes here
// Ogundare Israel Taiwo

var personalInformation = {
fullName: "Ogundare Israel Taiwo",
hng_ID: "HNG-03186",
email: "ogundare_taiwo1@yahoo.com",
programmeLang: "Javascript"
}

personalInformation = JSON.stringify(personalInformation)
personalInformation = JSON.parse(personalInformation)

var fullName = personalInformation.fullName
var hng_ID = personalInformation.hng_ID
var email = personalInformation.email
var programmeLang = personalInformation.programmeLang

alert("Hello world, this is " + fullName + " with HNGi7_Id: " + hng_ID + " with email address " + email + " using " + programmeLang + " for  Stage 2 task" );





</script>
