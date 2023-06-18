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
        })
    },[])
    return (
        <div className='bg-[#A1E3D8]'>
            <div className="flex justify-between p-10">
                <div >
                <h1 className='text-[#4C696D,rgba(161, 227, 216, 1)] text-4xl'>Find Trust Associate</h1>
                <p className='text-xl'>Find The Best Fliqa Associate for your special day</p>
                </div>
                <div className='flex items-center text-2xl'>
                    see more &gt; &gt;
                </div>
                </div>
                <div className='grid grid-cols-5 gap-5 mx-4'>
                    {
                        findTrust.map((find) =>
                        <div key={find.image} className="card rounded-2xl shadow-4xl mb-10 bg-black">
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