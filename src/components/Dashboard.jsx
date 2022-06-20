import {Card,List} from '@shopify/polaris'
import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import predict from '../assets/predective.png';
import "../assets/style.css";

const Dashboard = () => {

        const [loadTime, setloadTime] = useState();

        useEffect(()=>{
                setTimeout(()=>{
                     setloadTime(false);
                }, 2000);
        })
    return(
        <>
           <div className='dashboard'>
              <div className='card1'>
                    <Card title="Upcoming Updates" sectioned>
                        <p style={{'fontSize':'12px'}}>CUSTOMIZED CUSTOMER CREATED CONTRACTS <span style={{'fontSize':'16px','borderRadius':'10px','backgroundColor':'#ffea8a','padding':'0px 5px'}}>COMING SOON</span></p>
                         <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                         </p>
                    </Card>
              </div>
              <div className='card2'>
                    <Card title="Important Notice" sectioned>
                        <p style={{'fontSize':'12px'}}>WHY SUBSCRIPTION PLANS ARE NOT SHOWING ON THE PRODUCT PAGE?</p>
                           <List type="bullet">
                                <List.Item>Make Sure you have enabled the app from Theme Customizer. Click Here or Follow the Steps in the Shopify Admin Panel: -
                                 Online Store- Current Theme - Customize -Theme Settings- App embeds - Advanced Subscription - Enable the toggle button - Save
                                 Refresh the product page to see the “Purchase Options” Widget.</List.Item>
                                <List.Item>Most Importantly, as per Shopify default standards, have to have Shopify Payments Setup for the options (in Settings - Payments) to appear on a product page.
                                    </List.Item>
                                <List.Item>Product Inventory needs to be more than zero.    </List.Item>
                           </List>
                           <p>If still facing issues, Kindly contact us at vikas.shinedezign@gmail.com</p>
                    </Card>
              </div>
           </div>
               <div className='other-apps'>
                         <Spin size='large'  spinning = {loadTime}>
                    
                            <Card title="Our Other Apps" sectioned >
                                   <div className='block1'>
                                        <div className='left1'>
                                                <img src={predict} alt="Advanced Wholesale Pro" style={{"float":"left","paddingRight" : "10px"}}/>
                                                <h4>Advanced Wholesale Pro</h4>
                                                <span>Free plan available</span>
                                                <p>Wholesale, Apply Quantity Breaks  Discounts in a Flash</p>
                                        </div>
                                        <div className='right1'>
                                                <img src={predict} alt="Advanced Wholesale Pro" style={{"float":"left","paddingRight" : "10px"}}/>
                                                <h4>Advanced Wholesale Pro</h4>
                                                <span>Free plan available</span>
                                                <p>Wholesale, Apply Quantity Breaks  Discounts in a Flash</p>
                                        </div>
                                   </div>


                                   <div className='block1'>
                                        <div className='left1'>
                                                <img src={predict} alt="Advanced Wholesale Pro" style={{"float":"left","paddingRight" : "10px"}}/>
                                                <h4>Advanced Wholesale Pro</h4>
                                                <span>Free plan available</span>
                                                <p>Wholesale, Apply Quantity Breaks  Discounts in a Flash</p>
                                        </div>
                                        <div className='right1'>
                                                <img src={predict} alt="Advanced Wholesale Pro" style={{"float":"left","paddingRight" : "10px"}}/>
                                                <h4>Advanced Wholesale Pro</h4>
                                                <span>Free plan available</span>
                                                <p>Wholesale, Apply Quantity Breaks  Discounts in a Flash</p>
                                        </div>
                                   </div>


                                   <div className='block1'>
                                        <div className='left1'>
                                                <img src={predict} alt="Advanced Wholesale Pro" style={{"float":"left","paddingRight" : "10px"}}/>
                                                <h4>Advanced Wholesale Pro</h4>
                                                <span>Free plan available</span>
                                                <p>Wholesale, Apply Quantity Breaks  Discounts in a Flash</p>
                                        </div>
                                        <div className='right1'>
                                                <img src={predict} alt="Advanced Wholesale Pro" style={{"float":"left","paddingRight" : "10px"}}/>
                                                <h4>Advanced Wholesale Pro</h4>
                                                <span>Free plan available</span>
                                                <p>Wholesale, Apply Quantity Breaks  Discounts in a Flash</p>
                                        </div>
                                   </div>

                              </Card> 
                            </Spin>
                </div>
        </>
    )
}

export default Dashboard;