<template>
  <products-list-one></products-list-one>
  <products-list-two></products-list-two>
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
    }
  }
}
</script>
