<template>
<div class="mode-height container">
    <h2 class="title-mode">Formas de doação</h2>
    <div class="tab-pane-item div1">        
        <form class="online-form" action="/mode">
            <button type="submit" class="form-control button-instituts">Via Pix</button>
        </form>       
    </div>
    <div class="tab-pane-item">        
        <form class="online-form" action="/mode-cash">
            <button type="submit" class="form-control button-instituts">Dinheiro</button>
        </form>      
    </div>
    <div class="tab-pane-item div3">     
        <form class="online-form" action="/mode">
            <button type="submit" class="form-control button-instituts">Pag Seguro</button>
        </form>    
    </div>
</div>
</template>
<script>



export default {
    name: 'Mode'
}
</script>
<style scoped>
.mode-height {
    display: flex;
    flex-direction: column;
    position: relative;
    /* margin-top: 180px;     */
    height: 100%;
}
.title-mode {
    margin: auto;
    margin-top: 110px;
}
.online-form .form-control {
    position: relative;
    width: 70%;
    margin: auto;
    margin-right: 0;
    margin-bottom: 20px;
    margin-left: 30%;
}

form button {
    position: absolute;
    margin: 5rem;
    font-size: 2rem;
    font-weight: 800;
}
.div1 {
    margin-top: 50px;
}
.div3 {
    margin-bottom: 50px;
}

 @media screen and (max-width: 1200px) {
     .online-form .form-control {
         position: relative;
         margin: auto;
         margin-left: 30%;
     }
 }
 @media screen and (max-width: 500px) {
     .online-form .form-control {
         position: relative;
         margin: auto;
     }
   
 }

</style>
