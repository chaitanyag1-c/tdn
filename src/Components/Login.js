import React, { Component } from 'react'
import './signup.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Login= ()=> {
    function watch(){
        let pass=document.getElementById('pass');
        let pass1=document.getElementById('pass1')        

        if(pass.type=='text' && pass1.type=='text')
        {
            pass.type='password';
            pass1.type='password';
        }
        else{
            pass.type='text';
            pass1.type='text';
        }
    }
    
    
        return (
            <section className="login-container">
            <div className="container active">
                 <div className="user signupBx">
                <div className="formBx">
                  <form action="/otp">
                    <h2>Create an account</h2>
                    <input type="text" name placeholder="Username" />
                    <input type="email" name placeholder="Email Address" />
                    <input type="password" id="pass" name placeholder="Create Password" />
                    <div className="input-group-text" style={{display:'inline-block'}}><i className="fas fa-eye-slash" id="eye" onClick={watch} /></div>

                    <input type="password" id="pass1" name placeholder="Confirm Password" />
                   
  {/* <label className="sr-only" htmlFor="password">Password</label> */}
  {/* <div className="input-group mb-2 mr-sm-2">
    <div className="input-group-prepend">
    </div>
    <input type="password" className="form-control" id="password" placeholder="Type Your Password" />
  </div> */}

                    <input type="submit"   />
                    <p className="signup">
                      Already have an account ?
                      <a href="/signup">Sign in.</a>
                    </p>
                  </form>
                </div>
                <div className="imgBx"><img src="https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/08/cheap-chickpea-bean-southwest-chili.jpg?fit=1200%2C879&ssl=1" alt="" /></div>
              </div>
            </div>
            </section>
        )
    }


export default Login
