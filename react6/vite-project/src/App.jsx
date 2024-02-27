
import './App.css'
import Header from './components/Header/Header'
import Start from './pages/Start/Start'
import Footer from './components/Footer/Footer'
import CatalogPage from './pages/Catalog/Catalog'
import CardPage from './components/OneCard/CardPage'
import {Routes, Route} from 'react-router-dom'

function App() {

  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" element= {<Start/>}  />
        <Route path="/catalog" element= {<CatalogPage/>}  />
        <Route path="/catalog/:id" element= {<CardPage/>}  />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
