

const BannerText = () => {
    return (
        <div className="text-center mt-5">
            <h1 className=" text-[30px] md:text-[64px] jura" style={{fontWeight:'700'}}>India&apos;s Leading Creative Platform</h1>
            <p className="mt-2 JosefinSans text-[12px] md:text-[32px] text-[#4C696D]">Experience hassle free booking. Trust by 2500+ Customer</p>
            <div className="flex relative my-9 text-center">
            <input type="text" placeholder=" Search service, blog and many more..." className="input JosefinSlab input-bordered md:mx-auto input-xs text-[12px] md:text-[24px]  text-[#000000] md:w-2/3 w-full mx-5 mt-1 font-thin text-center " style={{borderRadius:'200px'}} />
            <button className=" absolute md:right-52 right-3   jost text-white rounded-full bg-black px-10 md:px-20 btn-sm ">Search</button>
            </div>
        </div>
    );
};

export default BannerText;