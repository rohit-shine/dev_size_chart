import { Routes,Route } from "react-router-dom";
import { CreateCharts } from "./CreateCharts";
import CreateLists from "./CreateLists";
import ContactUs from "./ContactUs";
import Settings from "./Settings";
import Sheet from "./Sheet";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Convertor from "./Convertor";
import LayoutPage from "./LayoutPage";
import Prompt from "./Prompt";
import Tabbed from "./LayoutComponent/Tabbed";
import ContextMenu from "./ContextMenu";

const RoutesMenu = ()=>{
    return(
        <>
           <Routes>
               <Route path = "/" element = {<Dashboard/>} />
               <Route path = "sizechart"  element = {<CreateLists/>}  />  
               <Route path = "createchart" element = {<CreateCharts/>}  />  
               <Route path = "contactus"  element = {<ContactUs/>} />  
               <Route path = "settings" element = {<Settings/>} />     
               <Route path = "sheet" element = {<Sheet/>} />  
               <Route path = "products" element = {<Products/>} />
               <Route path = "convertor" element = {<Convertor/>} />
               <Route path = "layout" element = {<LayoutPage/>} />
               <Route path = "prompt" element = {<Prompt/>} />
               <Route path = "tabbedtable" element = {<Tabbed/>} />
               <Route path = "context" element = {<ContextMenu/>} />
            </Routes>
            </>
    )
}

export default RoutesMenu;