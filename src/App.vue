<template>
  <div class="app-wrapper">
    <Navigation />
    <Hero />
    <Features />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue';
import Hero from './components/Hero.vue';
import Features from './components/Features.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';


</script>

<style>
.app-wrapper{
  width: 100%;
  max-width: 1500px;
  overflow-x: hidden;
}
body {
  background-color: #040b12;
  justify-content: center;
  display: flex;
}
</style>
