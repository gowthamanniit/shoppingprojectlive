import React from 'react'
//import testimg from './images/apple.jfif'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useCart } from 'react-use-cart'
const ItemCard = (props) => {
  const {addItem} = useCart()
  return (
    <>
    <div className='col-2 ms-3'>
    <div className='card p-0 overflow-hidden h-100 mx-0 mb-4 shadow'>
    <img src={props.img} className="card-img-top img-fluid" alt=""></img>
    <div className='card-body'>
        <h5 className='card-title'>{props.itemname}</h5>
        <h5 className='card-title'>₹ {props.price} / kg</h5>
        <p className='card-text'>{props.desc}</p>
        <button className='btn btn-primary' onClick={()=>addItem(props)}>add to card</button>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default ItemCard