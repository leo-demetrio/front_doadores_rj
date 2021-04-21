<template>
    <!-- FEATURE -->
<section class="margin-result tabe-contenet">
    <h1>Doação em dinheiro</h1>
    <div class="tab-pane-item">
       
        <h2 v-if="valueDonor.representativeName">Representante: {{valueDonor.representativeName}}</h2><br>
        <h2>Instituição: {{valueDonor.institutName}}</h2><br>
        <form @submit.prevent="makeDonation" class="online-form">
            <input v-model="valueDonor.nameDonor" type="text"  class="form-control" placeholder="seu nome">
            <input v-model="valueDonor.emailDonor" type="email"  class="form-control" placeholder="seu email">
            <input v-model="valueDonor.valueDonation" type="text"  class="form-control" placeholder="valor" required>
            <button type="submit" class="form-control button-instituts">Fazer doação</button>
        </form>
    
    </div>
</section>
</template>
<script>
import Donation from '../services/donation.js';
export default {
   name: 'HeroCash',
   data() {
       return {
           valueDonor: {
               nameDonor: '',
               valueDonation: '',
               emailDonor: '',
               institutName: '',
               institutId: '',
               representativeName: '',
               representativeId: '',
           }
       }
   },
   mounted() { 
        let data = JSON.parse(localStorage.getItem('InstitutdonationCash')); 
        if(data[4] === 1){        
        this.valueDonor.representativeName = data[0];
        this.valueDonor.institutName = data[3];
        this.valueDonor.institutId = data[2];
        return; 
        } 
        data = JSON.parse(localStorage.getItem('InstitutdonationCash'));
        console.log(data);
        this.valueDonor.institutName = data[0].name,
        this.valueDonor.institutId = data[0].id
   },
   methods: {
         makeDonation() {            
              Donation.donation(this.valueDonor)
              .then((response) => {
                  this.valueDonor.valueDonation = '';
                  this.valueDonor.emailDonor = '';
                  this.valueDonor.nameDonor = '';
                  console.log(response);
                    // return this.$router.push('/instituts',response);
              })
              .catch((err) => {
                  console.log(err)
              })
         }
    }
}
</script> 
<style scoped>
.margin-result {
    width: 80%;
    margin: auto;
    margin-top: 40px;
    align-items: center;
}
.button-instituts {
    position: relative;
    left: 0;
}
.form-control {
    border: 1px solid #ccc;

}
input {
    margin-left: 0;
    margin-bottom: 2rem;
    width: 50%;
}
</style>


