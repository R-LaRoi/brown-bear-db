import React from 'react'
import { useState } from 'react';
import cat from "./assets/cat.png"

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
      <i className="fa-solid fa-book-open-reader"></i>
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


<img src={cat} width="200px" />
    </div>
  )
}


