"use client"
import React from 'react'
interface Props{
    el: item
  }
  import { useRouter,usePathname } from 'next/navigation'
function SingleItemDisplay(props: Props) {
  const router=useRouter()
  return (
    <div className=''  onClick={()=>{
      router.push(`/Products/${props.el.id}`)
    }}>

      <h1 >{props.el.title}</h1>
      <img src={props.el.images[0]} alt="" srcset="" />

    </div>
  )
}

export default SingleItemDisplay