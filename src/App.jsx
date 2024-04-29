
import './App.css'
import Lane from './Lane'

function App() {

  return (
    <div className='bg-slate-600 h-screen flex gap-x-4 px-4 py-3'>
    <Lane title={"Backlog"}/>
    <Lane title={"In Progress"}/>
    <Lane title={"Complete"}/>
    </div>
  )
}

export default App
