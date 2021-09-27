<template>
  <div class="header flex" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
    <Navbar></NavBar>
    <h1 class="title flex">{{title}}</h1>
    <div v-if="isHome" class="flex flex-row w-screen mt-30 mb-40 justify-center	">
      <button class="btn-transparent w-80 h-20 m-10">Découvrir</button>
      <button class="btn-gray w-80 h-20 m-10">Nos offres</button>
    </div>
    <div v-else>
      <h1 class="title flex">v</h1>
    </div>
  </div>

</template>

<script>
import Navbar from "./Navbar.vue"
export default {
  name: 'Header',
  components: {
    Navbar
  },
  props: {
    links: {
      type: Array,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    isHome: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
  }
}
</script>
