<template>
  <section class="pb-20 px-4 bg-cover text-center bg-hero">
    <br>
    <br>
    <br>
    <div class="w-full max-w-7xl mx-auto">
      <h2 class="text-4xl leading-tight font-semibold font-heading">
        {{ cta.title }}
      </h2>
      <div
        v-html="cta.content"
        class="mt-6 mb-8 text-gray-700 leading-relaxed"
      ></div>


       <g-link
          class="inline-block bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 mb-4 rounded shadow rounded-full" 
          v-if="cta.button"
          :to="cta.link"
          >{{ cta.button }}</g-link
        >
        <g-link
          class="inline-block bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 mb-4 rounded shadow rounded-full"
          v-if="cta.button2"
          :to="cta.link2"
          >{{ cta.button2 }}</g-link
        >
         <g-link
          class="inline-block bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 mb-4 rounded shadow rounded-full"
          v-if="cta.button3"
          :to="cta.link3"
          >{{ cta.button3 }}</g-link
        >
      
      
    </div>
  </section>
</template>

<script>
export default {
  props: ["cta"],
};
</script>
<style scoped>
.bg-hero {
        background-image: url("~@/assets/images/bottom_cta.png");
    }
</style>