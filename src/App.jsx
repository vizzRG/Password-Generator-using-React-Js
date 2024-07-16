import { useState,useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
const [password, setPassword] = useState("")
const[Length, setLength] = useState(8) 
const[numberAllowed, setnumberAllowed] = useState(false)
const[characterAllowed, setcharacterAllowed] = useState(false)

const passwordRefrence = useRef(null)

const passwordGenerator = useCallback(() =>{
  let pass=""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+="1234567890"
  if(characterAllowed) str+="@#$%&*"

  for (let i = 1; i <= Length; i++) {
    let char= Math.ceil(1+Math.random()*str.length)
    pass += str.charAt(char)
    
  }
  setPassword(pass)

},[setPassword,Length,numberAllowed,characterAllowed])

const copyToClipBoard = useCallback(()=> {
    passwordRefrence.current.select()
    console.log(passwordRefrence)
    window.navigator.clipboard.writeText(password)
},[password])

useEffect(() => {
  passwordGenerator();
  
}, [Length,numberAllowed,passwordGenerator,characterAllowed])



  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center text-orange-400">
        <div className='w-[40vw] h-max bg-gray-700 fixed top-8 rounded-lg border border-orange-300 flex flex-wrap gap-1 '>
          <input type="text" value={password} placeholder='password'readOnly className='outline-none h-10 w-3/4 my-3 mx-4 rounded-lg' ref={passwordRefrence}/>
          <button className='bg-blue-600 text-white h-10 my-3 px-3 py-4  rounded-md flex items-center cursor-pointer' onClick={copyToClipBoard}> Copy</button>
          <div id="check" className='flex w-full '>
          <div id="check1 " className='flex flex-wrap items-center gap-x-5'>

          <input type="range" value={Length} min={8} max={20} className='my-2 mx-2' onChange={(e)=> setLength(e.target.value)}/><label>Length({Length})</label>
          <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{setnumberAllowed((prev) => !prev)}} />Number
          <input type="checkbox" defaultChecked={characterAllowed} onChange={()=>{setcharacterAllowed((prev) => !prev)}} />Special
          </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
