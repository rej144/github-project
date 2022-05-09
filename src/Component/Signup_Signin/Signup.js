
import React, {useState} from 'react'

import { NavLink } from 'react-router-dom';
import "./Signup.css";




const Signup = () => {


    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });

     console.log(udata);

    const add = (e) => {
        const { name, value } = e.target;
        // console.log(name,value);

        setUdata(() => {
            return {
                ...udata,
                [name]: value
            }
        })
    };
return (
    <section>
        
        <div className="sign_container">
            <div className="sign_header">
                <img src="./télécharger.png"  alt="" />
            </div>
            <div className="sign_form">
                <form >
                    <h1>Create account</h1>
                    <div className="form_data">
                        <label htmlFor="name">Your name</label>
                        <input type="text" name="fname"onChange={add}
                            id="name" />
                    </div>
                    <div className="form_data">
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" onChange={add}
                            id="email" />
                    </div>
                    <div className="form_data">
                        <label htmlFor="mobile">Mobile number</label>
                        <input name="mobile" onChange={add}
                            id="mobile" />
                    </div>
                    <div className="form_data">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={add}
                            id="password" placeholder="At least 6 characters" />
                    </div>
                    <div className="form_data">
                        <label htmlFor="passwordg">Password again</label>
                        <input type="password" name="cpassword" onChange={add}
                            id="passwordg" />
                    </div>
                    <button className="signin_btn" >Continue</button>

                    

                    <div className="signin_info">
                        <p>Already have an account?<NavLink to="/login">Sign in</NavLink></p>
                       
                    </div>
                </form>
            </div>
        </div>
    </section>
)
}

export default Signup;

