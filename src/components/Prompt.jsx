import { Card, Modal, Heading } from '@shopify/polaris';
import {React, useState, useCallback} from 'react';
import '../assets/style.css';
import {BsLayoutSplit, BsTable} from 'react-icons/bs';
import { useNavigate} from 'react-router-dom';


const Prompt = (show) => {
    const navigate = useNavigate();

  const handleChange = useCallback(()=>{
      show.setActive(false);
  }, []);


  const handleSimple = () =>{
      console.log("Clicked on Simple Table");
      navigate(`/createchart/table`);
  }

  const handleTabbed = () =>{
      console.log("Clicked on Tabbed Table");
    navigate(`/createchart/tabbedtable`);
}


  return (
    <>
       <div className='promptBox'>
            <Modal
               instant
               open = {show.active}
               onClose= {handleChange}
               title = "Get Started with "
               secondaryActions={[
                   {
                       content : 'Close',
                       onAction: handleChange,
                   }
               ]}
            >  
                <Modal.Section>
                    <div className='prompt'>
                        <div className='promptCard' onClick={handleSimple}>
                             <Card>
                                 <div className='card_1'>
                                     <BsTable/>
                                 </div>
                                 <Heading element='h3' >Simple Table</Heading>
                             </Card>
                        </div>    
                        <div className='promptCard' onClick={handleTabbed}>
                             <Card>
                                  <div className='card_2'>
                                      <BsLayoutSplit/>
                                 </div>
                                 <Heading element='h3'>Tabbed Table</Heading>
                             </Card>
                        </div>    
                    </div>
                </Modal.Section>
            </Modal>
       </div>
    </>
  )
}
export default Prompt;