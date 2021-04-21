<template>
<div>
<Hero />
<CenterHero></CenterHero>
<Contact></Contact>
</div>
    
</template>
<script>

import Hero from '../components/Hero';
import CenterHero from '../components/CenterHero';
import Contact from '../components/Contact';

export default {
    name: 'Home',
    components: {
        Hero,
        CenterHero,
        Contact
    }
}
</script>
