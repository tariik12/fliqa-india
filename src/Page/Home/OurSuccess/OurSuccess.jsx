import { useEffect, useState } from "react";
import HeaderComponent from "../../Component/HeaderComponent/HeaderComponent";


const OurSuccess = () => {
    const [cardData, setCardData] = useState([])


    useEffect(() =>{
        fetch('ourSuccess.json')
        .then(res =>res.json())
        .then(data =>{
            setCardData(data)
        })
    },[])
    return (
        <div className="bg-[#ACCBC7] mb-6">
             <div className="pt-6 ms-9 text-center">
             <HeaderComponent title={'Our Success'} des={"Journey of our success."}></HeaderComponent>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8 md:mx-24  " >
            {
                cardData.map((data) =>
                    <div key={data.successId} className=" mb-24 mt-7 md:px-0 px-20 md:border-0 border md:mx-0 mx-10 rounded-xl md:rounded-none md:py-0  py-10" >
                      <div className="  bg-base-100 border w-32 md:w-48 md:h-48 h-32 rounded-full mx-auto">
                      
                      <img src={data.image} className="md:px-5 px-5 md:pt-16 pt-10" alt="" />
                      </div>
                    <div className="">
                    <p className="inner text-center mt-3">{data.description}</p>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default OurSuccess;
