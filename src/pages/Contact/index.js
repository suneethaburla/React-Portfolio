import React, {Component} from "react";
import ContactForm from "../../components/ContactForm";
import emailjs from "emailjs-com";

class Contact extends Component {

    state = {
        name:"",
        email:"",
        message:""
    }

    handleNameChange (event) {
        this.setState({name:event.target.value})
    }

    handleEmailChange (event) {
        this.setState({email:event.target.value})
    }

    handleMessageChange (event) {
        this.setState({message:event.target.value})
    }

     sendEmail = (event) => {
        event.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target, 'YOUR_USER_ID')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

}
render (){
    return (
    <div>
        <ContactForm
        submit = { this.sendEmail }
        />
    </div>
    );
}

}

export default Contact;