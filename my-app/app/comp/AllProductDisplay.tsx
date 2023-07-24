import React from 'react'

function AllProductDisplay<data>({data}: data) {
    console.log("from allP",data);
    
  return (
    <div>
        {data.map((item:item,i:number)=>{
            console.log(i);
            
            return (
                <div key={i}>
                  
                    <h1> {item.itemsName}</h1>
                </div>
            )
        })}

    </div>
  )
}

export default AllProductDisplay