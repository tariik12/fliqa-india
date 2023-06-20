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
                <h1 className="text-[#4C696D] font-bold text-4xl">Best Offer</h1>
                <p className="text-[#0C0C0C] text-xl">List your wedding and browse portfolio</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[100px]  " >
            {
                cardData.map((data) =>
                    <div key={data.offerId} className="text-white shadow-xl" >
                  
                    <div  style={{ backgroundImage:
                        `linear-gradient(to bottom, rgba(21, 21, 21, 0.6),rgba(21, 21, 21, 0.6)),
                         url('${data.image}')` }} className=" bg-no-repeat rounded-xl">
                    <h1 className="font-bold text-center text-lg px-20 pt-10 bottom-2">{data.title}</h1>
                    {/* <div className="divider    h-[.02px]  "></div> */}
                    {/* <p className="">{data.description}</p> */}
                    <div className="">
                        <p className="pt-[80px] ps-10">Discover</p>
                    <img className="pb-5" src={data.pic} alt="" />
                    </div>
                    </div>
                    <p className="text-center text-black">book now</p>
                </div>)
            }
            </div>
        </div>
    );
};

export default BestOffer;