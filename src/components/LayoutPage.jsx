import React, {useCallback,  useState} from 'react';
import { Card, Modal} from '@shopify/polaris';
import {BsTable, BsTextLeft, BsImage, BsChevronBarExpand, BsYoutube, BsReverseLayoutTextWindowReverse, BsChatQuoteFill, BsGlobe} from 'react-icons/bs';
import "../assets/style.css";

export default function LayoutPage(props) {

  //Manage States to control
  const [handletxt1, sethandletxt1] = useState("Table");
  const [handlestyletxt1, sethandlestyletxt1] = useState();
  
  const [handletxt2, sethandletxt2] = useState("Text");
  const [handlestyletxt2, sethandlestyletxt2] = useState();

  const [handletxt3, sethandletxt3] = useState("Image");
  const [handlestyletxt3, sethandlestyletxt3] = useState();

  const [handletxt4, sethandletxt4] = useState("Separator");
  const [handlestyletxt4, sethandlestyletxt4] = useState();
  
  const [handletxt5, sethandletxt5] = useState("Video");
  const [handlestyletxt5, sethandlestyletxt5] = useState();
  
  const [handletxt6, sethandletxt6] = useState("Layout");
  const [handlestyletxt6, sethandlestyletxt6] = useState();
  
  const [handletxt7, sethandletxt7] = useState("Quotes");
  const [handlestyletxt7, sethandlestyletxt7] = useState();
  
  const [handletxt8, sethandletxt8] = useState("Int. Conv. Chart");
  const [handlestyletxt8, sethandlestyletxt8] = useState();


  // const button = useRef();

  const handleClose = useCallback(() => {
    props.setActive(false);
    // requestAnimationFrame(() => button.current.querySelector('button').focus());
    }, []);

   const HandleOn1 = ()  => {
      sethandletxt1("Add to Layout");
      sethandlestyletxt1({backgroundColor : '#9ee1ff'});
   }

   const  HandleOn2 = () =>{
      sethandletxt2("Add to Layout");
      sethandlestyletxt2({backgroundColor : '#9ee1ff'});
   }

    const  HandleOn3 = () =>{
       sethandletxt3("Add to Layout");
       sethandlestyletxt3({backgroundColor : '#9ee1ff'});
     }

     const  HandleOn4 = () =>{
      sethandletxt4("Add to Layout");
      sethandlestyletxt4({backgroundColor : '#9ee1ff'});
    }


     const  HandleOn5 = () =>{
      sethandletxt5("Add to Layout");
      sethandlestyletxt5({backgroundColor : '#9ee1ff'});
    }

     const  HandleOn6 = () =>{
      sethandletxt6("Add to Layout");
      sethandlestyletxt6({backgroundColor : '#9ee1ff'});
    }

     const  HandleOn7 = () =>{
      sethandletxt7("Add to Layout");
      sethandlestyletxt7({backgroundColor : '#9ee1ff'});
    }

     const  HandleOn8 = () =>{
      sethandletxt8("Add to Layout");
      sethandlestyletxt8({backgroundColor : '#9ee1ff'});
    }

   const HandleLeave1 = () => {
     sethandletxt1("Table");
     sethandlestyletxt1();
   }

   const HandleLeave2 =()=>{
      sethandletxt2("Text");
      sethandlestyletxt2();
   }
   
   const HandleLeave3 =()=>{
    sethandletxt3("Image");
    sethandlestyletxt3();
   }

   const HandleLeave4 =()=>{
    sethandletxt4("Separator");
    sethandlestyletxt4();
   }

   const HandleLeave5 =()=>{
    sethandletxt5("Video");
    sethandlestyletxt5();
   }

   const HandleLeave6 =()=>{
    sethandletxt6("Layout");
    sethandlestyletxt6();
   }

   const HandleLeave7 =()=>{
    sethandletxt7("Quotes");
    sethandlestyletxt7();
   }

   const HandleLeave8 =()=>{
    sethandletxt8("Int. Conv. Chart");
    sethandlestyletxt8();
   }

  const HandleTableClick1 = () => {
     console.log("Button Clicked!");
  }

   /**-------------X------------ Return statement Start-------------- */
  return (
    <div style={{height: '500px'}}>
      {/* <div ref={button}>
        <Button onClick={handleOpen}>Add Layout Block</Button>
      </div> */}
      <Modal
        instant
        open={props.active}
        onClose={handleClose}
        title="Add new layout block"
        secondaryActions={[
          {
            content: 'Close',
            onAction: handleClose,
          },
        ]}
      >
        <Modal.Section>
           <div className='CustomLayout'>
              <div className='block' onMouseOver={HandleOn1} onMouseLeave = {HandleLeave1} >
                  <Card>
                    <div className="sub-block">
                      <BsTable/>
                    </div>
                      <h2 style={handlestyletxt1} onClick= {HandleTableClick1} >{handletxt1}</h2>
                  </Card>
              </div>
              <div className='block' onMouseOver={HandleOn2} onMouseLeave = {HandleLeave2} >
                  <Card>
                    <div className = "sub-block">
                     <BsTextLeft/>
                    </div>
                     <h2 style={handlestyletxt2}>{handletxt2}</h2>
                  </Card>
              </div>
              <div className='block' onMouseOver={HandleOn3} onMouseLeave = {HandleLeave3}>
                  <Card>
                    <div className = "sub-block">
                      <BsImage/>
                    </div>
                    <h2 style={handlestyletxt3}>{handletxt3}</h2>
                  </Card>
              </div><div className='block' onMouseOver={HandleOn4} onMouseLeave = {HandleLeave4}>
                  <Card>
                    <div className = "sub-block">
                      <BsChevronBarExpand/>
                    </div>
                    <h2 style={handlestyletxt4}>{handletxt4}</h2>
                  </Card>
              </div>
           </div>

           <div className='CustomLayout'>
              <div className='block' onMouseOver={HandleOn5} onMouseLeave = {HandleLeave5}>
                  <Card>
                    <div className = "sub-block">
                      <BsYoutube/>
                    </div>
                    <h2 style={handlestyletxt5}>{handletxt5}</h2>
                  </Card>
              </div>
              <div className='block' onMouseOver={HandleOn6} onMouseLeave = {HandleLeave6}>
                  <Card>
                    <div className = "sub-block">
                     <BsReverseLayoutTextWindowReverse/>
                    </div>
                    <h2 style={handlestyletxt6}>{handletxt6}</h2>
                  </Card>
              </div>
              <div className='block' onMouseOver={HandleOn7} onMouseLeave = {HandleLeave7 }>
                  <Card>
                    <div className = "sub-block">
                      <BsChatQuoteFill/>
                    </div>
                    <h2 style={handlestyletxt7}>{handletxt7}</h2>
                  </Card>
              </div><div className='block' onMouseOver={HandleOn8} onMouseLeave = {HandleLeave8}>
                  <Card>
                    <div className = "sub-block">
                      <BsGlobe/>
                    </div>
                    <h2 style={handlestyletxt8}>{handletxt8}</h2>
                  </Card>
              </div>
           </div>
        </Modal.Section>
      </Modal>
    </div>
  );
}
