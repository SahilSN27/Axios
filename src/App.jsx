import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Axios Crud/Home'
import Read from './Axios Crud/Read'
import Create from './Axios Crud/Create'
import Update from './Axios Crud/Update'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App