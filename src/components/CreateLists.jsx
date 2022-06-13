import React, {useEffect, useState} from 'react';
import {Button, Card, EmptyState, Layout } from '@shopify/polaris';
import {Link} from 'react-router-dom';
import { Spin, Collapse } from 'antd';
import Prompt from './Prompt';
const { Panel } = Collapse;

const text = `
  The best Size Chart application on shopify. You can use this however you are. It can be customized very easily.
  it can be found as a welcome guest in many households across the world.
`;

export default function createLists() {

  const [loading, setloading] = useState(true);
  const [active, setActive] = useState(false);

  const handleOpen = ()=> {
    setActive(!active);
   }

  useEffect(()=> {
      setTimeout(()=> {
         setloading(false);
      }, 3000);
  })

  const onChange = (key) => {
     console.log(key)
  }

  return (
    <>
      <div style={{padding : '10px', marginBottom : '5px',textAlign : 'right'}}> 
          <Button onClick= {handleOpen} style={{cursor: 'pointer'}} primary>Create Size Chart </Button>   
      </div>
     <div style={{height: '568px', margin : "0px 10px"}}>  
        <Layout>
            <Layout.Section oneThird>
                 <Card>
                     <div style={{height : '300px', margin:'5px'}}>
                        <p style={{textAlign : "center", textDecoration: "underline"}}>FAQ</p>
                        <Collapse defaultActiveKey={['1']} onChange={onChange}>
                             <Panel header="Why to use this Size Chart" key="1">
                               <p>{text}</p>
                             </Panel>
                            <Panel header="How to use this Size Chart " key="2">
                              <p>{text}</p>
                            </Panel>
                            <Panel header="How to change the layout of the Size Chart" key="3">
                               <p>{text}</p>
                            </Panel>
                         </Collapse>
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
