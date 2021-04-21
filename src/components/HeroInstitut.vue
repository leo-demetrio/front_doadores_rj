<template>
<section class="margin-result tabe-contenet">
    <h1>Institutos</h1> 
    <h2>{{representative.name}}</h2> 
    <div v-for="(institut, index) in instituts" :key="index" class="tab-pane-item">
        <h1>{{institut.name}}</h1>
        <h6>{{institut.id}}</h6>
     
        
        <form @submit.prevent="registerInstitut(institut.id)" class="online-form">            
            <button type="submit" class="form-control button-instituts">Fazer doação</button>
        </form>
      
    </div>    
</section>
</template>

<script>
import Instituts from '../services/instituts';

export default {
    name: 'HeroInstitut',
    data() {
       return {
           instituts: [],
           institutId: '',
           representative: '',
       } 
    },
    mounted() {   
         Instituts.listar()
         .then((response) => {
             this.instituts = response.data;
             console.log(this.instituts)                         
       }); 
    },
    methods: {
        registerInstitut(id) {
            const result = this.instituts.filter(
                numero => (numero.id === id) 
            )
            const InstitutForDonation = JSON.stringify(result);
            localStorage.setItem('InstitutdonationCash', InstitutForDonation);
            return this.$router.push('/mode');
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
</style>
