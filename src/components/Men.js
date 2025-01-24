import React, { useState } from 'react'
import Accordian from './Accordian'

function Men() {
  // Lifting State Up
  const [open, setOpen] = useState(0);
  return (
    <div className='max-w-6xl mx-auto mt-10'>
      <h1 className='font-bold text-xl mb-5 '>Fiter Options</h1>
      {
        ["Brand", "Mens", "Gender", "Kids"].map((title, index) => (
          // This is contolled component
          <Accordian key={index} title={title} open={index===open?true:false}
          setOpen={()=> setOpen(index)}
          />
        

        
        ))
      }
    </div>
  )
}

export default Men