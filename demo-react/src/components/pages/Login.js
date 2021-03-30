import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

function Login() {
  return (
    <div className="signup">
      <div className="signup__bgimage">
        <div className="signup__container">
            <div className="signup__card">
                <form>
                    
                    <div className="form__header">
                    </div>

                    <div className="form__body">
                   
                        <div className="form__body__flname">
                            <input class="input__name" type="text" name="firstname" placeholder="Firstname"></input>
                            <input class="input__name" type="text" name="lastname" placeholder="Lastname"></input>
                        </div>
                        <div className="form__body__email">
                            <input class="input" type="email" name="email" placeholder="Email"></input>
                        </div>
                        <div className="form__body__pass">
                            <input class="input" type="password" name="Password" placeholder="Password"></input>
                        </div>
                        <div className="form__body__conpass">
                            <input class="input" type="password" name="Confirm Password" placeholder="Confirm Password"></input>
                        </div>
                        <div className="form__body__btn">
                            <button class="form__body__btn__login">Login</button>
                        </div>
                    </div>

                    <div className="form__footer">
                        <p className="form__footer__para">
                            DON'T HAVE AN ACCOUNT?
                        </p>
                        <Link to='sign-up'>
                            <p className="form__footer__signuptext">
                                Sign up
                            </p>
                        </Link>
                    </div>

                </form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
