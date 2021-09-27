
<template>
<div>
  <h1>This is a homepage.</h1>
  <input type="text" v-model="name" name="" id="">
  <button class="btn-blue">click me {{name}}</button>
  <button>click me</button>
</div>
</template>

<script>

export default {
    name: "Home",
    components: {
    },
    props: {
  
    },
    data() {
        return {
            name
        };
    },
    mounted() {
    },

    methods: {

    },
};



</script>
