import React from 'react';

const Contact = () => {
    return (
        <section className="contact my-5 py-5 bg-dark">
        <div className="container">
            <div className="section-header text-center text-white mb-5">
                 <h5 className="text-primary">Contact</h5>
                 <h1>Always  connect with us</h1>
            </div>
            <div className="col-md-9 mx-auto">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control mt-3" placeholder="Email Address *"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control mt-3" placeholder="Subject *"/>
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control mt-3" id="" cols="20" rows="40" placeholder="Message *"></textarea>
                    </div>
                    <div className="form-group text-center">
                        <button type="button" className="btn btn-primary mt-3"> Submit </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Contact;