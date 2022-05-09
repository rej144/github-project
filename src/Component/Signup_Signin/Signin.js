import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';



const Sign_in = () => {

 const[data,setdata]=useState({
     email:"",
     password:""
 })
 
 console.log(data)

 const ADD=(e)=>{
     const{name,value}=e.target
    
  
    setdata({...data,[name]:value})
}

    

return (
    <section>
        <div className="sign_container">
            <div className="sign_header">
                <img src="./télécharger.png" alt="signupimg" />
            </div>
            <div className="sign_form">
                <form >
                    <h1>Sign-In</h1>

                    <div className="form_data">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={ADD} name="email"
                            id="email" />
                    </div>
                    <div className="form_data">
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={ADD} name="password"
                           
                            id="password" placeholder="At least 6 characters" />
                    </div>
                    <button  className="signin_btn">Continue</button>
                </form>
               
            </div>
            <div className="create_accountinfo">
                <p>New to Amazon?</p>
                 <NavLink to="/register"><button> Create your Amazon Account</button></NavLink>
                
            </div>
        </div>

    </section>
)
}

export default Sign_in
