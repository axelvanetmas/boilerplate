
<template>
<div>
  <PagePresenter :isHome="true" title="Bienvenue" image="https://s3-eu-west-1.amazonaws.com/talentview-staging/uploads/company/cover/xeh0rskLQqqcz0B8aHgv_1622099969838.jpg" />
  <h1>This is a homepage.</h1>
  <input type="text" v-model="name" name="" id="">
  <button class="btn-blue">click me {{name}}</button>
  <button>click me</button>
</div>
</template>

<script>
import PagePresenter from '../components/PagePresenter.vue'
export default {
    name: "Home",
    components: {
        PagePresenter
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
