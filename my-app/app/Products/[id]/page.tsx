"use client"
import React from 'react'
import { useRouter,useParams  } from 'next/navigation'

function Page() {
    const pathName=useParams ()
    console.log(pathName);
    
  return (
    <div>Page</div>
  )
}

export default Page