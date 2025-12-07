import { toast } from "react-toastify";
import heart from "../assets/heart.png";
import { useState } from "react";
import Swal from "sweetalert2";

function Card({ info , title , imgSrc }){
    
    const[Liked , setLike] = useState(false);
 

    function LikeHandler(){
       
        setLike(!Liked);
         if(Liked == true){
            toast.error("Kyu Unlike Kiya be");
          
}
        else{

    toast.success("Thank you for Liking :)");
    }
}

    return(
        <div className="flex flex-col justify-evenly items-center w-[320px] bg-gray-800  rounded-md">
            <img   className="object-fit rounded-t-md" src={imgSrc} />
           
            <img onClick={LikeHandler} className={`object-cover w-10 relative z-10 left-34 bottom-5 hover:scale-105  cursor-pointer ${Liked===true?"opacity-100 brightness-100":"opacity-70 brightness-200" }`} src={heart} />
          
            <div className="px-3 pb-3 h-[150px] mt-3">
            <h1 className="text-white font-bold text-lg">{title}</h1>
            <h2 className="text-white text-md ">{info}</h2>
            </div>
        </div>
    )
}

export default Card;