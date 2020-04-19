import React from "react";

import { Link } from "react-router-dom";

function Contact() {

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

            <form>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Suneetha Burla" />
                </div>

                <div className="form-group">
                    <label for="exampleFormControlInput1">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>

                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type your message here.."
                        rows="3"></textarea>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </div>
            </form>
        </div>
    )

}

export default Contact;