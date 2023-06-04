<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <img src="../assets/images/podcast.png" width="60" alt="podcast logo">
        <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <i class="fas fa-bars" ></i>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li  @click="scrolltoId('section1')" class="nav-item cursor-pointer text-white nav-item content-center">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
             <span class="ml-2">Description</span>
            </a>
          </li>
          <li  @click="scrolltoId('section2')" class="nav-item cursor-pointer text-white nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
             <span class="ml-2">Idea</span>
            </a>
          </li>
          <li  @click="scrolltoId('section3')" class="nav-item cursor-pointer text-white nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
             <span class="ml-2">Contact</span>
            </a>
          </li>
          <li>
           
              <button  @click="scrolltoId('price')" type="button" class="btn bg-yellow-300 hover:bg-bookmark-white hover:text-black text-black nav-item">Offer</button>
       
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {scrolltoId} from "../composables/utils";
import { ref } from "vue";
   export default {
    setup(){
      const showMenu = ref(false);
      function toggleNavbar(){
        this.showMenu = !this.showMenu;
      }
        return {
            scrolltoId,toggleNavbar,showMenu
        }

    }
    }

</script>

