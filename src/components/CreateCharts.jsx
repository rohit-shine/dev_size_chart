import {React, useState, useCallback} from "react";
import { Button , Page, Banner,Icon, Card, Layout,TextContainer,Heading, TextField, Select} from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
import "../assets/style.css";
import {
    MobileBackArrowMajor,QuestionMarkInverseMajor,PlusMinor
  } from '@shopify/polaris-icons';
import LayoutPage from "./LayoutPage";
import SizeChart from './SizeChart';

/***End of --------------X------------- Importing Code */


/***Function code goes here */
export const CreateCharts = () => {
     const navigate = useNavigate();
     const [text, setText] = useState('');
     const [active, setActive] = useState(false);

     const [selected, setSelected] = useState('draft');

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    {label: 'Draft', value: 'draft'},
    {label: 'Active', value: 'active'},
  ];

    const HandlerBack = () => {
         navigate("/sizechart")
    }
    const HandlerSave = () => {
         console.log("You have clicked Save Button")
    } 
    const handleTextChange = (e) => {
          setText(e);
    }
    const handleOpen = ()=> {
       setActive(!active);

      }
    return(
       <>
          <Page fullWidth>
                    <div className="btn">
                            <div className="btnLeft">
                            
                            <Button onClick={HandlerBack} ><Icon
                               source={MobileBackArrowMajor}
                                color="base" /></Button>
                            </div>
                            <div className="btnRight">
                            <Button onClick={HandlerSave} primary={true}>Save</Button>
                            </div>
                    </div>
               <div>
                <Banner
                    title="We noticed that, you might want to change something"
                    status="warning" >
                            <li>
                               This sizing has no matching condition. Make sure to add one
                            </li>
                            <li>
                              Contains advanced layouts (tabs) only available in premium plan
                            </li>
                  </Banner>
               </div>
        </Page>    
              <Page fullWidth>
                 <div className=" chartNameBlock ">
                    <div className="textfield">
                        <TextField
                        value={text}
                        onChange={handleTextChange}
                        type= "text"
                        autoComplete="off"
                        placeholder="Give your size chart's name"
                        />
                    </div>
                    <div className="toggleSwitch">
                        <Select
                              // label="Status"
                              options={options}
                              onChange={handleSelectChange}
                              value={selected}
                        />
                    </div>
                 </div>
              </Page>

        <Page fullWidth>
            <Layout>
               <Layout.Section oneThird>
                  <Card sectioned>
                     <TextContainer>
                        <div className='LayoutHeader'>
                          <Heading>Size Chart Layout </Heading>
                              <span style={{marginLeft : '5px'}} className = "iconQuestionMark" title="Click to learn more!">
                                 <Icon source={QuestionMarkInverseMajor}/>
                              </span>
                        </div>
                     </TextContainer>
                          <Card.Section sectioned>
                             <div>
                                <SizeChart/>
                             </div>
                          </Card.Section>
                          <Card.Section>
                              <Button primary = {true} icon={PlusMinor} onClick= {handleOpen} > Add Layout Block</Button>
                          </Card.Section>
                  </Card>
               </Layout.Section>
               <Layout.Section oneThird>
                  <Card sectioned>
                     <TextContainer>
                        <div style={{textAlign : 'center'}}>
                            <Heading>Preview</Heading>
                        </div>
                        <div>
                            {/* <SizeChart /> */}
                        </div>
                     </TextContainer>
                  </Card>
               </Layout.Section>
            </Layout>
            </Page>       
           <LayoutPage active = {active} setActive = {setActive}/> 
       </>
    )
}