

const TestimonialComponent = ({ name, image, description }) => {
    console.log(name, image, description)


    return (
        <div >
            <div className="relative rounded-xl text-white  bg-[#416F75] h-64 mx-20 md:mx-0 " >
                <div className="avatar absolute  -right-8 -top-8">
                    <div className="w-20 rounded-full">
                        <img src={image} />
                    </div>
                </div>
                <p className="pt-20 px-4 text-center ">{description}</p>
                <h4 className="text-center font-bold">{name}</h4>
            </div>
        </div>
    );
};

export default TestimonialComponent;