

const BannerText = () => {
    return (
        <div className="text-center mt-5">
            <h1 className="font-bold text-4xl">Idia ||s Leading Creative Platform</h1>
            <p className="mt-2 text-[#4C696D]">Experience hassle free booking. Trust by 2500+ Customer</p>
            <div className="flex relative my-9 text-center">
            <input type="text" placeholder=" Search service, blog and many more" className="input mx-auto input-sm   w-1/2 input-bordered  text-center " style={{borderRadius:'200px'}} />
            <button className=" absolute right-60  text-white rounded-full btn-sm   bg-black px-14 ">Search</button>
            </div>
        </div>
    );
};

export default BannerText;