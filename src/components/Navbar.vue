<script>
import CountryFlag from 'vue-country-flag-next'

export default {
  components: {
    CountryFlag
  },
  props: {
    links: {
      type: Array,
      required: true
    },
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
      ]
    }
  }
}

</script>

<template>
<div class="navbar-transparent">
  <nav class="flex items-center container  h-full justify-between">
    <h1 class="font-semibold uppercase text-lg text-gray-200">
      {{title}}
    </h1>
    <div>
      <ul class="flex items-center space-x-10 text-sm">
        <li v-for="link in links" :key="link.id">
          <router-link :to="link.path" class="text-gray-400 hover:text-gray-100">
            {{link.name}}
          </router-link>
        </li>
      </ul>
    </div>
    <div>
        <select >
          <option value="fr"><country-flag country='fr' size='small'/></option>
          <option value="gb"> <country-flag country='gb' size='small'/></option>   
        </select>        
    </div>
  </nav>
</div>
</template>