const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      image: './assets/images/socks_blue.jpg',
      isAvailable: true,
      inventory: 8,
      onSale: true,
      saleMes: 'Sale! NOW',
    };
  },
});
