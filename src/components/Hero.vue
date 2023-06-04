<template>
    <section class="relative">
        <div class="container flex flex-col-reverse lg:flex-row items-center pag-12 mt-5 lg:mt-10">
            <div class="flex flex-1 flex-col items-center lg:items-start">
                <h2 data-aos="fade-down" class="text-white text-3xl md:text-4 leg:text-5xl text-center lg:text-left mb-6">POZ APP TITLE</h2>
                <p class="text-bookmark-grey text-lg text-center lg:text-left mb-6"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum perferendis vel numquam facilis quia, placeat, rem ea ut veniam similique dolorem quasi doloribus quae et, quam voluptatibus illo. Dolor, aspernatur!</p>
                <div class="flex justify-center felx-wrap gap-6">
                    <button type="button"
                        class="btn bg-yellow-300 hover:bg-bookmark-white hover:text-black">More</button>
                </div>
            </div>
            <div data-aos="fade-left" class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                <img src="../assets/images/hero.png" alt="micro illustration"
                class="w-5/6 h-5/6 sm:w-3/4 sm:3/4 md:w-full md:h-full rounded-md">
            </div>
            <div
                class="hidden md:block overflow-hidden bg-yellow-300 parallelogram absolute h-80 w-2/4 top-32  lg:-bottom-28 lg:-right-30">
            </div>

        </div>
    </section>
</template>

<script>

</script>
<style>
.parallelogram {
	transform: skew(15deg);
    right: -80px;
}
</style>

