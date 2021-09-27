<script setup>
import Navbar from './components/Navbar.vue';
const links = [
  {id: 1, name: 'Activités', path: '/activity'},
  {id: 2, name: "L'équipe", path: '/team'},
  {id: 3, name: 'Actualités', path: '/actuality'},
  {id: 4, name: 'Nous et vous', path: '/discover-us'}
]
</script>   

<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
