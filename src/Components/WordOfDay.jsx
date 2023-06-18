import React, {useState}from 'react'
import { useEffect } from 'react'
import Dictionary from './DictionaryApi'
import bear from "./assets/bear.png"

import "./styles/word.css"

export default function WordOfDay() {

let [word, setWord] = useState()
let [definition, setDefinition] = useState()
 


 fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=44793c76-dae0-4101-a109-1642ae60ecea`)
    .then((response) => response.json())
        .then((define) => {
         setDefinition(define[0].shortdef[0])

    })






useEffect(() => {
   fetch('https://random-word-api.herokuapp.com/word?number=1')
   .then((response) => response.json())
        .then((data) => {
console.log(data)
          setWord(data)
    });

}, [])

         


  return (

    <>
<div className='card-2'>

 <div className='col-1'>
    <div>word of the day</div>
  <div className='word'>{word}</div>
  <div className='word-def'>definition: {definition}</div>


</div>

   {/* <div className='col-2'> 
     <Dictionary />
</div> */}
</div>

  <img src={bear} className="bear" alt="illustration brown bear" />
 

</>
  )
}
