import React from 'react'


const  Register = () =>{
  
    return (
        <div className="container-fluid ">
        <main className=" d-flex justify-content-center ">
        <form className="mx-5  my-5" >
          
          <br />
          <br />
          <h1 className="h3 mb-3 fw-normal">write all your informations here..</h1>
          <div className="row">
  <div className="col">
    <input type="text" className="form-control" placeholder="name" aria-label=" user name"  />
  </div>
  <div className="col">

  </div>
</div>
 
             
          <div className="form-floating ">
            <input type="email" className="form-control w-100 " id="email"  placeholder="name@example.com" />
            <label htmlFor="floatingInput ">Email address</label>
          </div>
          <div className="form-floating ">
              
            <input type="password" className="form-control w-100 " id="password" placeholder="Password"   />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating ">
          </div>
          <div className="checkbox mb-3">
            <label>
             
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-outline-dark " type="submit" value="submit form">Register</button>
          
        </form>
      </main>
      </div>
  
    )
}

export default Register
