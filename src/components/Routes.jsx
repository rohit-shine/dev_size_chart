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
import TableData from "./TableData";
import Prompt from "./Prompt";

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
               <Route path = "tabledata" element = {<TableData/>}/>
               <Route path = "prompt" element = {<Prompt/>} />
            </Routes>
            </>
    )
}

export default RoutesMenu;