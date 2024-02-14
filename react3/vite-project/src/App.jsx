
import './App.css'
import Header from './components/Header/Header'
import Start from './components/Start/Start'
import Footer from './components/Footer/Footer'
import Catalog from './components/Catalog/Catalog'
import {Routes, Route} from 'react-router-dom'

function App() {

  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" element= {<Start/>}  />
        <Route path="/catalog" element= {<Catalog/>}  />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
