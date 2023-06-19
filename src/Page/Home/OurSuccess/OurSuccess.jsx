import { useEffect, useState } from "react";


const OurSuccess = () => {
    const [cardData, setCardData] = useState([])
    console.log(cardData)

    useEffect(() =>{
        fetch('ourSuccess.json')
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setCardData(data)
        })
    },[])
    return (
        <div className="bg-[#ACCBC7]">
             <div className="pt-6 ms-9 text-center">
                <h1 className="text-[#4C696D] font-bold text-4xl">Our Success</h1>
                <p className="text-[#0C0C0C] text-xl">Journey of our success.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mx-24  " >
            {
                cardData.map((data) =>
                    <div key={data.successId} className=" mb-24 mt-7" >
                      <div className="  bg-base-100 shadow-xl  h-44 rounded-full">
                     
                      <img src={data.image} className="px-5 pt-16" alt="" />
                      </div>
                    <div className="">
                    <p className="">{data.description}</p>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default OurSuccess;
