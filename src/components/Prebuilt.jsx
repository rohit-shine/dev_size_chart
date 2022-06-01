import React, {useCallback, useEffect, useState} from 'react';
import { Card, Heading, Modal} from '@shopify/polaris';
import {DraftOrdersMajor} from '@shopify/polaris-icons';
import "../assets/style.css";
import { Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
/***Import Images for the Product Charts */
import halfSleeve from '../assets/sleeve-shirt.jpg';
import sleeveDress from '../assets/sleeve-dress.jpg';
import blazer from '../assets/blazer.jpg';
import longPants from '../assets/long-pants.jpg';
import bra from '../assets/bra.png';
import panty from '../assets/briefs-woman.jpg';
import jacket from '../assets/jacket.jpg';
import shoes from '../assets/shoes.jpg';


export default function Prebuilt(create) {
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();


  //Manage States to control styling of each Product
  const [handleStyletxt_1, sethandleStyletxt_1] = useState();
  const [handleStyletxt_2, sethandleStyletxt_2] = useState();
  const [handleStyletxt_3, sethandleStyletxt_3] = useState();
  const [handleStyletxt_4, sethandleStyletxt_4] = useState();
  const [handleStyletxt_5, sethandleStyletxt_5] = useState();
  const [handleStyletxt_6, sethandleStyletxt_6] = useState();
  const [handleStyletxt_7, sethandleStyletxt_7] = useState();
  const [handleStyletxt_8, sethandleStyletxt_8] = useState();

  const handleClose = useCallback(() => {
    create.setActive(false);
    }, []);

   const HandleOn1 = ()  => {
      sethandleStyletxt_1({backgroundColor : '#9ee1ff'});
   }
   const  HandleOn2 = () =>{
    sethandleStyletxt_2({backgroundColor : '#9ee1ff'});
   }
    const  HandleOn3 = () =>{
      sethandleStyletxt_3({backgroundColor : '#9ee1ff'});
     }
     const  HandleOn4 = () =>{
      sethandleStyletxt_4({backgroundColor : '#9ee1ff'});
    }
     const  HandleOn5 = () =>{
      sethandleStyletxt_5({backgroundColor : '#9ee1ff'});
    }
     const  HandleOn6 = () =>{
      sethandleStyletxt_6({backgroundColor : '#9ee1ff'});
    }

     const  HandleOn7 = () =>{
      sethandleStyletxt_7({backgroundColor : '#9ee1ff'});
    }
     const  HandleOn8 = () =>{
      sethandleStyletxt_8({backgroundColor : '#9ee1ff'});
    }
   const HandleLeave1 = () => {
    sethandleStyletxt_1();
   }
   const HandleLeave2 =()=>{
    sethandleStyletxt_2();
   }
   const HandleLeave3 =()=>{
    sethandleStyletxt_3();
   }
   const HandleLeave4 =()=>{
    sethandleStyletxt_4();
   }
   const HandleLeave5 =()=>{
    sethandleStyletxt_5();
   }
   const HandleLeave6 =()=>{
    sethandleStyletxt_6();
   }
   const HandleLeave7 =()=>{
    sethandleStyletxt_7();
   }
   const HandleLeave8 =()=>{
    sethandleStyletxt_8();
   }
  const HandleTableClick1 = () => {
      navigate("/createchart");
  }

  useEffect(()=> {
    setTimeout(()=> {
       setloading(false);
    }, 2000);
   })

   const handleScratch = () => {
      console.log("Clicked on Scratch");
      navigate("/createchart");
   }
/**-------------X------------ Return statement Start-------------- */

  return (
   <div style={{height: '500px'}}>
      <Modal
        instant
        open={create.active}
        onClose={handleClose}
        title="Choose Our Predefined Size Chart"
        secondaryActions={[
          {
            content: 'Close',
            onAction: handleClose,
          },
        ]}
      >

        <Modal.Section>
         <Spin spinning = {loading} size="large">
           <div className='CustomLayout'>
              <div className='block' onMouseOver = {HandleOn1} onMouseLeave = {HandleLeave1} >
                  <Card>
                    <div className="sub-block">
                       <img src={halfSleeve} alt = "half Sleeve" height='100%' width= '100%'/>
                    </div>
                      <h2 style={handleStyletxt_1} onClick= {HandleTableClick1} >Half Sleeve</h2>
                  </Card>
              </div>
              <div className='block' onMouseOver={HandleOn2} onMouseLeave = {HandleLeave2} >
                  <Card>
                    <div className = "sub-block">
                       <img src={sleeveDress} alt = "Sleeve Dress" height='100%' width= '100%'/>
                    </div>
                     <h2 style = {handleStyletxt_2} > Sleeve Dress </h2>
                  </Card>
              </div>
              <div className='block' onMouseOver={HandleOn3} onMouseLeave = {HandleLeave3}>
                  <Card>
                    <div className = "sub-block">
                        <img src={blazer} alt = "Blazer" height='100%' width= '100%'/>
                    </div>
                    <h2 style={handleStyletxt_3}>Blazer</h2>
                  </Card>
              </div><div className='block' onMouseOver={HandleOn4} onMouseLeave = {HandleLeave4}>
                  <Card>
                    <div className = "sub-block">
                        <img src={jacket} alt = "Jacket" height='100%' width= '100%'/>
                    </div>
                    <h2 style={handleStyletxt_4}>Jacket</h2>
                  </Card>
              </div>
           </div>

           <div className='CustomLayout'>
              <div className='block' onMouseOver={HandleOn5} onMouseLeave = {HandleLeave5}>
                  <Card>
                    <div className = "sub-block">
                        <img src={longPants} alt = "Long Pants" height='100%' width= '100%'/>
                    </div>
                    <h2 style = {handleStyletxt_5}>Long Pants</h2>
                  </Card>
              </div>
              <div className='block' onMouseOver={HandleOn6} onMouseLeave = {HandleLeave6}>
                  <Card>
                    <div className = "sub-block">
                        <img src={bra} alt = "Bra" height='100%' width= '100%'/>
                    </div>
                    <h2 style={handleStyletxt_6}>Bra</h2>
                  </Card>
              </div>
              <div className='block' onMouseOver={HandleOn7} onMouseLeave = {HandleLeave7 }>
                  <Card>
                    <div className = "sub-block">
                        <img src={panty} alt = "Panty" height='100%' width= '100%'/>
                    </div>
                    <h2 style={handleStyletxt_7}>Panty</h2>
                  </Card>
              </div><div className='block' onMouseOver={HandleOn8} onMouseLeave = {HandleLeave8}>
                  <Card>
                    <div className = "sub-block" >
                    <img src={shoes} alt = "Shoes" height='100%' width= '100%'/>
                    </div>
                    <h2 style= {handleStyletxt_8} >Shoes </h2>
                  </Card>
              </div>
           </div>
         </Spin>
        </Modal.Section>
        <Modal.Section >
            <div className='emptySection'>
                <Card>
                    <div style={{width : '100%'}} className = 'emptyBlock' onClick={handleScratch}>
                          <div style={{width : '20%'}} className="emptyIcon">  
                            {<DraftOrdersMajor/>}
                          </div>
                        <div style={{width : '80%'}} className = 'blockTxt'> 
                           <Heading> Create Your Own Size Chart</Heading>
                           <p>Completely start from Scratch</p>
                        </div>
                    </div>
                </Card>
             </div>
        </Modal.Section>
      </Modal>
    </div>
  );
}
