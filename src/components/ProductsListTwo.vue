<template>
  <h1 class="mt-4 text-2xl">list Two</h1>
    <ul class="w-full flex flex-col justify-evenly item-center bg-red-200 p-4 space-y-4">
      <li v-for="product in products" class="flex flex-row space-x-2 item-center justify-center p-4 bg-white rounded">
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