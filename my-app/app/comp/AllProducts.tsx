"use client"
import React from 'react'
import SingleItemDisplay from './SingleItemDisplay'
interface Props{
  data:typeof items
}
function AllProducts(props:Props) {
  console.log(props);
  
  return (
    <div>{props.data.map((el:item,i)=>{
      return (
        <SingleItemDisplay key={i} el={el} />
      )
    })}</div>
  )
}

export default AllProducts