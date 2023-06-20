import { useEffect, useState } from "react";
import { AiOutlineArrowRight, } from 'react-icons/ai';
import HeaderComponent from "../../Component/HeaderComponent/HeaderComponent";

const RealWedding = () => {
    const [cardData, setCardData] = useState([])
   

    useEffect(() =>{
        fetch('realWedding.json')
        .then(res =>res.json())
        .then(data =>{
            
            setCardData(data)
        })
    },[])
    return (
        <div>
             <div className="mt-28 ms-9">
             <HeaderComponent title={'Real Wedding'} des={"List your wedding and browse portfolio"}></HeaderComponent>
              
            </div>
            <div className="grid grid-cols-1 ms-24 me-20 md:grid-cols-4 gap-14 " >
            {
                cardData.map((data) =>
                    <div key={data.image}style={{boxShadow:'2px 2px 4px  1px #060a099f '}} className="  mt-8  "  >
                   <div className="p-1" style={{backgroundColor:`${data.color}`}}>
                   <img className=" " src={data.image} alt="" />
                    
                    <div className="grid grid-cols-3 ">
                        <img src={data.pic1} alt="" />
                        <img src={data.pic2} alt="" />
                        <img src={data.pic3} alt="" />
                    </div>
                  
                    <div >
                    <h1 className="font-bold text-lg k2d">{data.title}</h1>
                    <p className="k2d">{data.description}</p>
                    </div>
                   </div>
                </div>)
            }
            </div>

           
          <div className="  flex justify-center">
          <button className="bg-[#ddf9ff] hover:bg-[#ddf9ff] btn mt-14  inner ">View more Wedding  <AiOutlineArrowRight className=" text-xl"/></button>
          
          </div>
          <div className="bg-[#ADA3A3] mx-auto mt-11 mb-5 md:w-[1100px] w-[390px] h-[2px]"><hr /></div>
        </div>
    );
};

export default RealWedding;