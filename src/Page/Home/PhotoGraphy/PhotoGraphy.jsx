

const PhotoGraphy = () => {
    return (
        <div style={{backgroundImage: `url("https://i.ibb.co/hZhchbY/Rectangle-217-1.png")`}} className="bg-cover bg-no-repeat border mb-7">
            <div className="grid md:grid-cols-2 grid-cols-1  md:ps-80 pt-28 pb-28 pe-40 " >
           <div className="ms-32 md:ms-0 mb-10 md:mb-0 ">
            <h4 className="text-white uppercase text-4xl bebasNeue font-thin">ULTIMATE <br /> COURSE IN </h4>
           <h2 className="text-5xl font-bold text-white bebasNeue uppercase pt-3">PHOTOGRAPHY</h2>
           </div>
           <div className="ms-32 md:ms-0" >
            <img src="https://i.ibb.co/HrH5ztG/image-183.png" alt="" />
           </div>
        </div>
        </div>
    );
};

export default PhotoGraphy;