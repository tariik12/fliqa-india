import { useEffect, useState } from "react";
const BannerCardComponent = () => {
    const [cardData, setCardData] = useState([])
    console.log(cardData)

    useEffect(() =>{
        fetch('bannerCard.json')
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setCardData(data)
        })
    },[])
    return (
        <div >
            <div className="grid grid-cols-1 md:grid-cols-4 " >
            {
                cardData.map((data,index) =>
                    <div key={index} className="flex items-center gap-2 " >
                    <img className="h-[120px] w-[100px] " src={data.image} alt="" />
                    <div>
                    <h1 className="font-bold text-lg">{data.title}</h1>
                    <p className="">{data.description}</p>
                    </div>
                </div>)
            }
            </div>
           
           <div className="divider md:w-[1100px] mt-10 mb-28 mx-auto bg-black h-[.02px]  "></div>
          
        </div>
    );
};

export default BannerCardComponent;