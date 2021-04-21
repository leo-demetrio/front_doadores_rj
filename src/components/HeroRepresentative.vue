<template>
<section class="margin-result tabe-contenet">
    <h1>Instiutição: {{institutName}}</h1> 
    <h2>Representante: {{representativeName}}</h2> 
    <div v-for="(institut, index) in instituts" :key="index" class="tab-pane-item">
        <!-- <h2>{{institut.name}} id:{{institut.id}}</h2> -->
     
        
        <form @submit.prevent="registerInstitutRepresentative()" class="online-form">            
            <button type="submit" class="form-control button-instituts">Fazer doação</button>
        </form>
      
    </div>    
</section>
</template>

<script>


export default {
    name: 'HeroRepresentative',
    data() {
       return {
           instituts: [],
           institutId: '',
           institutName: '',
           representativeName: '',
           representativeId: '',
           dataDonation: [],
           key: 1
       } 
    },
    mounted() {          
        let data = JSON.parse(localStorage.getItem('resultNumberRepresentativeAndInsitut'));
        this.instituts.push(data.institut);
        this.representativeName = data.representative[0].name;
        this.representativeId = data.representative[0].id;
        this.institutName = data.institut.name;
        this.institutId = data.institut.id;
    },
    methods: {
        registerInstitutRepresentative() {
            this.dataDonation.push(this.representativeName);
            this.dataDonation.push(this.representativeId);
            this.dataDonation.push(this.institutId);
            this.dataDonation.push(this.institutName);
            this.dataDonation.push(this.key);
            const parseDataDonation = JSON.stringify(this.dataDonation);
            localStorage.setItem('InstitutdonationCash', parseDataDonation);
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
