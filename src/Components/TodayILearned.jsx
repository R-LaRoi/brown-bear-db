import React from 'react'
import { useState } from 'react';
import horse from "./assets/horse.png"

export default function Today() {
let [title, setTitle] = useState()
let [addToList, setAddtoList] = useState()
let [booksArray, setBooksArray] = useState([])


function addTitleToList(event) {
setAddtoList(title)
event.preventDefault();
setBooksArray(prevList => [...prevList, (addToList)])
console.log(booksArray)


  }

   function getTitle(event) {
    setTitle(event.target.value);

  }




  return (
    <div>
      <div>My Reading List</div>
<ul>
{booksArray.map((books)=>{
    return (
      <li>{books}</li>
     )
  })
}
  <li>brown bear</li>
</ul>


<form onSubmit={addTitleToList}>
<input type="text"  onChange={getTitle}/>
<input type="submit"/>
</form>


<img src={horse} width="200px" />
    </div>
  )
}


