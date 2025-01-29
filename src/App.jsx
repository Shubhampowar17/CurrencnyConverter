import { useEffect, useState } from 'react'
import Input from './Components/Input' 


function App() {

  const[currencies, setCurrencies]=useState([])

  useEffect(()=>{
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
    .then((response)=>response.json())
    .then((data)=>
    {
      console.log(data)
      setCurrencies(data)
    })
  
  },[])

 
 
  return (
    <>
    <div className='bg-[url(https://cdn.pixabay.com/photo/2016/02/11/23/28/ballots-1195036_1280.jpg)] h-screen w-screen bg-cover flex justify-center items-center text-green-500'>  
   
         <div className='w-96 h-32 bg-sky-200 flex p-4 '>
           
           <select className='bg-white'>
           
           {Object.entries(currencies).map(([code , name])=> 
              <option key={code} value={code}>
                {name}
              </option>)}

           </select>

           {/* <h1>{count}</h1>
           <button onClick={()=>setCount(count+1)}>Increment</button> */}

         </div>

         <h1 className='text-red-500 font-bold'>TO</h1>
         
         <div className='w-96 h-32 bg-sky-200 flex p-4'>
           
           <select className='bg-white'>
           
           {Object.entries(currencies).map(([code , name])=> 
              <option key={code} value={code}>
                {name}
              </option>)}

           </select>

            
         </div> 

    </div>
     
     
     
    </>
  )
}

export default App
