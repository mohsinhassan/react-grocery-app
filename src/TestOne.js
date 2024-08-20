import React from 'react'

const TestOne = ({color , setColor}) => {

  return (
    <div>
        <div style={{background: color , height: '100vh', width : '100vw'}}>
        
        </div>
        <input type="text" placeholder="Enter color name" onChange={(e) => setColor(e.target.value)}/>
    </div>
    
  )
}

export default TestOne
   

