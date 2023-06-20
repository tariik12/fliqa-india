import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const HeaderComponent = ({title, des}) => {


    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    return (
        <div data-aos="zoom-in">
             <h1 className="text-[#4C696D] font-itoya text-sm font-bold md:text-4xl">{title}</h1>
                <p className="text-[#0C0C0C] font-itoya text-xs md:text-xl">{des}</p>
        </div>
    );
};

export default HeaderComponent;