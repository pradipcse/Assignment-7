import './App.css'
import Banner from './Component/Banner/Banner'
import Header from './Component/Header/Header'
import Recipes from './Component/Recipe/Recipes'

function App() {
  
  return (
    <div className='w-full'>
     <Header></Header>
     <Banner></Banner>
     <Recipes></Recipes>
    </div>
  )
}

export default App
