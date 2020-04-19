import React from "react";

import { Link } from "react-router-dom";

const ContactForm = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-header">
                        <Link to="/Contact">
                            <h1> Let's Talk! </h1>
                        </Link>
                    </div>
                </div>
            </div>

            <form onSubmit = {props.submit} method = "POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" name="name" onChange={props.handleNameChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" onChange={props.handleEmailChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type your message here.."
                        name ="message" onChange={props.handleEmailChange} rows="5"></textarea>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </div>
            </form>
        </div>
    )

}

export default ContactForm;