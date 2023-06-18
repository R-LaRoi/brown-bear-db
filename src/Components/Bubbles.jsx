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
 <div>
Do something new!
    <div>
      {idea}  </div>
<button onClick={getIdea}>New Ideas</button>
<img src={cat} alt="" width="200px" />
</div>
  
  )
}