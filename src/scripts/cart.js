class Cart {
  constructor() {
    this.items = []
  }

  empty() {
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
  }

  removeItemId(id) {
    this.items = this.items.filter(item => item.id != id)
  }

  totalPrice() {
    return Math.round(this.items.reduce(
      (total, currentItem) => total + currentItem.totalPrice(),
      0
    )* 100) / 100

    // let total = 0

    // this.items.forEach(item => {
    //   total += item.totalPrice()
    // })

    // return total
  }
}

export default Cart
