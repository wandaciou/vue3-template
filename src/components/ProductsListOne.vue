<template>
  <div class="w-full bg-indigo-100 p-8">
    <h1 class="mt-4 text-2xl">list One</h1>
    <ul class="w-full flex flex-row justify-evenly item-center p-4">
      <li v-for="product in saleProducts" class="flex flex-row flex-wrap space-x-2 p-4 bg-gray-100 rounded">
        <span>{{product.name}}</span>
        <span>${{product.price}}</span>
      </li>
    </ul>
    <button v-on:click="reducePrice" class="bg-indigo-500 p-4 rounded-3xl text-white">Reduce Price</button>
  </div>
</template>

<script lang="ts">

export default {
 computed:{
   products(){
     return this.$store.state.products;
   },
   saleProducts(){
     return this.$store.getters.saleProducts;
   }
 },
 methods:{
   reducePrice: function(){
     /*this.$store.state.products.forEach( product => {
       product.price -= 1;
     })*/
     this.$store.commit('reducePrice')
   }
 }
}
</script>