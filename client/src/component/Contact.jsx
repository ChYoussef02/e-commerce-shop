import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Questions ? </h1>
                        <hr />

                    </div>

                </div>
                <div className="row ">
                    <div className="col-md 5 d-flex justify-content-center">
                    <img src="data:image/jpeg;base64,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" alt="contact us"
                        height="300px" width ="300px" />
                      
                </div>
                <div className="col-md-6">
                    <form>
                    <div>
                        <div class="mb-3">
                            <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleForm" placeholder="John Smith" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleForm" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" class="form-label">type in..</label>
                            <textarea class="form-control" id="exampleForm" rows={2} defaultValue={""} />
                        </div>
                        <button type="submit" class="btn btn-outline-dark">Send Message</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact
