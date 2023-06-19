
const BrandingToMarketing = () => {
    return (
        <div>

        <div className="md:flex gap-5 " style={{ backgroundImage: `url("https://i.ibb.co/G5dS0wY/branding-Bg.png")` }}>

            <div className="text-white  ps-10  mt-16 ">
                <h1 className=""><span className="text-5xl">Discover</span> <br /> <span className="text-5xl font-bold">Graphic Design Ideas and services</span>
                </h1>
                <h4 className="text-3xl">From branding to marketing</h4>

                <div className="flex relative my-9 ">
            <input type="text" placeholder=" &#128269; what kind of design you are looking for?
Search" className="input mx-auto input-sm  w-full input-bordered  me-12 py-[22px] " style={{borderRadius:'200px'}} />
            <button className=" absolute right-10  text-white rounded-full btn-md  bg-black px-14 ">Search</button>
            </div>
            </div>
            <div className="grid grid-cols-4 gap-5 ">
                <div className="">
            <div className="divider h-28 w-[1px] ms-24 bg-white text-white  divider-horizontal"><span className="bg-white w-12 h-4 z-10 absolute mt-[120px]"></span></div> 
            
                    <img className=" bg-black  p-2" src="https://i.ibb.co/SXTBdjk/image-49.png" alt="" />
                </div>
                <div className="">
                <div className="divider h-12 w-[1px] ms-24 bg-white text-white  divider-horizontal"><span className="bg-white w-12 h-4 z-10 absolute mt-[56px]"></span></div>  
                     <img className=" bg-black  p-2" src="https://i.ibb.co/6t3zkLw/image-32.png" alt="" />
                </div>
                <div className="">
                <div className="divider h-32 w-[1px] ms-24 bg-white text-white  divider-horizontal"><span className="bg-white w-12 h-4 z-10 absolute mt-[136px]"></span></div>
                    <img className=" bg-black  p-2" src="https://i.ibb.co/0yZLhtv/Rectangle-166.png" alt="" />
                </div>
                <div className="">
                <div className="divider h-24 w-[1px] ms-24 bg-white text-white  divider-horizontal"><span className="bg-white w-12 h-4 z-10 absolute mt-[104px]"></span></div>
                    <img className=" bg-black  p-2" src="https://i.ibb.co/1dTxQTT/image-24.png" alt="" />
                </div>
            </div>

           
        </div>
            <h3 className="text-center mt-11 text-4xl">Popular:     Website  Design   Logo Design   Brochure   Label Design</h3>
        <div className="divider md:w-[1100px] mt-10 mb-28 mx-auto bg-black h-[.02px]  "></div>
        </div>
    );
};

export default BrandingToMarketing;