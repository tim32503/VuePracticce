<template>
  <section class="cart">
    <h2>購物車</h2>
    <table class="table cart-item-table">
      <thead>
        <tr>
          <th scope="col">項目</th>
          <th scope="col">數量</th>
          <th scope="col">單價</th>
          <th scope="col">小計</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id">
          <td>{{ item.name }}</td>
          <td><input type="number" min="1" class="quantity" v-model="item.qty"></td>
          <td>${{ item.price }}</td>
          <td>${{ subtotal(item.id) }}</td>
          <td><button :data-id="item.id" class="remove-item-btn btn btn-danger btn-sm" @click="removeItem(item)"><i class="fas fa-trash-alt"></i></button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2"></td>
          <td>總價</td>
          <td><span class="total-price">${{ totalPrice }}</span></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
    <button class="btn btn-lg btn-success empty-cart" @click="emptyCart"><i class="fas fa-baby-carriage"></i> 清空購物車</button>
  </section>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    cart: null
  },
  setup(props, context) {
    const totalPrice = computed(() => {
        // return Math.round(props.cart.map(item => item.qty * item.price).reduce(
        //         (total, currentItem) => total + currentItem, 0
        //       ) * 100) / 100;
        return Math.round(props.cart.map(item => item.subtotal).reduce(
                (total, currentItem) => total + currentItem, 0
              ) * 100) / 100;
      })

    const removeItem = (id) => {
      context.emit('removeFromCart', id);
    }

    const emptyCart = () => {
      context.emit('emptyCart')
    }

    const subtotal = (id) => {
      const idx = props.cart.findIndex(i => id === i.id);
      props.cart[idx].subtotal = props.cart[idx].qty * props.cart[idx].price;

      return props.cart[idx].subtotal
    }

    return { removeItem, totalPrice, emptyCart, subtotal }
  }
}
</script>