import React from 'react'
import ItemCard from './ItemCard'
import data from './data'
const Home = () => {
  return (
    <>
    <h1 className='text-center bg-info mt-5 mb-5'>Shopping Cart - Created By K.Gowthaman M.C.A.,</h1>

    <div className='row justify-content-center'>
    {
      data.productdata.map((item,index)=>{
        return(
          <ItemCard img={item.img} itemname={item.itemname} desc={item.desc} price={item.price} id={item.id}></ItemCard>
        )
      })
    }
    </div>
    </>
  )
}
export default Home
