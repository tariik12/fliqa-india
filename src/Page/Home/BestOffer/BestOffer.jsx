import { useEffect, useState } from "react";


const BestOffer = () => {
    const [cardData, setCardData] = useState([])
    console.log(cardData)

    useEffect(() =>{
        fetch('bestOffers.json')
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setCardData(data)
        })
    },[])
    return (
        <div>
          <div className="pt-6 mx-auto text-center">
                <h1 className="text-[#4C696D] font-bold text-4xl">Real Wedding</h1>
                <p className="text-[#0C0C0C] text-xl">List your wedding and browse portfolio</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4  " >
            {
                cardData.map((data) =>
                    <div key={data.offerId} style={{ backgroundImage: `url(${data.image})` }} className=" bg-no-repeat h-64 " >
                  
                    <div className="text-white bg-[#0c0c0c72]">
                    <h1 className="font-bold text-lg p-10 bottom-2">{data.title}</h1>
                    {/* <div className="divider    h-[.02px]  "></div> */}
                    <p className="">{data.description}</p>
                    <img src={data.pic} alt="" />
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default BestOffer;