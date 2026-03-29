import React from 'react'
import ItemCard from './ItemCard'
import data from './data'
import axios from 'axios'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
const Home = () => {
  const logoutfun=()=>{
    window.location.href="http://localhost:3000"
  }
  const flattenData = (data) => {
    return data.map(item => ({
      //Date: item.date,
      // Map nested properties to flat fields
      //"Number Card": item.num_card.number || '', 
      //"Number Check": item.num_check.number || '' 
      name:item.name,
        itemname:item.orders.map(i=>i.itemname)
    
    
    }));
  };
  const exportdata=async()=>{
    await axios.get("http://localhost:8099/api/products").then((res)=>{
      console.log(res.data)
      const ws = XLSX.utils.json_to_sheet(flattenData(res.data));
      const wb = { Sheets: { 'Data': ws }, SheetNames: ['Data'] };
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
      saveAs(blob, "data.xlsx"); 
/*
      // Convert JSON to worksheet
  const worksheet = XLSX.utils.json_to_sheet(res.data);

  // Create workbook
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "salessheet");

  // Generate Excel file buffer
  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array"
  });

  // Save file
  const fileData = new Blob([excelBuffer], {
    type: "application/octet-stream"
  });

  saveAs(fileData, "salesdata.xlsx");

  */
      }).catch((err)=>{
          if(err.response){
            console.log(err.response.data)
           }
      })
  }
  return (
    <>
    <h1 className='text-center bg-info mt-5 mb-5'>Shopping Cart - Created By K.Gowthaman M.C.A.,<button onClick={logoutfun}>➜]</button><button onClick={exportdata}>Export Excel</button></h1>

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
