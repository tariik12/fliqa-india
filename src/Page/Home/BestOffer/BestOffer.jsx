import { useEffect, useState } from "react";
import HeaderComponent from "../../Component/HeaderComponent/HeaderComponent";


const BestOffer = () => {
    const [cardData, setCardData] = useState([])


    useEffect(() => {
        fetch('bestOffers.json')
            .then(res => res.json())
            .then(data => {
                setCardData(data)
            })
    }, [])
    return (
        <div>
            <div className=" pb-6   text-center">
               <HeaderComponent title={'Best Offer'} des={"List your wedding and browse portfolio"}></HeaderComponent>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[100px] mx-20 bg-gradient-to-t from-[#ffffff] via-[#BADCDC] to-[#ffffff] " >
          
            <div className="divider absolute hidden md:block h-80  w-[1px] ms-[250px] bg-[#8F8787] text-white  divider-horizontal"></div>  
            <div className="divider absolute hidden md:block h-80  w-[1px] ms-[560px] bg-[#8F8787] text-white  divider-horizontal"></div>  
            <div className="divider absolute hidden md:block h-80  w-[1px] ms-[865px] bg-[#8F8787] text-white  divider-horizontal"></div>  
             
                          
                {
                    cardData.map((data) =>
                        <div key={data.offerId} className="text-white shadow-xl rounded-xl" style={{ boxShadow: '2px 2px 4px  1px #060a099f ' }} >
                          
                            <div style={{
                                backgroundImage:
                                    `linear-gradient(to bottom, rgba(21, 21, 21, 0.6),rgba(21, 21, 21, 0.6)),
                         url('${data.image}')`
                            }} className=" bg-no-repeat rounded-xl">
                                <h1 className="font-bold text-center text-lg mx-10 pt-10 bottom-2">{data.title}</h1>
                                {/* <div className="divider    h-[.02px]  "></div> */}
                                {/* <p className="">{data.description}</p> */}
                                <div className="" >
                                    <p className="pt-[80px] ps-10">Discover</p>
                                    <img className="pb-5" src={data.pic} alt="" />
                                </div>
                            </div>
                            <p className="text-center text-black">book now</p>
                        </div>)
                }
            </div>
            <div className="bg-[#ADA3A3] mx-auto mt-11 mb-16 md:w-[1100px] w-[390px] h-[2px]"><hr /></div>
        </div>
    );
};

export default BestOffer;