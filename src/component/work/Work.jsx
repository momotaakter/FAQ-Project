import React, { useState } from 'react'
import './Work.css'


function Work() {
  const [text,setText]=useState(true);
   
const heading=()=>{
  setText(!text)
}


const mydiv={
  display:text?'':'none'
}

//2 number FAQ

const [text2,setText2]=useState(true);
   
const heading2=()=>{
  setText2(!text2)
}


const mydiv2={
  display:text2?'':'none'
}


//

const [text3,setText3]=useState(true);
   
const heading3=()=>{
  setText3(!text3)
}


const mydiv3={
  display:text3?'':'none'
}


//
const [text4,setText4]=useState(true);
   
const heading4=()=>{
  setText4(!text4)
}


const mydiv4={
  display:text4?'':'none'
}

//

const [text5,setText5]=useState(true);
   
const heading5=()=>{
  setText5(!text5)
}


const mydiv5={
  display:text5?'':'none'
}




  return (
    <div className='container'>
    
  <h1 onClick={heading}>what s your name?</h1>
  <div style={mydiv}>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur, nisi perspiciatis quisquam assumenda dolor possimus atque placeat dignissimos excepturi repellendus commodi corrupti explicabo quis consequuntur vel fuga ea id deleniti quae praesentium? Sunt nemo suscipit et velit, officia adipisci maiores culpa consequatur?</p>
  </div>

  

  <h1 onClick={heading2}>what s your name?</h1>
  <div style={mydiv2}>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur, nisi perspiciatis quisquam assumenda dolor possimus atque placeat dignissimos excepturi repellendus commodi corrupti explicabo quis consequuntur vel fuga ea id deleniti quae praesentium? Sunt nemo suscipit et velit, officia adipisci maiores culpa consequatur?</p>
  </div>

  


  <h1 onClick={heading3}>what s your name?</h1>
  <div style={mydiv3}>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur, nisi perspiciatis quisquam assumenda dolor possimus atque placeat dignissimos excepturi repellendus commodi corrupti explicabo quis consequuntur vel fuga ea id deleniti quae praesentium? Sunt nemo suscipit et velit, officia adipisci maiores culpa consequatur?</p>
  </div>

  

  <h1 onClick={heading4}>what s your name?</h1>
  <div style={mydiv4}>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur, nisi perspiciatis quisquam assumenda dolor possimus atque placeat dignissimos excepturi repellendus commodi corrupti explicabo quis consequuntur vel fuga ea id deleniti quae praesentium? Sunt nemo suscipit et velit, officia adipisci maiores culpa consequatur?</p>
  </div>

  



  <h1 onClick={heading5}>what s your name?</h1>
  <div style={mydiv5}>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur, nisi perspiciatis quisquam assumenda dolor possimus atque placeat dignissimos excepturi repellendus commodi corrupti explicabo quis consequuntur vel fuga ea id deleniti quae praesentium? Sunt nemo suscipit et velit, officia adipisci maiores culpa consequatur?</p>
  </div>

  



  









    </div>
  )
}

export default Work
