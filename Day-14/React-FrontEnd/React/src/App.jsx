import Greet from './Greet'
import './App.css'
import { useState } from 'react'



let App = () => {
let [page, pageToggle] = useState("")
  
  return(
    // <div>
    //   {/* <Greet name = "Deva Sir" num = " 3" />
    //   <h1>Hello World!!!</h1> */}
    //   <h1 className='heading'> Build React </h1>
    //   <button>Click Here to Start</button>
    //   <h4>What you will Learn</h4>
    //   <ul className='lists'>
    //     <li>📦 JSX - HTML in JS</li>
    //     <li>🧩 Components - Reusable UI blocks</li>
    //     <li>📥 Props - Passing data to components</li>
    //     <li>🧠 State - 	Managing component data </li>
    //     <li>🔁 Events - onClick, onChange handlers</li>
    //     <li>🌳 Conditional Rendering - if/else, ? : in JSX</li>
    //     <li>🔄 Lists - Rendering multiple items</li>
    //   </ul>
    //   <div className='card-container'>
    //     <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTsC5uAlDfQIlTVfofTN6iypGqsLY-OYNuycV9rBgPbZovQHc0lrGCJyN9Ckf0JjAZoBaJdlsNiq7oEWhFpp8tOVSd1iBN-_DTH73W5e7tA" alt=""  className='image'/>
    //     <button>move to movie</button>
    //   </div>
      <div className='container'>
        <button id='btn' onClick={() => pageToggle('Home')}>Home</button>
        <button id='btn' onClick={() => pageToggle('About')}>About</button>
        <button id='btn' onClick={() =>pageToggle('Contact')}>Contact</button>
        <h1>{page}</h1>
      </div>

    // </div>


      
  )
}



export default App