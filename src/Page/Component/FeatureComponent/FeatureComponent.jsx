import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const FeatureComponent = ({image,title,text_bold,text}) => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    return (
        <div className='  text-center p-1  mb-1 mx-5 md:h-96'style={{boxShadow:'2px 2px 4px  1px #060a099f '}} data-aos="zoom-in" >
        <img className="w-full " src={image} alt="" />
       <div className="md:h-24  mb-2 " >
       <h2 className="font-bold inner">{title}</h2>
       <div className="bg-[#000000]   h-[2px]"><hr /></div>
        <p className="inner"><span className="font-bold ">{text_bold}</span> {text}</p>
       </div>
       <div className="mx-10">
       <button className="btn btn-sm w-full  border-none inner text-white"  style={{ background:`linear-gradient(to bottom, rgba(1, 123, 150, 1),rgba(30, 64, 71, 1)` }}>Know More</button>
       </div>
    </div>
    );
};

export default FeatureComponent;