import {} from 'react'
import WordOfDay from './Components/WordOfDay'
import Bubbles from './Components/Bubbles'
import Today from './Components/TodayILearned'
import TimeWeather from './Components/TimeWeather'
import './App.css'
import Dictionary from './Components/DictionaryApi'

function App() {

  return (
<section>
<div className='container' >
<div className='time sq'> <TimeWeather /></div>
<div className='lgcard sq'> <WordOfDay/>
<div className='sq inner-card'>
  <div className="card3"><Dictionary/></div>

<div className='card2'><Today/></div>


</div>
</div>
<div className='card1 sq'>
 <Bubbles /></div>

</div>

</section>
  )
}

export default App
