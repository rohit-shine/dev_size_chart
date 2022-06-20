import React, {useCallback} from 'react';
import { Card, Modal} from '@shopify/polaris';
import {BsTable, BsTextLeft, BsImage, BsChevronBarExpand, BsYoutube, BsReverseLayoutTextWindowReverse, BsChatQuoteFill, BsGlobe} from 'react-icons/bs';
import "../assets/style.css";

export default function LayoutPage(props) {

  //Manage States to control

  const handleClose = useCallback(() => {
    props.setActive(false);
    }, []);

  const modalData = [
   {title: 'Table', icon:<BsTable/>},
   {title: 'Text', icon : <BsTextLeft/>},
   {title : 'Image', icon : <BsImage/>},
   {title : 'Divider', icon : <BsChevronBarExpand/>},
   {title : 'Youtube', icon : <BsYoutube/>},
   {title : 'Layout', icon : <BsReverseLayoutTextWindowReverse/>},
   {title : 'Quotes', icon : <BsChatQuoteFill/>},
   {title : 'Int. Conv. Chart', icon : <BsGlobe/>},
  ]


const handleBlock = (data) => {

    const showComponent = props.showComponent;
    const newarry = [...showComponent]
    newarry.push(data);
    props.setShowComponent(newarry);
    props.setActive(false);
}
   /**-------------X------------ Return statement Start-------------- */

  return (
    <div style={{height: '500px'}}>
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
          <div className='modalDiv'>
           {modalData.map((data, index) => {
                return(
                  <div className='modalData1' key={index}>
                     <div className='block' onClick={()=>handleBlock(data.title)} >
                          <Card>
                            <div className="sub-block">
                               {data.icon}
                            </div>
                              <h2>{data.title}</h2>
                          </Card>
                     </div>
                 </div>
                )
              })}
           </div>
        </Modal.Section>
      </Modal>
    </div>
  );
}
