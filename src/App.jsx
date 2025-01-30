import { useEffect, useState } from 'react'
import Input from './Components/Input' 


function App() {

  const[currencies, setCurrencies] = useState([])
    const[fromCurrency, setFromCurrency] = useState('1inch')
    const[toCurrency, setToCurrency] = useState('1inch')
    const[fromValue, setFromValue] = useState(0)
    const[toValue, setToValue] = useState(0)


    useEffect(()=>{
      fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
      .then((response)=>response.json())
      .then((data)=>{
        setCurrencies(data)
      })
    
    }, [])

    function calculateResult(){
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
        .then((response)=>response.json())
        .then((data)=>{
          
          setToValue(fromValue * data[fromCurrency][toCurrency])
        })
    }
    
 
 
  return (
    <>
    <div className='bg-[url(https://cdn.pixabay.com/photo/2016/02/11/23/28/ballots-1195036_1280.jpg)] h-screen w-screen bg-cover flex justify-center flex-col items-center text-green-500'>  
   
         <div className='w-96 h-40  bg-cover font-medium bg-sky-400 flex flex-col  rounded-2xl justify-around p-4'>

            <div className='flex justify-between'>

            <label className='text-white'>From</label>
           
           <select className='bg-black  w-28' onChange={(e)=>setFromCurrency(e.target.value)}>
           
           {Object.entries(currencies).map(([code , name])=> 
              <option key={code} value={code}>
                {name}
              </option>)}

           </select>

            </div>

           <input placeholder='enter the Currency amount' type='tel' className='bg-white w-68 h-10 border-b-black rounded-s'  value={fromValue} onChange={(e)=>setFromValue(e.target.value)}></input>


           <button className='text-black bg-red-500 w-28 h-10 rounded-2xl font-semibold cursor-pointer'  onClick={calculateResult}>Calulate</button>
           
         </div>

         <h1 className='text-red-500 font-bold'>TO</h1> 

    <div className='w-96 h-40  bg-cover font-medium bg-sky-400 flex flex-col  rounded-2xl justify-around p-4'>

          <div className='flex justify-between'>

          <label className='text-white'>From</label>

          <select className='bg-black  w-28'  onChange={(e)=>setToCurrency(e.target.value)}>
             {Object.entries(currencies).map(([code , name])=> 
              <option key={code} value={code}>
                {name}
              </option>)}
             

           </select>

           </div>

      <input placeholder='' type='tel' className='bg-white w-68 h-10 border-b-black rounded-s-md' value={toValue} disabled></input>

      </div>

    </div>
    </>
  )
}

export default App
