import React from 'react';
import { useForm } from 'react-hook-form'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css'


export function Contact() {

   const { register, handleSubmit, errors } = useForm();
   const onSubmit = data => { 
       window.emailjs.send('gmail', 'template_lVWbBjYi', data).then(res => {
           console.log('Email successfully sent!');
       }).catch(err => console.error('Oh well, you failed.', err));
       const content = (
           <div className="text-center contact_msg">
               <i className="fa fa-check-circle"></i><br/>
               <p>Your message was sent successfully. Thanks!</p>
           </div>
       )
       PopupboxManager.open({ content })
   }

   var nameClass = errors.name ? "form-control error" : "form-control"; 
   var emailClass = errors.email ? "form-control error" : "form-control"; 
   var subjectClass = errors.subject ? "form-control error" : "form-control"; 
   var messageClass = errors.message ? "form-control error" : "form-control";
    
   return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form onSubmit={handleSubmit(onSubmit)} id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="name">Name <span className="required">*</span></label>
						   <input type="name" defaultValue="" ref={register({ required: true })} id="name" name="name" className={nameClass}/>
                  </div>

                  <div>
						   <label htmlFor="email">Email <span className="required">*</span></label>
						   <input type="email" defaultValue="" ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} className={emailClass} size="35" id="email" name="email"/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" ref={register({ required: true })} name="subject" id="subject" className={subjectClass} />
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea ref={register({ required: true })} name="message" rows="7" id="message" className={messageClass}></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   Abhishek Chand<br />
						   Keshav Puram <br />
						   New Delhi, 110035<br />
						   <span>+919818047708</span>
					   </p>
				   </div>
               
            </aside>
      </div>
      <PopupboxContainer />
   </section>
    );
  }


export default Contact;
