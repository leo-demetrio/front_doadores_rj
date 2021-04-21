<template>
  <div id="app">
    <Header />
    <router-view path="$router.key" />
    <!-- <Hero />
    <CenterHero />
    <Contact /> -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
// import Hero from './components/Hero.vue';
// import CenterHero from './components/CenterHero.vue';
// import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    // Hero,CenterHero,
    Footer,
    // Contact
  }
}
</script>

<style>

</style>
