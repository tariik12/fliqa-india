import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const GrowOurCareer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    return (
        <div className="text-white" style={{backgroundImage: `url("https://i.ibb.co/0h77JgF/image-110.png")`}} data-aos="zoom-in">
           <div className="flex justify-between pt-24 ps-20 pe-36">
           <h1 className="text-4xl font-bold istokWeb">Grow your freelancing <br />
career with Fliqa Associate</h1>
        <div className="   text-center h-9 bg-white  w-2/12  text-[#00485e] text-2xl istokWeb">Join now</div>
           </div>
           <p className="ps-24 pb-14 py-10 istokWeb font-thin">
Register yourself <br /> 
Verification & Quality Check <br />
Verified Associate at FliqaIndia
</p>
        </div>
    );
};

export default GrowOurCareer;