import React from 'react'
import { useCart } from 'react-use-cart'
import { useState } from 'react'
import axios from 'axios'
const Cart = () => {
    const {isEmpty,totalUniqueItems,items,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart} = useCart()
    const [cname,setCname]=useState("")
    if (isEmpty) return <h1>The Cart is Empty</h1>
    
  const insertItem=async()=>{
    const iteminput={
        name:cname,
        orders:items
    }
    await axios.post("http://localhost:8099/api/products",iteminput).then((res)=>{
        console.log(res.data)

        alert("products saved successfully")             
        
        }).catch((err)=>{
            if(err.response){
              console.log(err.response.data)
            }
        })


  }
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
        Customer Name:<input style={{width:"200px"}}  type="text" id="cname" value={cname} onChange={(e)=>setCname(e.target.value)}></input>
        <button className='btn btn-primary col-2'  onClick={emptyCart}>Clear Cart</button>
        <button className='btn btn-warning col-2' onClick={()=>insertItem()}>Sale</button>
    </div>

   )
}

export default Cart