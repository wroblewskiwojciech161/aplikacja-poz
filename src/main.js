import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css';
//#FF63BF
app.AOS = new AOS.init({
    // Global settings:
    //offset: 120, // offset (in px) from the original trigger point
    delay: 80, // values from 0 to 3000, with step 50ms
    duration: 2200, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    //anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });

createApp(App).use(AOS).mount('#app');
