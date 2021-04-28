class Cart {
  constructor() {
    this.items = []
  }

  add(item) {
    const foundItem = this.items.find(t => t.id == item.id)

    if (foundItem) {
      // 增加數量
      foundItem.increment()
    } else {
      this.items.push(item)
    }

    console.log(this.items);
  }
}

export default Cart
