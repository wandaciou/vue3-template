<template>
  <h1 class="mt-4 text-2xl">list One</h1>
  <ul class="w-full flex flex-row justify-evenly item-center bg-indigo-200 p-4">
    <li v-for="product in products" class="flex flex-row space-x-2 p-4 bg-gray-100 rounded">
      <span>{{product.name}}</span>
      <span>${{product.price}}</span>
    </li>
  </ul>
</template>

<script lang="ts">

export default {
  props: ['products'],
  data(){
    return{

    }
  }
}
</script>