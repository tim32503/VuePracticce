import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
// 實作寫在這裡！

import Cart from './cart'
import CartItem from './cart-item'

const cart = new Cart()

const addToCart = btn => {
  btn.addEventListener('click', (e) => {
    const card = e.currentTarget.parentElement.parentElement
    const title = card.querySelector('.card-title').textContent
    const price = parseFloat(card.querySelector('.price')
                                 .textContent
                                 .replace('$', ''))
    const id = card.dataset['productId']
    // 加到購物車
    const item = new CartItem({ id, title, price })
    cart.add(item)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.card .btn')
  buttons.forEach(addToCart)
})
