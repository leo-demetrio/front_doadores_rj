<template>
    <!-- FEATURE -->
     <section id="home" data-stellar-background-ratio="0.5">
          <div class="overlay"></div>
          <div class="container">
               <div class="row">

                    <div class="col-md-offset-3 col-md-6 col-sm-12">
                         <div class="home-info">
                              <h1>Agora ficou fácil doar</h1>
                              <h3>Pesquise instituto ou representante</h3>
                              <form @submit.prevent="search(searchInput.value)" action="/instituts" class="online-form">
                                   <input v-model="searchInput.value" type="text" name="name" class="form-control" placeholder="nome instituto ou código representante" required>
                                   <button type="submit" class="form-control">Pesquisar</button>
                              </form>
                         </div>
                    </div>

               </div>
          </div>
     </section>
</template>
<script>
import Instituts from '../services/instituts';
import Representative from '../services/representative';
export default {
    name: 'Hero',
    data() {
        return {
             
             searchInput: {
                  value: '',
             }
        } 
    },
    methods: {
     search(valueInput) {
          valueInput = isNaN(valueInput)
          //console.log(valueInput)
          if(!valueInput){
            Representative.searchRepresentative(this.searchInput)
            .then((response) => {
            localStorage.setItem('resultNumberRepresentativeAndInsitut',JSON.stringify(response.data));
            //console.log(response.data);  
            //localStorage.clear();       
            return this.$router.push('/representatives');                         
            }); 
          }else {
          Instituts.searchInstitut(this.searchInput)
           .then((response) => {
           localStorage.setItem('resultStringInstituts',JSON.stringify(response.data));
           console.log(response);  
           //localStorage.clear();               
           return this.$router.push('/instituts');                         
          });   
          }

          //     var value = this.searchInput.value;
          //     value = parseFloat(value)
          //      console.log(typeof(value))

          //      if(!isNaN(value)) {
          //           Instituts.searchInstitut(this.searchInput)
          //           .then((response) => {
          //                localStorage.setItem('result',JSON.stringify(response));
          //                     console.log(response);
          //                //     console.log(localStorage.result);
          //               //     console.log(this.searchInput.name);
          //                return this.$router.push('/instituts');
                         
          //         });               
          //      }
               // Representative.searchRepresentative(6)
               //      .then((response) => 
               //      {
               //           console.log(response);
               //           localStorage.setItem('result',JSON.stringify(response));
                              
               //           //     console.log(localStorage.result);
               //           //     console.log(this.searchInput.name);
               //           return this.$router.push('/instituts');
                         
               //      });  

          
              
         }
    }
}
</script>
