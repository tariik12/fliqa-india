import HeaderComponent from "../../Component/HeaderComponent/HeaderComponent";

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
const OurBlogs = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
    return (
        <div className="bg-[#DDF8F3] " data-aos="zoom-in-up">
            <div className="pt-6 pb-8  ms-9">
            <HeaderComponent title={'Our Blogs'} des={"Check out our Latest Blog"}></HeaderComponent>

            </div>
            <div className="grid grid-col-1 md:grid-cols-3 pb-10 md:ps-12 items-center">
               <div className="relative " data-aos="flip-left">
               <div  className="w-[300px] h-[220px] rounded-xl p-9 bg-[#0505059d] absolute text-white ms-1">
                <p className="font-bold k2d">Featured on: Sep 15, 2021</p>
                <h2 className="text-4xl font-thin k2d">Wedding Photography at Goa</h2>
               </div>
               <img className="h-[230px] w-full"  src="https://i.ibb.co/9rZmMjS/Fliqa-India-wedding.png" alt="" />
               </div>  
                <div className="relative" data-aos="flip-right">
                <div  className="w-[300px] h-[220px] rounded-xl p-9 bg-[#0505059d] absolute text-white ms-1">
                <p className="font-bold k2d ">Featured on: Sep 15, 2021</p>
                <h2 className="text-4xl font-thin shadow-black k2d">Photography: Expectations vs. Reality</h2>
               </div>
                    <img className="h-[230px] w-full" src="https://i.ibb.co/QXvX4L4/Wedding-Trailer.png" alt="" />
                </div>
                  <div className="py-2 px-2" data-aos="flip-left">
                    <div className="flex px-4 justify-between">
                        <p className="k2d">Trending Now</p>
                        <p className="k2d">View All</p>
                    </div>
                    <div className="flex">
                    <img className="h-16" src=" https://i.ibb.co/ZNJk2k3/Fliqa-India-wedding-2.png" alt="" />
                    <p className="text-xs k2d">Photography: Expectations vs. Reality
Most of the time without any hands-on experience in photography, professional and advanced photography actually</p>
                    </div>
                    <div className="flex">
                    <img className="h-16" src="https://i.ibb.co/zQPBX52/Fliqa-India-wedding.png" alt="" />
                    <p className="text-xs k2d">Wedding Photography at Goa
Wedding Photography in Goa If not, every couple when they make their list of Pre-wedding shoot </p>
                    </div>
                   
                    <div className="flex ">
                    <img className="h-16" src="https://i.ibb.co/XWNTMLR/Wedding-Trailer.png" alt="" />
                    <p className="text-xs k2d">Creative Industries are on the verge of depletion due to COVID-19
                                            In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact</p>
                    </div>
                  </div>  
                </div>
            </div>

    )
};

export default OurBlogs;