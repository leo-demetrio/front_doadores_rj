<template>
<div>
<HeroInstitut></HeroInstitut>

</div>
    
</template>
<script>
import HeroInstitut from '../components/HeroInstitut';


export default {
    name: 'ListInstitut',
    components: {
        HeroInstitut
    }
}
</script>
<style scoped>
/*---------------------------------------
      MENU              
  -----------------------------------------*/

  .custom-navbar {
    border: none;
    margin-bottom: 0;
    padding: 25px 0;
  }

  .custom-navbar .navbar-brand {
    color: #ffffff;
    font-size: 25px;
    font-weight: 500;
    letter-spacing: -1px;
  }

  .top-nav-collapse {
    background: #ffffff;
  }

  .custom-navbar .navbar-nav {
    margin-left: 6em;
  }

  .custom-navbar .nav li a {
    font-size: 16px;
    font-weight: normal;
    color: #f0f0f0;
    padding-right: 22px;
    padding-left: 22px;
  }

  .custom-navbar .nav li a:hover {
    background: transparent;
    color: #29ca8e;
  }

  .custom-navbar .navbar-nav > li > a:hover,
  .custom-navbar .navbar-nav > li > a:focus {
    background-color: transparent;
  }

  .custom-navbar .nav li.active > a {
    background-color: transparent;
    color: #29ca8e;
  }

  .custom-navbar .navbar-toggle {
    border: none;
    padding-top: 10px;
  }

  .custom-navbar .navbar-toggle {
    background-color: transparent;
  }

  .custom-navbar .navbar-toggle .icon-bar {
    background: #29ca8e;
    border-color: transparent;
  }
  /*---------------------------------------
     RESPONSIVE STYLES              
  -----------------------------------------*/

  @media only screen and (max-width: 1200px) {

    .custom-navbar .navbar-nav {
      margin-left: 3em;
      
    }

    .home-info {
      margin-top: 0;
    }
  }


  @media only screen and (max-width: 992px) {

    section {
      padding: 60px 0;
    }

    .custom-navbar .navbar-nav {
      margin-left: 0;
    }

    .custom-navbar .nav li a {
      font-size: 14px;
      padding-right: 15px;
      padding-left: 15px;
      color: red;
    }

    #feature .nav-tabs>li>a {
      font-size: 16px;
      margin-right: 20px;
    }

    .feature-image {
      bottom: -24em;
    }

    .pricing-thumb {
      margin-bottom: 30px;
    }

    footer {
      padding-bottom: 40px;
    }
  }


</style>