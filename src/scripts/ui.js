const buildItemList = (cart) => {
  const list = cart.items.map(item => {
    return `<tr>
      <td>${item.title}</td>
      <td><input type="number" class="quantity" value="${item.quantity}"></td>
      <td>$${item.price}</td>
      <td>$${item.totalPrice()}</td>
      <td><button class="remove-item-btn btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button></td>
    </tr>`
  })

  return list.join('')
}

export { buildItemList }
