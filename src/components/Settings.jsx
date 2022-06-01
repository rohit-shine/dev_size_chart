import { Switch} from "antd";
import { Card, Tabs } from "@shopify/polaris";
import { CheckOutlined, CloseOutlined} from '@ant-design/icons';
import React, {useCallback, useState} from "react";
import 'antd/dist/antd.css';
import "../assets/style.css";

const Settings = () => {
  
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(selectedTabIndex => setSelected(selectedTabIndex), []);

  const tabs = [{
    id: 'Setting1',
    content: 'General Setting',
    accessibilityLabel: 'All customers',
    panelID: 'all-customers-content-1'
    
  }, {
    id: 'accepts-marketing-1',
    content: 'Size Chart',
    panelID: 'accepts-marketing-content-1'
  }, {
    id: 'repeat-customers-1',
    content: 'Recommender',
    panelID: 'repeat-customers-content-1'
  }, {
    id: 'prospects-1',
    content: 'Prospects',
    panelID: 'prospects-content-1'
  }];
        
    return(
        <>
          <div style={{textAlign: 'right', padding: '10px'}}>
              <span style={{marginRight : '5px'}}>Disable</span> 
               <Switch 
                  checkedChildren = {<CheckOutlined/>}
                  unCheckedChildren = {<CloseOutlined/>}
                  defaultChecked              
                />
              <span style={{marginLeft : '5px'}}>Enable</span> 
          </div>

           <div className="settingTab">
              <Card>
                  <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted={false}>
                    <Card.Section title={tabs[selected].content}>
                     <p>Tab {selected} selected</p>
                    {selected == 1 ? <p> hello there Setting!</p> : null}
                </Card.Section>
                </Tabs>
              </Card>
           </div>
        </>
    )
}
export default Settings;

