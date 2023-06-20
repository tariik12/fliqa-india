import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedSevice.css"
import FeatureComponent from "../../Component/FeatureComponent/FeatureComponent";
import HeaderComponent from "../../Component/HeaderComponent/HeaderComponent";


const FeaturedService = () => {

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1008,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 800,
              settings: 'unslick',
            },],
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };
    return (
        <div className="mb-20 mt-[62px] ms-10">
            <div>
            <HeaderComponent title={'Our Featured Service'} des={"Discover the range of services provided the fliqf india "}></HeaderComponent>
               
            </div>
            <Slider {...settings} className=" md:mx-10 mt-10  ">
                <div  className="">
                    <FeatureComponent image={"https://i.ibb.co/kS2MTfD/featured-Service1.png"}title={'Pre Wedding PhotoShoot'}text_bold={'Starting at'}text={"25,000 (One Day)"}></FeatureComponent>
                </div>
             
                    <div >
                    <FeatureComponent image={"https://i.ibb.co/87k3pHW/featured-Service3.png"}title={'Pre Wedding PhotoShoot'}text_bold={'Starting at'}text={"25,000 (Standard price for 6-8 hours)"}></FeatureComponent>
                </div>
      
                
                <div > <FeatureComponent image={"https://i.ibb.co/mFXNnXY/featured-Service4.png"}title={'Pre Wedding PhotoShoot'}text_bold={'Starting at'}text={"at 15,000 (One days)"}></FeatureComponent>
                   
                </div>
                <div > 
                    <FeatureComponent image={"https://i.ibb.co/W6Wy5sv/featured-Service2.png"}title={'Pre Wedding PhotoShoot'}text_bold={'Starting at'}text={"62,000 (Two Day)"}></FeatureComponent>

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