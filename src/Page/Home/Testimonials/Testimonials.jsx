import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Testimonials = () => {

    return (
        <div>
              <div className=' grid grid-cols-1 md:grid-cols-2'>
              <div className='relative'>
                <img className='absolute' src="https://i.ibb.co/XyDqmbC/XMLID-803.png" alt="" />
                <img className='absolute' src="https://i.ibb.co/y4ttWfj/XMLID-777.png" alt="" />
                <img className='absolute' src="https://i.ibb.co/XCwXVrF/XMLID-1.png" alt="" />
                <img className='absolute' src="https://i.ibb.co/9GK8nXK/XMLID-268.png" alt="" />
                <img className='absolute' src="https://i.ibb.co/tph8Ztz/XMLID-373.png" alt="" />
                </div>
            <div>
                <h1>Testimonials</h1>

                <Tabs>
                    <TabList>
                        <Tab>Google</Tab>
                        <Tab>Facebook</Tab>
                        <Tab>Weddingwire</Tab>
                        <Tab>WedmeGood</Tab>
                    </TabList>

                    <TabPanel>

                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                </Tabs>
            </div>
              </div>
         
        </div>
    );
};

export default Testimonials;