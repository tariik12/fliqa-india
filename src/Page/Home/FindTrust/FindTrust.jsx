import { useEffect, useState } from 'react';

const FindTrust = () => {

    const [findTrust, setFindTrust] = useState([])
    console.log(findTrust)

    useEffect(() =>{
        fetch('findTrust.json')
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setFindTrust(data)
            // style={{ background:`linear-gradient(to bottom, #a1e3d8 rgba(161, 227, 216, 1),rgba(255, 255, 255, 1)` }}
        })
    },[])
    return (
        <div className= ' bg-[#A1E3D8] shadow-inner  relative pt-11 px-9  ' style={{boxShadow:" 0px 10px 20px 13px rgba(1,1,1,0.50) inset"}}  >
                    {/* <div className='h-full w-full bg-[#100c0c5d] absolute  p-32'></div> */}
           
            <div className="flex justify-between  " >
                <div >
                <h1 className=' text-4xl'>Find Trust Associate</h1>
                <p className='text-xl'>Find The Best Fliqa Associate for your special day</p>
                </div>
                <div className='flex inner items-center '>
                    see more &gt; &gt;
                </div>
                </div>
                <div className='grid grid-cols-5 gap-5 pt-10'>
                    {
                        findTrust.map((find) =>
                        <div key={find.image} className="card rounded-3xl  mb-8 bg-black" style={{boxShadow:'4px 10px 4px  1px #060a099f '}}>
                        <img src={find.image} alt="" />
                       <div className='flex justify-between text-white'>
                         <div className='ms-2 p-2'>
                         <h1 className='font-bold'> {find.name}</h1>
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