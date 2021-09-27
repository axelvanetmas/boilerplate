
<template>
<div>
  <PagePresenter title="Actualités" image="https://s3-eu-west-1.amazonaws.com/talentview-dev/uploads/company/cover/A53j1QG3QanfZ1E7yp1w_1525421288849.jpg" />
  <h1>This is a actuality.</h1>
  <input type="text" v-model="name" name="" id="">
  <button class="btn-blue">click me {{name}}</button>
  <button>click me</button>
</div>
</template>

<script>
import PagePresenter from '../components/PagePresenter.vue'
export default {
    name: "Team",
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
