<script setup>
import PagePresenter from './components/PagePresenter.vue';
const links = [
  {id: 1, name: 'Activités', path: '/'},
  {id: 2, name: "L'équipe", path: '/team'},
  {id: 3, name: 'Actualités', path: '/actuality'},
  {id: 4, name: 'Nous et vous', path: '/discover-us'}
]
</script>   

<template>
  <div class="min-h-full">
      <router-view />
  </div>
</template>

<style>
  #app {
    width: 100%;
    min-height: 100vh;
  }
</style>

