import React from 'react'
import { Link } from 'react-router-dom'



//baddel couleur fi about Us 
const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1> 
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Nemo, voluptatum voluptatem. Molestias, est accusamus exercitationem aspernatur, aliquam 
                             quasi provident excepturi temporibus distinctio sunt labore explicabo dolores cupiditate facere
                             blanditiis possimus!
                        </p>
                        <Link to="/contact" className="btn bton-outline-primary px-3"></Link>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="data:image/png;base64,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" alt="about US"
                        height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About