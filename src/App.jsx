
import './App.css'
import FetchData from './components/FetchData'
import LocalStorageData from './components/LocalStorageData'

function App() {
 
  return (
    <div className="App" style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
      <div className='usefetch'>
      <FetchData/>
      </div>
      <div className='useLocalStorage'>
      <LocalStorageData/>
      </div>
    </div>
  )
}

export default App
