<template>
    <footer class="bg-bookmark-dark py-8">
        <div class="container flex flex-col md:flex-row items-center">
            <div class="flex flex-1 flex-wrap items-center justidy-center md:justify-start gap-12">
                <img src="../assets/images/podcast.png" alt="podcast icon" width="40">
                <ul class="flex text-white uppercase gap-12 text-xs">
                    <li @click="scrolltoId('section1')" class="cursor-pointer">Description</li>
                    <li @click="scrolltoId('section2')" class="cursor-pointer">Idea</li>
                    <li @click="scrolltoId('section3')" class="cursor-pointer">Contact</li>
                </ul>
            </div>
            <div class="flex gap-10 mt-12 md:mt-0">
                <li class="list-none"><i class="text-white text-2xl fab fa-twitter"></i></li>
                <li class="list-none"><i class="text-white text-2xl fab fa-facebook"></i></li>
            </div>
        </div>
    </footer>
</template>

<script>
import {scrolltoId} from "../composables/utils"
   export default {
    setup(){
        return {
            scrolltoId
        }

    }
    }
</script>

