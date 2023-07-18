"use client"
import React from 'react'
import { useParams } from 'next/navigation'
 
function Page() {
    const params=useParams()
    console.log(params);
    
  return (
    <div>{params.id} </div>
  )
}

export default Page