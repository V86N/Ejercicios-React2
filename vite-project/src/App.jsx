
import './App.css'
import Counter from './components/Counter/Counter'

function App() {
  

  return (
    //Decirle al contador desde qué número empezar
      <div>
      <Counter initialValue = {5} /> 
      <Counter initialValue = {0} />
      </div>
      
  )
}


export default App
