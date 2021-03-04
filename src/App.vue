<template>
  <products-list-one v-bind:products="products"></products-list-one>
  <products-list-two v-bind:products="products"></products-list-two>
  <router-view></router-view>
  <router-link to="/HelloWorld">link</router-link>
</template>

<script lang="ts">
import ProductsListOne from './components/ProductsListOne.vue'
import ProductsListTwo from './components/ProductsListTwo.vue'
export default {
  name: 'App',
  components: {
    'products-list-one': ProductsListOne,
    'products-list-two': ProductsListTwo

  },
  data(){
    return{
      products:[
        { name: 'Banana', price: '40' },
        { name: 'Apple', price: '32' },
        { name: 'Orange', price: '20' },
        { name: 'pearl', price: '24' }
      ]
    }
  }
}
</script>
