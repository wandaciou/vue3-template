<template>
  <h1>list Two</h1>
    <ul>
    <li v-for="product in products">
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