import { FaFacebook, FaLinkedin, FaYoutube,  } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { Link } from "react-router-dom";

import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {


  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
    return (
        <div className="bg-black text-white relative overflow-hidden" data-aos="zoom-in">
           <div className="   w-96 h-96  overscroll-contain rounded-full bg-[#e0e0e0c5] -right-28 -top-56 absolute">

</div>
          <footer className="footer p-10   ">
          <div className=" ">
    <span className="font-bold text-xl rubik italic ">Never miss a thing.</span> 
    <div className="flex relative my-9  ">
            <input type="text" placeholder=" Email Address" className="input rubik italic mx-auto input-sm  w-full input-bordered  " style={{borderRadius:'200px'}} />
            <button className=" absolute right-0 text-[#4B4B4B] rounded-full btn-sm rubik italic bg-[#E0E0E0]  ">Search</button>
            </div>
                <span className="rubik italic">Be in touch</span>
    <div className="grid grid-flow-col gap-4">
      <FaFacebook/>
      <BsWhatsapp/>
      <FaLinkedin/>
      <FaYoutube/>
      <SlSocialInstagram/>
    </div>
  </div>
  <div>
    <span className="font-bold text-xl rubik ms-5">Never miss a thing.</span> 
   <div className="flex gap-32">
    <div className="" >
       <Link className="link rubik link-hover">Services</Link>  <br />
       <Link className="link rubik link-hover">Blog</Link>  <br />
       <Link className="link rubik link-hover">Portfolio</Link> 
   </div>
    <div> 
     <Link className="link rubik link-hover">Tutorial</Link> <br />
     <Link className="link rubik link-hover">Careers</Link> <br />
     <Link className="link rubik link-hover">Film</Link> 
   </div>
   </div>
  </div> 
  <div>
 
    <span className="rubik font-bold text-xl ">Never miss a thing.</span> 
    <Link className="rubik link link-hover">Contact us</Link> 
    <Link className="rubik link link-hover">Feedback</Link> 
    <Link className="rubik link link-hover">FAQ</Link> 
    <Link className="rubik link link-hover">Terms and conditions</Link>
    <Link className="rubik link link-hover">Privacy Policy</Link>
    <Link className="rubik link link-hover">Data Deletion Protocol</Link>
  </div> 
</footer>
 
<div className=" relative overflow-hidden">
  <div className="  w-48 h-48 rounded-full bg-[#E0E0E0] -left-16 -bottom-10  absolute">

  </div>
  <p className="text-center mt-16 pb-4 rubik">2019-2021, FliqaIndia Pvt Ltd.       -ALL RIGHT RESERVED <br /> 
POWERED BY FLIQAINDIA PVT. LTD.  <br /> 
VERSION 5.1.5</p>
</div>
        </div>
    );
};

export default Footer;