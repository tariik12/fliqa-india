import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TestimonialComponent from './TestimonialComponent';
import HeaderComponent from '../../Component/HeaderComponent/HeaderComponent';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Testimonials = () => {

    const [cardData, setCardData] = useState([])
    console.log(cardData)

    useEffect(() =>{
        fetch('testimonials.json')
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setCardData(data)
        })
    },[])

    
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    const googles = cardData.filter(data =>data.type === 'google')
    const facebooks = cardData.filter(data =>data.type === 'facebook')
    const weddingWires = cardData.filter(data =>data.type === 'weddingWire')
    const wedMeGoods = cardData.filter(data =>data.type === 'WedMeGood')
   console.log(googles,facebooks,wedMeGoods,weddingWires)
    return (
        <div className='mb-20 '>
              <div className=' md:flex items-center pb-3 '>
              <div data-aos="zoom-in">
              <div className='relative h-80 md:flex flex-row md:w-[460px] w-[300px] pe-3  mb-0 pb-0 mx-2'>
                <img className='md:h-56 h-[180px] bottom-0 absolute' src="https://i.ibb.co/9GK8nXK/XMLID-268.png" alt="" />
                <img className='md:h-32 h-[110px] bottom-0 left-24 absolute' src="https://i.ibb.co/y4ttWfj/XMLID-777.png" alt="" />
                <img className='absolute md:h-64 
                h-[200px]  start-32 bottom-0' src="https://i.ibb.co/tph8Ztz/XMLID-373.png" alt="" />
                <img className='md:h-10 h-[20px] bottom-0 absolute md:left-[336px] left-[300px]' src="https://i.ibb.co/84VgSk5/XMLID-806.png" alt="" />
                <img className='md:h-20 h-[60px] bottom-0 md:left-[336px] left-[300px] absolute' src="https://i.ibb.co/jwzPRS9/XMLID-797.png" alt="" />
                <img className='md:h-56 h-[180px]  bottom-0 absolute md:left-[340px] left-[300px]' src="https://i.ibb.co/XCwXVrF/XMLID-1.png" alt="" />
                </div>
            <hr className='bg-[#638be2] font-bold h-2 mx-1 mt-0 pt-0 '/>
            <div className='h-10 bg-[#DDF8F3] mx-7 rounded-b-3xl'></div>
              </div>
            <div className='relative pt-3'>
            <div className=" absolute start-32 md:start-0">
            <HeaderComponent title={'Testimonials'} des={"Words from our clients"}></HeaderComponent>
            </div>

                <Tabs className='w-full md:pt-5 pt-20   pe-8'>
                    <TabList className='text-right  mb-14 '>
                        <Tab>Google</Tab>
                        <Tab>Facebook</Tab>
                        <Tab>WeddingWire</Tab>
                        <Tab>WedMeGood</Tab>
                    </TabList>

                    <TabPanel >
                        <div className='grid  grid-cols-1 md:grid-cols-4 gap-11 bg-[#DDF8F3]' data-aos="zoom-in">
                        {
                            googles.map(google =><TestimonialComponent key={google.testimonialId} name={google.name} image={google.image} description={google.description}></TestimonialComponent>)
                        }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid  grid-cols-1 md:grid-cols-4 gap-11 bg-[#DDF8F3]' data-aos="zoom-in">
                        {
                            facebooks.map(facebook =><TestimonialComponent key={facebook.testimonialId} name={facebook.name} image={facebook.image} description={facebook.description}></TestimonialComponent>)
                        }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid  grid-cols-1 md:grid-cols-4 gap-11 bg-[#DDF8F3]' data-aos="zoom-in">
                        {
                            weddingWires.map(weddingWire =><TestimonialComponent key={weddingWire.testimonialId} name={weddingWire.name} image={weddingWire.image} description={weddingWire.description}></TestimonialComponent>)
                        }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid  grid-cols-1 md:grid-cols-4 gap-11 bg-[#DDF8F3]' >
                        {
                            wedMeGoods.map(wedMeGood =><TestimonialComponent key={wedMeGood.testimonialId} name={wedMeGood.name} image={wedMeGood.image} description={wedMeGood.description}></TestimonialComponent>)
                        }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
              </div>
         
        </div>
    );
};

export default Testimonials;