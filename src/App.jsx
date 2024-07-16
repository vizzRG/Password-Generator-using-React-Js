import { useState,useCallback } from 'react'
import './App.css'

function App() {
const [password, setPassword] = useState("")
const[Length, setLength] = useState(8) 
const[numberAllowed, setnumberAllowed] = useState(false)
const[characterAllowed, setcharacterAllowed] = useState(false)

const passwordGenerator = useCallback(() =>{
  let pass=""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed=== True) str+="1234567890"
  if(characterAllowed=== True) str+="@#$%&*"

  for (let i = 0; i <= Length; i++) {
    let char= Math.floor(1+Math.random()*str.length)
    pass += str.charAt(char)
    
  }

  setPassword(pass)

},[password,Length,num,char])

  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center text-orange-400">
        <div className='w-[40vw] h-max bg-gray-700 fixed top-8 rounded-lg border border-orange-300 flex flex-wrap gap-1 '>
          <input type="text"  readOnly className='h-10 w-3/4 my-3 mx-4 rounded-lg text-orange-300'/>{passwordGenerator}
          <button className='bg-blue-600 text-white h-10 my-3 px-3 py-4  rounded-md flex items-center'> Copy</button>
          <div id="check" className='flex w-full justify-around items-center'>

          <input type="range" className='my-2 mx-2'/>Length()
          <input type="checkbox" name="num" id="num" />Number
          <input type="checkbox" name="spec" id="spec" />Special
          </div>
        </div>
      </div>

    </>
  )
}

export default App
