import {useState, useCallback} from 'react';
import {Card,FormLayout,TextField,Button,Form, Toast} from '@shopify/polaris';
import axios from 'axios';
import '../assets/style.css';

const ContactUs = ()=> {

    const [uname, setuname] = useState("");
    const [umail, setUmail] = useState("contact@fokatguru.in");
    const [userEmail, setUserEmail] = useState("");
    const [textArea , setTextArea] = useState("");
    const [successMsg, setsuccessMsg] = useState("");
    const [btnload, setbtnload] = useState(false);
    // const [active, setActive] = useState(false);
    const [mailSend, setmailSend] = useState("Send Mail");
  
    // const toggleActive = useCallback(() => setActive((active) => !active), []);
    

    const HandleName = (e) =>{
        setuname(e);
    }

    const HandleEmail = (e) =>{
        setUmail(e);
    }

    const HandleUserEmail =(e)=>{
        setUserEmail(e)
    }

    
    // const toastMarkup = active ? <Toast content= "hello" onDismiss = {toggleActive} ></Toast> : null;
    const HandleSubmit = async(e) => {
            e.preventDefault();
            setbtnload(true);
             let data = {
                uname : uname,
                umail : umail,
                userEmail: userEmail,
                message : textArea
             }
             console.log(data.uname);
             console.log(data.umail);
             console.log(data.userEmail);
             console.log(data.message);

        await axios.post("/sendmail",data,{
            method : 'POST',
            header : {
                'content-type' : 'application/json'
            }
        })
        .then(()=>{
            setbtnload(false);
            setsuccessMsg("Mail has been sent successfully");
        }).catch(err=>console.log(err));

    }
    return(
        <>
          <div className='contact'>
           <Card title="For any query mail us" sectioned> 
             <Form method = "post">
             <FormLayout>
                <TextField placeholder='Enter Name Here' onChange={HandleName } autoComplete="off" value={uname} name="uname" required/>
              <TextField
                    type="email"
                    onChange={HandleEmail}
                    autoComplete="email"
                    value = {umail}
                    name = "umail"
                    disabled
                />
                <TextField
                    type="email"
                    onChange={HandleUserEmail}
                    autoComplete="email"
                    name="userEmail"
                    placeholder='Enter Your Email Here'
                    value = {userEmail}
                    required
                    requiredIndicator
                />
                <TextField 
                    type='textarea' 
                    onChange={setTextArea} 
                    value = {textArea} 
                    name="message"
                    multiline = {3}
                    maxLength="255"
                    placeholder = 'Enter Your Message here'
                />
                <div style={{textAlign: 'center'}}>
                   <Button submit onClick={HandleSubmit} loading = {btnload} >{mailSend}</Button>
                </div>
                 <p><b>{successMsg}</b></p>
              </FormLayout>
             </Form>
                 <div className='toastShow'>
                    {/* {toastMarkup} */}
                 </div>
           </Card>
           </div>
        </>
    )
}

export default ContactUs;