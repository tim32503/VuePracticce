<template>
  <main>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"><i class="fas fa-gem"></i> 賺很大商店</a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">商品</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">當日特價</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- Props In Event Out -->
    <section class="container mt-4">
      <ItemList :itemList="itemList"
                @addToCart="addCart" />
      <hr>
      <Cart :cart="cart"
            @removeFromCart="removeItem"
            @emptyCart="emptyCart" />
    </section>
  </main>
</template>

<script>
  import { ref } from 'vue'
  import ItemList from './components/ItemList.vue'
  import Cart from './components/Cart.vue'

  export default {
    components: {
      ItemList, Cart
    },
    setup() {
      const itemList = ref([]);
      const cart = ref([]);

      const addCart = (item) => {
        const idx = cart.value.findIndex(i => item.id === i.id);

        if(idx > -1) {
          cart.value[idx].qty ++;
          cart.value[idx].subtotal = cart.value[idx].qty * cart.value[idx].price;
        }else{
          cart.value.push({
            ...item,
            qty: 1,
            subtotal: 1 * item.price
          })
        }
        
      }

      const removeItem = (item) => {
        cart.value = cart.value.filter(i => i.id != item.id);
      }

      const emptyCart = () => {
        cart.value.length = 0;
      }

      fetch('./item.json')
        .then(res => res.json())
        .then(item => itemList.value = item)

      return {
        itemList, cart, addCart, emptyCart, removeItem
      }
    }
  }

</script>

<style>

</style>
