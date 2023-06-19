import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureComponent from "../../Component/FeatureComponent/FeatureComponent";


const FeaturedService = () => {

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };
    return (
        <div className="mb-20">
            <div>
                <h1 className='text-[#4C696D,rgba(161, 227, 216, 1)] text-4xl'>Our Featured Service</h1>
                <p className='text-xl'>Discover the range of services provided the fliqf india  </p>
            </div>
            <Slider {...settings} className=" mx-10 p-5  ">
                <div  className="">
                    <FeatureComponent image={"https://i.ibb.co/kS2MTfD/featured-Service1.png"}title={'Pre Wedding PhotoShoot'}text_bold={'Starting at'}text={"25,000 (One Day)"}></FeatureComponent>
                </div>
             
                    <div >
                    <FeatureComponent image={"https://i.ibb.co/87k3pHW/featured-Service3.png"}title={'Pre Wedding PhotoShoot'}text_bold={'Starting at'}text={"25,000 (One Day)"}></FeatureComponent>
                </div>
      
                
                <div > <FeatureComponent image={"https://i.ibb.co/mFXNnXY/featured-Service4.png"}title={'Pre Wedding PhotoShoot'}text_bold={'Starting at'}text={"25,000 (One Day)"}></FeatureComponent>
                   
                </div>
                <div > 
                    <FeatureComponent image={"https://i.ibb.co/W6Wy5sv/featured-Service2.png"}title={'Pre Wedding PhotoShoot'}text_bold={'Starting at'}text={"25,000 (One Day)"}></FeatureComponent>

                </div>
                <div>
                <FeatureComponent image={"https://i.ibb.co/kS2MTfD/featured-Service1.png"}title={'Pre Wedding PhotoShoot'}text_bold={'Starting at'}text={"25,000 (One Day)"}></FeatureComponent>
                </div>
                <div>
                <FeatureComponent image={"https://i.ibb.co/kS2MTfD/featured-Service1.png"}title={'Pre Wedding PhotoShoot'}text_bold={'Starting at'}text={"25,000 (One Day)"}></FeatureComponent>
                </div>
                <div>
                <FeatureComponent image={"https://i.ibb.co/W6Wy5sv/featured-Service2.png"}title={'Pre Wedding PhotoShoot'}text_bold={'Starting at'}text={"25,000 (One Day)"}></FeatureComponent>

                </div>
             
                <div> <FeatureComponent image={"https://i.ibb.co/mFXNnXY/featured-Service4.png"}title={'Pre Wedding PhotoShoot'}text_bold={'Starting at'}text={"25,000 (One Day)"}></FeatureComponent>
                   
                </div>
                <div>
                <FeatureComponent image={"https://i.ibb.co/W6Wy5sv/featured-Service2.png"}title={'Pre Wedding PhotoShoot'}text_bold={'Starting at'}text={"25,000 (One Day)"}></FeatureComponent>

                </div>
            </Slider>

        </div>
    );
};

export default FeaturedService;