
import './App.css'
import Counter from './components/Counter/Counter'

function App() {
  

  return (
    //Decirle al contador desde qué número empezar
      <div>
      <Counter initialValue = {5} step={4}/> 
      <Counter initialValue = {0} step={2}/>
      </div>
      
  )
}


export default App
