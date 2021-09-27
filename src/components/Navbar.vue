<script>
import CountryFlag from 'vue-country-flag-next'
export default {
  components: {
    CountryFlag
  },
  props: {
    
    title: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      options: [
        {
          code: "fr",
        },
        {
          code: "en",
        }
      ],
      links: [
        {id: 1, name: 'Activités', path: '/'},
        {id: 2, name: "L'équipe", path: '/team'},
        {id: 3, name: 'Actualités', path: '/actuality'},
        {id: 4, name: 'Nous et vous', path: '/discover-us'}
      ]
    }
  }
}

</script>

<template>
  <nav class="navbar-transparent">
    <img class="w-20 h-20 ml-10" src="./../static/logo.png" alt="">
    <div class="flex flex-row">
      <ul class="flex items-center space-x-10 text-sm">
        <li v-for="link in links" :key="link.id">
          <router-link :to="link.path" class="text-gray-400 hover:text-gray-100">
            {{link.name}}
          </router-link>
        </li>
      </ul>

      <select class="m-3">
        <!-- <option value="fr"><country-flag country='fr' size='small'/></option>
        <option value="gb"> <country-flag country='gb' size='small'/></option>    -->
      </select>    
        <select class="m-3">
        <!-- <option value="fr"><country-flag country='fr' size='small'/></option>
        <option value="gb"> <country-flag country='gb' size='small'/></option>    -->
      </select>      
      <button class="btn-gray">Candidature spontanée</button>
    </div>
  </nav>
</template>