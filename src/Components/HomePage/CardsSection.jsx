

import Card from './Card'

import { GrNext } from "react-icons/gr";

function CardsSection() {

  let imgArr=["/Images/javaImage.jpg","/Images/SQLImage.webp","/Images/SeleniumImage.avif"];
  let cardnames=['Java','SQL','Selenium'];

  return (
   <div className='font-[Aptos Narrow] w-screen bg-[#003d66] pb-10 '>
    <div className='flex justify-center bg-[#0075c2] py-3 mb-5'><h1>Assessments</h1></div>
     <div className=' flex place-items-center justify-around px-20'>
      <div className=' flex justify-around gap-6'>
      {imgArr.map((el,i)=>(<div className='' key={i}>
        <Card bgImage={el} name={cardnames[i]}></Card>
        </div>))}

    </div>
    <div className='text-xl h-96 bg-[rgb(360,360,360,0.3)] rounded-lg hover:bg-[rgb(360,360,360,0.6)] duration-500 flex place-items-center'>
      <GrNext className='size-16'></GrNext>
    </div>
    {/* <button className="font-semibold btn-view text-white flex place-items-center gap-3">View All Assessments<FaArrowRight className=' size-10'></FaArrowRight></button> */}
    </div>
   </div>
)
}


export default CardsSection
