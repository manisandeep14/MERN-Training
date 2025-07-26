import { useState} from "react";


let App = () => {
  const [count, setCount] = useState(0)
  let countInc = () => {
     setCount(count+1)
  }
  let countdec = () => {
     setCount(count-1)
  }
  // let countstep = () => {
  //    setCount(count+5)
  // }
  return(
    <div>
      <button onClick= {countInc} >Inc</button>
      <button onClick= {countdec} >Dec</button>
      <button onClick= {() => {
        for(let i = 0; i < 5; i+=1){
          setCount(count => count+=1)
        }
      }} >Step</button>
      <h1>{count}</h1>
    </div>
  )
}

export default App