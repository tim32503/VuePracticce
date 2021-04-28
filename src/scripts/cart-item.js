class CartItem {
  constructor({ title, price, quantity = 1 }) {
    this.title = title
    this.price = price
    this.quantity = quantity
  }
}

export default CartItem
