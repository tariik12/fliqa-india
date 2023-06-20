import { useEffect, useState } from "react";


const RealWedding = () => {
    const [cardData, setCardData] = useState([])
    console.log(cardData)

    useEffect(() =>{
        fetch('realWedding.json')
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setCardData(data)
        })
    },[])
    return (
        <div>
             <div className="pt-6 ms-9">
                <h1 className="text-[#4C696D] font-bold text-4xl">Real Wedding</h1>
                <p className="text-[#0C0C0C] text-xl">List your wedding and browse portfolio</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 " >
            {
                cardData.map((data) =>
                    <div key={data.image} className=" shadow-xl  " >
                   <div>
                   <img className=" " src={data.image} alt="" />
                    
                    <div className="grid grid-cols-3 ">
                        <img src={data.pic1} alt="" />
                        <img src={data.pic2} alt="" />
                        <img src={data.pic3} alt="" />
                    </div>
                  
                   </div>
                    <div>
                    <h1 className="font-bold text-lg k2d">{data.title}</h1>
                    <p className="k2d">{data.description}</p>
                    </div>
                </div>)
            }
            </div>

           
           <button className="bg-[#BADCDC] btn mt-14 w-2/12 ms-96 inner ">View more Wedding</button>
           <div className="divider md:w-[1100px] mt-10 mb-28 mx-auto bg-black h-[.02px]  "></div>
        </div>
    );
};

export default RealWedding;