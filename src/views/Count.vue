<template>
  <div class="count">
    <h1>This is an count page</h1>
    {{$store.state.count}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
<script>
export default {
  methods:{
    increment:function(){
      this.$store.commit("increment");
    },
    decrement:function(){
      this.$store.commit("decrement");
    },

  }
}
</script>