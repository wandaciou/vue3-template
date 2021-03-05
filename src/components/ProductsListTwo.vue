<template>
  <div class="w-full bg-red-100 p-8">
    <h1 class="mt-4 text-2xl">list Two</h1>
      <ul class="w-full flex flex-col justify-evenly item-center p-4 space-y-4">
        <li v-for="product in products" class="flex flex-row space-x-2 item-center justify-center p-4 bg-white rounded">
          <span>{{product.name}}</span>
          <span>${{product.price}}</span>
        </li>
      </ul>
  </div>

</template>

<script lang="ts">

export default {
  computed:{
    products(){
      return this.$store.state.products;
    }
  }
}
</script>