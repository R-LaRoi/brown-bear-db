import React, { useState  } from "react"
import horse from './assets/horse.png'


export default function Dictionary(){
    
  const [keyword, setKeyword] = useState("universe");
  const [info, setInfo] = useState('');
  const [showDictionary, setShowDictionary]= useState(false)

  
  function defineWord(data) {
    setInfo(data);
    console.log(info.definition)

  }

  function search() {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
    .then(response => response.json())
    .then(data =>  defineWord(data[0].meanings[0].definitions[0]))

  }

   function getWord(event) {
    event.preventDefault();
    search();
  }

   function searchWord(event) {
    setKeyword(event.target.value);

  }

  function clickIcon(){
    setShowDictionary(!showDictionary)
    console.log('clicked')
setInfo('')



  }


if(info) { return(

  <section>
     <div><i className="fa-solid fa-magnifying-glass" onClick={clickIcon}></i></div>
       <div>DICTIONARY</div> 

      <form onSubmit={getWord} id='dictionary'>
      <input
        className="input"
        
        type="text"
        placeholder="define word here"
 
        onChange={searchWord}>
      </input>
      <div className="word">{keyword}</div>
<div className="data">{info.definition}</div>
      </form>

</section>

)} else {

return(


  <section className="definition-card" id='dictionary'>
   

 <> 
       <i className="fa-solid fa-magnifying-glass" onClick={clickIcon}></i><div>DICTIONARY</div>
  
  <form onSubmit={getWord}>
        <div>What word are you looking for?
           
        </div>
      <input
        className="input"
        type=""
        placeholder="find word"
        onChange={searchWord}>
      </input>
      </form> 
</>
  <img src={horse} alt="" width="250px" />
</section>

)

}


   
}