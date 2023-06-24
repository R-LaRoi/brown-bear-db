import React, {useState} from 'react'
import cat from "./assets/cat.png"

export default function Bubbles() {
let [idea, setIdea] = useState('')

function getIdea() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
setIdea(data.activity)
    });

}


  return (
 <div className='bubbles'>

  <div>
<i className="fa-solid fa-wand-sparkles"></i>
    </div>
    <div className='idea'>
      {idea}</div>
    <button onClick={getIdea}>      Do something new!

    </button>

</div>
  
  )
}