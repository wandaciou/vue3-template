import { createStore } from 'vuex'
export default createStore({
  state: {
    products: [
      { name: 'Banana', price: '40' },
      { name: 'Apple', price: '32' },
      { name: 'Orange', price: '20' },
      { name: 'pearl', price: '24' }
    ]
  },
  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map((product: { name: string; price: number; }) => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        };
      });
      return saleProducts;
    }
  }
})