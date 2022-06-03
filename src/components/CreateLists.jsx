import React, {useCallback, useEffect, useState} from 'react';
import {Button, Card,EmptyState, Layout } from '@shopify/polaris';
import { useNavigate , Link} from 'react-router-dom';
import { Spin } from 'antd';
import Prompt from './Prompt';

export default function createLists() {
  const [loading, setloading] = useState(true);
  const [active, setActive] = useState(false);

  // const navigate = useNavigate(); 

  const handleOpen = ()=> {
    setActive(!active);
   }

  useEffect(()=> {
      setTimeout(()=> {
         setloading(false);
      }, 3000);
  })

  return (
    <>
      <div style={{padding : '10px', marginBottom : '5px',textAlign : 'right'}}> 
          <Button onClick= {handleOpen} style={{cursor: 'pointer'}} primary>Create Size Chart </Button>   
      </div>
     <div style={{height: '568px', margin : "0px 10px"}}>  
        <Layout>
            <Layout.Section oneThird>
                 <Card>
                     <div style={{height : '300px'}}>
                        <p style={{textAlign : "center"}}>This is first Box</p>
                     </div>
                 </Card>
            </Layout.Section>

            <Layout.Section oneHalf>
                 <Card>
                     <div style={{height : '300px', width : "100%"}}> 
                        <Spin spinning = {loading} size="large">
                        <EmptyState 
                            heading= "You haven't created any size charts yet"
                            image='https://cdn.shopify.com/s/files/1/2376/3301/products/emptystate-files.png'
                            >
                          <p> 
                            Click <Link to = "/createchart" >Create Size Chart</Link> to create size chart for your products. You can add custom rules to any product you want.
                          </p>
                          </EmptyState>
                          </Spin>
                     </div>
                 </Card>
            </Layout.Section>
            <Prompt active = {active} setActive = {setActive}/>
        </Layout>
     </div>
    </>
  );

}
