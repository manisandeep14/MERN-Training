import {Link, Route, Routes} from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import About from './about'

let navigation = () => {
  return(
    <div>
      <Link to={'/home'}> <button >Home</button> </Link>
      <Link to={'/about'}> <button >About</button> </Link>
      <Link to={'/contact'}> <button >Contact</button> </Link>
      
    
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
    
  )
}
export default navigation