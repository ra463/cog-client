import { LuSquareArrowOutUpRight } from "react-icons/lu";
import "./All.css"

function Card({bgImage, name}) {
  return (
      <div className="cards hover:scale-110 duration-500 h-96 w-80 bg-center m-5 rounded-2xl overflow-hidden hover:shadow-3xl backdrop-blur-2xl cursor-pointer" style={{ backgroundImage: `url(${bgImage})`,boxShadow:"5px 7px 20px rgb(0,0,0,0.5)" }}>
     <div className="h-full hover:bg-[rgba(0,0,0,0.3)] duration-300">
       <div className="text-2xl font-semibold flex  flex-col justify-between h-full place-items-center ">
        <div className="card-content text-3xl text-[white] bg-[#0074c2c0] w-full flex justify-center p-4"><p>{name}</p></div>
        <div className="card-content2 text-3xl text-[white] bg-[#0074c2c0] w-full justify-center p-4 flex flex-row gap-2 place-items-center"><p className="pb-1">View </p><LuSquareArrowOutUpRight></LuSquareArrowOutUpRight></div>      </div>
     </div>
    
    </div>
    
  )
}

export default Card
