import React, {useState} from 'react'

export default function HookSwitcher() {
  const [color, setColor] = useState('white');
  const [fontSize, setFontSize] = useState(14)

  return (
    <div style={{padding: '10px', backgroundColor: color, fontSize: `${fontSize}px`}}>
      <h1>Check this size.</h1>
      <button 
            onClick={()=> setColor('white')}>
              White
            </button>
      <button  
            onClick={()=> setColor('black')}>
              Dark
            </button>
      <button  
            onClick={()=> setFontSize((s)=>s+2)}>
              +
            </button>
    </div>
  )
}
