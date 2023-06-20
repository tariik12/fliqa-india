import BrandingToMarketing from "../BrandingToMarketing/BrandingToMarketing";
import FeaturedService from "../FeaturedService/FeaturedService";

import Banner from "../Banner/Banner";
import BannerCardComponent from "../Banner/BannerCardComponent";
import BannerText from "../Banner/BannerText";
import FindTrust from "../FindTrust/FindTrust";
import OurBlogs from "../OurBlogs/OurBlogs";
import OurAwards from "../OurAwards/OurAwards";
import RealWedding from "../RealWedding/RealWedding";
import Testimonials from "../Testimonials/Testimonials";
import OurSuccess from "../OurSuccess/OurSuccess";
import BestOffer from "../BestOffer/BestOffer";
import PhotoGraphy from "../PhotoGraphy/PhotoGraphy";
import GrowOurCareer from "../GrowOurCareer/GrowOurCareer";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerText></BannerText>
            <BannerCardComponent></BannerCardComponent>
            <FindTrust></FindTrust>
            <FeaturedService></FeaturedService>
            <BrandingToMarketing></BrandingToMarketing>
            <OurBlogs></OurBlogs>
            <RealWedding></RealWedding>
            <BestOffer></BestOffer>
            <Testimonials></Testimonials>
            <OurAwards></OurAwards>
            <OurSuccess></OurSuccess>
            <PhotoGraphy></PhotoGraphy>
            <GrowOurCareer></GrowOurCareer>
        </div>
    );
};

export default Home;