import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const OurAwards = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    return (
        <div className="bg-[#DDF8F3] grid md:grid-cols-2 grid-cols-1 p-11 mt-14 mb-7 gap-12 items-center">
           <div className="border grid grid-cols-1 md:grid-cols-2  p-11 gap-6 rounded-lg " style={{backgroundColor:"rgba(78, 153, 164, 1),rgba(0, 0, 0, 0.25)"}}>
            <img className="md:mb-2 mx-auto" src="https://i.ibb.co/C9q3GQH/Rectangle-208.png" alt="" data-aos="zoom-in-up"/>
            <img className="mx-auto " src="https://i.ibb.co/G7LwyPV/Rectangle-209.png" alt="" data-aos="zoom-in-down" />
           </div>
           <div className="grid md:grid-cols-2 grid-cols-1 gap-3 ">
            <div className="w-2/3 mx-auto">
            <div className=" bg-base-100 mb-4 h-14 rounded-lg    grid grid-cols-2  items-center" style={{ boxShadow: '2px 2px 4px  1px #060a099f ' }} data-aos="flip-left" >
                
                <img className="h-14 ms-2 rounded-xl" src="https://i.ibb.co/VDRvxNB/image-149.png" alt="" />
                 <p className="text-right me-3 inner">49.5 %</p>
             </div>
             <div className=" bg-base-100 mb-4 h-14 rounded-lg   grid grid-cols-2  items-center" style={{ boxShadow: '2px 2px 4px  1px #060a099f ' }} data-aos="flip-left">
                
                   <img className="h-14 ms-2 rounded-xl" src="https://i.ibb.co/V3V6C0x/image-152.png" alt="" />
                    <p className="text-right me-3 inner">49.5 %</p>
                </div>
                <div className="bg-base-100 mb-4 h-14 rounded-lg   grid grid-cols-2  items-center" style={{ boxShadow: '2px 2px 4px  1px #060a099f ' }} data-aos="flip-left">
                
                <img className="h-14 ms-2 rounded-xl" src="https://i.ibb.co/qC2ZXrN/image-151.png" alt="" />
                 <p className="text-right me-3 inner">49.5 %</p>
             </div>
            
            </div>
            <div className="w-2/3 mx-auto">
            <div className=" bg-base-100 mb-4 h-14 rounded-lg    grid grid-cols-2  items-center" style={{ boxShadow: '2px 2px 4px  1px #060a099f ' }}data-aos="flip-right">
                
                <img className="h-14 ms-2 rounded-xl" src="https://i.ibb.co/CQ7YrpH/image-removebg-preview-2022-07-23-T185243-1.png" alt="" />
                 <p className="text-right me-3 inner">49.5 %</p>
             </div>
            <div className=" bg-base-100  mb-4 h-14 rounded-lg   grid grid-cols-2  items-center" style={{ boxShadow: '2px 2px 4px  1px #060a099f ' }} data-aos="flip-right">
                
                   <img className="h-14 ms-2 rounded-xl" src="https://i.ibb.co/SwW9X4P/image-removebg-preview-2022-07-23-T185023-1.png" alt="" />
                    <p className="text-right me-3 inner">49.5 %</p>
                </div>
            
                <div className=" bg-base-100  h-14 rounded-lg  grid grid-cols-2  items-center" style={{ boxShadow: '2px 2px 4px  1px #060a099f ' }} data-aos="flip-right">
                  <img  className="h-14 ms-2 rounded-xl" src="https://i.ibb.co/dBC00jC/image-154.png" alt="" />
                    <p className="text-right me-3 inner">49.5 %</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default OurAwards;