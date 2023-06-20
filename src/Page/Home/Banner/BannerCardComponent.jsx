import { useEffect, useState } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
const BannerCardComponent = () => {
    const [cardData, setCardData] = useState([])
 

    useEffect(() =>{
        fetch('bannerCard.json')
        .then(res =>res.json())
        .then(data =>{
            setCardData(data)
        })
    },[])

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    return (
        <div >
            <div className="grid grid-cols-2 md:grid-cols-4 " >
            {
                cardData.map((data,index) =>
                    <div key={index} className="flex items-center gap-2 " data-aos="flip-right" >
                    <img className="md:h-[120px] h-[60px] md:w-[100px] w-[50px] mb-2 " src={data.image} alt="" />
                    <div>
                    <h1 className="font-bold text-xs md:text-base inner">{data.title}</h1>
                    <p className=" text-xs md:text-base inner">{data.description}</p>
                    </div>
                </div>)
            }
            </div>
           <div className="bg-[#000000] mx-auto mt-11 mb-28 md:w-[1100px] w-[390px] h-[2px]"><hr /></div>
          
        </div>
    );
};

export default BannerCardComponent;