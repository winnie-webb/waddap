import React, { useState } from 'react';
import "./Signup.scss"
import { Formik } from 'formik';
import DobPicker from './DobPicker';
import logo from '../../assets/logo-black.png'
function Signup() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    return (
        <section className="signup">
            <img className="signup__logo" src={logo}></img>
            <Formik
                initialValues={{ email: '', password: '' }}
            >

                {({ isSubmitting }) => (
                    <form className="signup__form">
                        <div className="signup__form-wrapper signup__form__name">
                            <div>
                                <label className="signup__form-wrapper signup__form__label" htmlFor="f_name">First Name</label>
                                <input className="signup__form__input input-text-field" id="f_name" name="f_name"></input>
                            </div>
                            <div>
                                <label className="signup__form__label " htmlFor="l_name">Last Name</label>
                                <input className="signup__form__input input-text-field" id="l_name" name="l_name"></input>
                            </div>
                        </div>
                        <div className="signup__form-wrapper signup__form__contact">
                            <label className="signup__form__label">Email or phone number</label>
                            <input className="signup__form__input input-text-field" name="contact" ></input>
                        </div>
                        <div className="signup__form-wrapper signup__form__dob">
                            <label className="signup__form__label">Date of Birth</label>
                            <p className="signup__form__dob__msg">This will not be shown publicly.</p>
                            <DobPicker></DobPicker>
                        </div>
                        <button className="signup__form__nextBtn">Next</button>
                    </form>
                )}
            </Formik>
            <p id="login-ref">Already have an account? <a href="/login">Login</a></p>

        </section>
    )
}

export default Signup