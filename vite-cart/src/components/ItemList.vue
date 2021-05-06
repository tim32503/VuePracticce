<template>
  <div class="items row">
    <div class="col-sm-2" v-for="(item) in itemList" :key="item.id">
      <div class="card" :data-product-id="item.id">
        <img :src="`images/${item.cover}`" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title fs-6 fw-light">{{ item.name }}</h5>
          <p class="price">${{ item.price }}</p>
          <button class="btn btn-sm btn-warning fw-light" @click="addCart(item)"><i class="fas fa-cat"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    itemList: null
  },
  setup(props, context) {
    const addCart = item => {
      context.emit('addToCart', item);
    }

    return { addCart }
  }

}
</script>
