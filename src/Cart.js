import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {isEmpty,totalUniqueItems,items,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart} = useCart()

    if (isEmpty) return <h1>The Cart is Empty</h1>
  return (
    <div className='row justify-content-center'>
        <h5>Cart:{totalUniqueItems} Total Items :{totalItems} </h5>
        <table className='table table-light table-hover m-0'>
        <tbody>
        {
            items.map((item,index)=>{
                return(
                  <tr key={index}>
                      <td><img src={item.img} style={{width:"5rem"}} alt=""></img></td>
                      <td>{item.itemname}</td>
                      <td>₹ {item.price} / kg</td>
                      <td> {item.quantity}</td>
                      <td>
      <button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
      <button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
      <button className='btn btn-danger ms-2' onClick={()=>removeItem(item.id)}>Remove Item</button>
                      </td> 
                      <td>₹.{item.price*item.quantity}</td>
                  </tr>
                )
            })

        }
        </tbody>
        </table>
        <h2 className='text-end bg-success me-2'>Total price : ₹ {cartTotal}   </h2>
        <button className='btn btn-primary col-2'  onClick={emptyCart}>CLear Cart</button>
        <button className='btn btn-warning col-2'>Buy Now</button>
    </div>

   )
}

export default Cart