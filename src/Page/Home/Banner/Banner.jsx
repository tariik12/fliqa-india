import { useEffect } from 'react';
import banner from '../../../assets/banner.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        className:'btn btn-outline'
    
    
      };
    

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    return (
        <Slider {...settings} className=" border-b">

        <div data-aos="zoom-out">
            <img src={banner} alt="" />
        </div>
        <div data-aos="zoom-out">
            <img src='https://i.ibb.co/phWn6xY/231628044-1054195518448463-2441349105838076446-n.png' alt="" />
        </div>
        <div data-aos="zoom-out">
            <img className='w-[1280px] h-[395.457px]' src="https://i.ibb.co/y8BwvSg/219345992-1039481463253202-4861664481287906335-n.jpg" alt="" />
        </div>
        <div data-aos="zoom-out">
            <img className='w-[1280px] h-[395.457px]' src="https://i.ibb.co/mDFhkR5/241727500-1074715803063101-2186547418606222132-n.jpg" alt="" />
        </div>
        <div data-aos="zoom-out">
            <img className='w-[1280px] h-[395.457px]' src="https://i.ibb.co/ZxKZyw5/238738987-1062224460978902-2445390941922883751-n.jpg" alt="" />
        </div>
        <div data-aos="zoom-out">
            <img className='w-[1280px] h-[395.457px]' src="https://i.ibb.co/4N07JCT/238057857-1060350217832993-7214998434157420376-n.jpg" alt="" />
        </div>
        <div data-aos="zoom-out">
            <img className='w-[1280px] h-[395.457px]' src="https://i.ibb.co/ZxKZyw5/238738987-1062224460978902-2445390941922883751-n.jpg" alt="" />
        </div>
        <div data-aos="zoom-out">
            <img className='w-[1280px] h-[395.457px]' src="https://i.ibb.co/mDFhkR5/241727500-1074715803063101-2186547418606222132-n.jpg" alt="" />
        </div>
        </Slider>
    );
};

export default Banner;