import { useState } from 'react'
import data from './Data'
import './App.css'
import Courses from './Components/Courses'
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css";


import Typewriter from "typewriter-effect";

function App() {

const [active , setActive] = useState(0);    
const [DATA , setData] = useState(data);


function AllHandler(){
   const newData = data;
setData(newData); 
setActive(0);
 
}

function devHandler(){
const newData = data.filter(d=>d.type === "Development");
setData(newData);
setActive(1);
 
}
function businessHandler(){
const newData = data.filter(d=>d.type === "Business");
setData(newData);
setActive(2);
 
}
function designHandler(){
const newData = data.filter(d=>d.type === "Design");
setData(newData);
setActive(3);
 
}
function lifestyleHandler(){
const newData = data.filter(d=>d.type === "Lifestyle");
setData(newData);
 
}


 return(
    <div className='bg-gray-500 h-full min-h-screen' >
      <div className='w-full mx-auto bg-gray-900 py-5 text-center text-4xl text-white font-bold'>
       <Typewriter
          options={{
            strings: [
              "Web Developer ?",
              "UI/UX Designer ?",
              "Lifestyle ?",
              "Just Choose the Course"
            ],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 100,
          }}
        />
        </div>
        <div className='pb-3'>
            <div className=' w-1/3 max-[700px]:w-3/4 max-[700px]:gap-y-2 flex flex-row flex-wrap justify-evenly items-center mx-auto space-x-3 my-5'>
                <button onClick={AllHandler} className={`bg-gray-700 px-2 py-1 text-white text-lg font-bold rounded-md hover:bg-gray-950 cursor-pointer ${active===0?"border-2 border-white bg-gray-950" : "border-0 bg-gray-700"} `}>All</button>
                <button onClick={devHandler} className={`bg-gray-700 px-2 py-1 text-white text-lg font-bold rounded-md hover:bg-gray-950 cursor-pointer ${active===1?"border-2 border-white bg-gray-950" : "border-0 bg-gray-700"} `}>Development</button>
                <button onClick={businessHandler} className={`bg-gray-700 px-2 py-1 text-white text-lg font-bold rounded-md hover:bg-gray-950 cursor-pointer ${active===2?"border-2 border-white bg-gray-950" : "border-0 bg-gray-700"} `}>Business</button>
                <button onClick={designHandler} className={`bg-gray-700 px-2 py-1 text-white text-lg font-bold rounded-md hover:bg-gray-950 cursor-pointer ${active===3?"border-2 border-white bg-gray-950" : "border-0 bg-gray-700"} `}>Design</button>
                <button onClick={lifestyleHandler} className={`bg-gray-700 px-2 py-1 text-white text-lg font-bold rounded-md hover:bg-gray-950 cursor-pointer ${active===4?"border-2 border-white bg-gray-950" : "border-0 bg-gray-700"} `}>LifeStyle</button>
            </div>
        (<Courses data = {DATA} ></Courses>) 
        </div>
        <ToastContainer></ToastContainer>
        </div>
 )
     
}

export default App
