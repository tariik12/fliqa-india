import { useEffect, useState } from 'react';
import HeaderComponent from '../../Component/HeaderComponent/HeaderComponent';

const FindTrust = () => {

    const [findTrust, setFindTrust] = useState([])
    

    useEffect(() =>{
        fetch('findTrust.json')
        .then(res =>res.json())
        .then(data =>{
    
            setFindTrust(data)
         
        })
    },[])
    return (
        <div className= ' bg-[#A1E3D8] shadow-inner  relative md:pt-11 pt-8 md:px-9 px-4 ' style={{boxShadow:" 0px 10px 20px 13px rgba(1,1,1,0.50) inset"}}  >
           
            <div className="flex justify-between  " >
                <div >
                <HeaderComponent title={'Find Trust Associate'} des={"Find The Best Fliqa Associate for your special day"}></HeaderComponent>
               
                </div>
                <div className='flex inner items-center text-sm md:text-xl'>
                    see more &gt; &gt;
                </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-5 md:gap-5 gap-5 md:pt-10 pt-6'>
                    {
                        findTrust.map((find) =>
                        <div key={find.image} className="card rounded-3xl md:mb-8  bg-black" style={{boxShadow:'4px 10px 4px  1px #060a099f '}}>
                            
                        <img src={find.image} alt="" />
                       <div className='flex justify-between text-white'>
                         <div className='ms-2 p-2'>
                         <h1 className='md:font-bold md;text-xl text-xs font-bold'> {find.name}</h1>
                        <p>{find.location}</p>
                         </div>
                         <div>
                            <img src={find.verified} alt="" />
                         </div>
                       </div>
                    </div>)
                    }
                   
                
                </div>
           
           
        </div>
    );
};

export default FindTrust;