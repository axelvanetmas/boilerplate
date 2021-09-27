
<template>
<div>
  <PagePresenter title="L'équipe" image="https://s3-eu-west-1.amazonaws.com/talentview-dev/uploads/company/cover/MqZYghlES0yFGBXTcxRL_1527577914456.jpeg" />
  <h1>This is a homepage.</h1>
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
