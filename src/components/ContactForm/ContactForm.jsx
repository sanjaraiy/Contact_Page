import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from 'react';
function ContactForm() {
    
    //---------hook variables (capable to re-render)---------
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [text,setText]=useState('');

   //---------normal variables(not capable to re-render)---------
  //  let name="sanjay";
  //  let email='sanjay@gmail.com';
  //  let text='support';

   const onViaCallSubmit = ()=>{
    console.log("I am from call");
   }

  const onSubmit =(event)=>{
    event.preventDefault()
     
    // name=event.target[0].value;
    // email=event.target[1].value;
    // text=event.target[2].value;
     
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)

    // console.log(event);
    // console.log("name:",event.target[0].value);
    // console.log("email:",event.target[1].value);
    // console.log("text:",event.target[2].value);

  }

  return (
    <section className={styles.container}>
       <div className={styles.contact_form}>
           <div className={styles.top_btn}>
              <Button 
                  text="VIA SUPPORT CHAT"
                  icon={<MdMessage fontSize='24px'></MdMessage>}
                ></Button>
              <Button 
                  onClick={onViaCallSubmit}
                  text="VIA CALL"
                  icon={<IoIosCall fontSize='24px'/>}
                ></Button>
            </div>
            <Button 
                isOutline={true}
                text="VIA EMAIL FORM" 
                icon={<MdOutlineEmail fontSize='24px'/>}
            ></Button>
            <form onSubmit={onSubmit}>
               <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' />
               </div>
               <div className={styles.form_control}>
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name='email' />
               </div>
               <div className={styles.form_control}>
                    <label htmlFor="text">TEXT</label>
                    <textarea rows='8' name='text' />
               </div>
              <div style={{
                display:'flex',
                justifyContent:'end'
              }}>
                <Button text="Submit" ></Button>
              </div>
                <div>
                  {
                      name + "  " + email + "  " + text 
                  }
                </div>
            </form>
        </div>
        <div className={styles.contactImage}>
          <img src="/Images/service.svg" alt="service" />
        </div>
    </section>
  )
}

export default ContactForm