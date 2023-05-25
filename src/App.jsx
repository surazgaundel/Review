import { useEffect, useState } from 'react'
import data from './data';
import {BiChevronLeft} from 'react-icons/Bi';
import './App.css'
import Review from './Component/Review'

function App() {
  const [index,setIndex]=useState(0)
  // const [user,setUser]=useState(data[index]);

  const checkNumber=(num)=>{
    if(num>data.length-1){
      return 0;
    }
    if(num<0){
      return data.length-1;
    }
    return num
  }
  const randomReview=()=>{
    let randomNumber=Math.floor(Math.random()*data.length)
    if(randomNumber===index){
      randomNumber+=index;
    }
    setIndex(checkNumber(randomNumber));
  }
  const leftReview=()=>{
    setIndex(prev=>checkNumber(prev-1));
  }

  const rightReview=()=>{
    setIndex(prev=>checkNumber(prev+1));
  }
  return (
    <div className="flex flex-col items-center justify-center rounded-xl p-3 border-black hover:shadow-lg">
    <Review user={data[index]} leftReview={leftReview} rightReview={rightReview} randomReview={randomReview}/>
    <div>
        <button className='text-primary text-xl mx-2' onClick={leftReview}><BiChevronLeft/></button>
        <button className='rotate-180 text-xl text-primary mx-2' onClick={rightReview}><BiChevronLeft/></button>
        <button className=' border-2 border-primary shadow-lg rounded-md px-2 py-1  hover:bg-primary' onClick={randomReview}>Random Review</button>
    </div>
    </div>
  )
}

export default App
