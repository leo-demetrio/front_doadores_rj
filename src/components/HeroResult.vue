<template>
<section class="margin-result tabe-contenet">
    <h1>Institutos</h1> 
    <h2>{{representative[0].name}}</h2> 
    <div v-for="(institut, index) in instituts" :key="index" class="tab-pane-item">
        <h2>{{institut.name}}{{institut.id}}</h2>
     
        
        <form @submit.prevent="registerInstitut(institut.id)" class="online-form">            
            <button type="submit" class="form-control button-instituts">Fazer doação</button>
        </form>
      
    </div>    
</section>
</template>

<script>
//import Instituts from '../services/instituts';

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
        //  Instituts.listar(this.searchInput)
        //  .then((response) => {
        //      this.instituts = response.data;
        //      //this.instituts.push(response.data);
        //      console.log(this.instituts)
             //this.instituts = response.data;
        //localStorage.setItem('result',JSON.stringify(response));
                            //   console.log(response);
                              //console.log(this.instituts)
                         //     console.log(localStorage.result);
                        //     console.log(this.searchInput.name);
                         //return this.$router.push('/instituts');
                         
       // }); 

       
        let data = JSON.parse(localStorage.getItem('resultNumberRepresentatives'));
        this.instituts.push(data.institut);
        this.representative = data.representative;
        console.log(this.representative)
    },
    methods: {
        registerInstitut(id) {
            localStorage.setItem('institutId', id);
            return this.$router.push('/mode');
            // localStorage.getItem('institutId');/
            // let data = localStorage.getItem('institutId');
            // console.log(data + 'dados')
            // console.log(id)
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
