import {} from 'react'
import WordOfDay from './Components/WordOfDay'
import Bubbles from './Components/Bubbles'
import Today from './Components/TodayILearned'
import TimeWeather from './Components/TimeWeather'
import './App.css'

function App() {

  return (
<section>
<div className='container' >
<div className='time sq'> <TimeWeather /></div>
<div className='lgcard sq'> <WordOfDay/></div>
<div className='card1 sq'>
 <Bubbles /></div>
 <div className='card2 sq'>
 <Today /></div>
</div>

</section>
  )
}

export default App
