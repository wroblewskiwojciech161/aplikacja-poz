<template>
      <section class="bg-bookmark-dark text-white py-20">
        <div class="container">
            <div class="sm:w-3/4 mx-auto">
                <p  data-aos="fade-left" class="font-light uppercase text-center mb-8">They already trusted us</p>
                
                <!-- <h1 class="text-2xl text-center">Join us</h1>
                <div class="flex flex-col sm:flex-row gap-6 mt-8">
                    <input type="text" placeholder="Enter your email adress" class="focus:outline-none flex-1 px-2 py-3 rounded-md text-black">
                    <button type="button" class="btn bg-yellow-300 hover:bg-bookmark-white hover:text-black text-black">Contact us</button>
                </div> -->
                <carousel :items-to-show="3">
                    <slide v-for="path in paths" :key="path">
                      <img :src="path.src"/>
                    </slide>
                    <template #addons>
                      <navigation />
                      <pagination />
                    </template>
                  </carousel>
            </div>
        </div>
    </section>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import image from "../assets/images/poz.png"
import {ref} from "vue"

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup(){
    const paths = ref([
        {
            src: image
        },
        {
            src: image
        },
        {
            src: image
        },
        {
            src: image
        },
        {
            src: image
        },
        {
            src: image
        }
    ])
    return {paths}
  }
}
  
</script>
