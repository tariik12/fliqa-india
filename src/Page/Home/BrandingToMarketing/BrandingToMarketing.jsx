
const BrandingToMarketing = () => {
    return (
        <div>

        <div className="md:flex gap-5 " style={{ backgroundImage: `url("https://i.ibb.co/G5dS0wY/branding-Bg.png")` }}>

            <div className="text-white  ps-10 pt-10 md:pt-0 mt-16 pb-10 md:pb-0 ">
                <h1 className="bebasNeue uppercase"><span className="md:text-5xl text-xl font-thin ">Discover</span> <br /> <span className="md:text-5xl text-3xl font-bold">Graphic Design Ideas and services</span>
                </h1>
                <h4 className="md:text-4xl text-xl bebasNeue font-thin pt-5 uppercase ">From branding to marketing</h4>

                <div className="flex relative my-9 ">
            <input type="text" placeholder=" &#128269; what kind of design you are looking for?
Search" className="input text-[#00000080] mx-auto input-sm JosefinSlab  w-full input-bordered  me-12 md:py-[22px] " style={{borderRadius:'200px'}} />
            <button className=" absolute right-10  text-white rounded-full md:btn-md btn-sm jost bg-black md:px-14 px-8">Search</button>
            </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-5 ">
                <div className="">
            <div className="divider hidden md:block h-28 w-[1px] ms-[70px] bg-white text-white  divider-horizontal "><span className="bg-white w-12 h-4 z-10 absolute mt-[120px]"></span></div> 
            
                    <img className=" bg-black  p-2" src="https://i.ibb.co/SXTBdjk/image-49.png" alt="" />
                </div>
                <div className="">
                <div className="divider hidden md:block h-12 w-[1px] ms-[73px] bg-white text-white  divider-horizontal"><span className="bg-white w-12 h-4 z-10 absolute mt-[56px]"></span></div>  
                     <img className=" bg-black  p-2" src="https://i.ibb.co/6t3zkLw/image-32.png" alt="" />
                </div>
                <div className="">
                <div className="divider hidden md:block h-32 w-[1px] ms-[73px] bg-white text-white  divider-horizontal"><span className="bg-white w-12 h-4 z-10 absolute mt-[136px]"></span></div>
                    <img className=" bg-black  p-2" src="https://i.ibb.co/0yZLhtv/Rectangle-166.png" alt="" />
                </div>
                <div className="">
                <div className="divider hidden md:block h-24 w-[1px] ms-[73px] bg-white text-white  divider-horizontal"><span className="bg-white w-12 h-4 z-10 absolute mt-[104px]"></span></div>
                    <img className=" bg-black  p-2" src="https://i.ibb.co/1dTxQTT/image-24.png" alt="" />
                </div>
            </div>

           
        </div>
            <h3 className="text-center mt-11 md:text-3xl text-xs tracking-widest homenaje text-[#4c696d
  #8bc2a0]"><span className="#000000">Popular:</span>      <span className="" style={{color:"rgba(76, 105, 109, 1),rgba(139, 194, 160, 1)"}}>Website  Design   Logo Design   Brochure   Label Design</span></h3>
   <div className="bg-[#000000] mx-auto mt-11 mb-16 md:w-[1100px] w-[390px] h-[2px]"><hr /></div>
      
        </div>
        
    );
};

export default BrandingToMarketing;