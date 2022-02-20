import React, { useState } from 'react';
import "./Signup.scss"
import { Formik, Form, Field } from 'formik';
import DobPicker from './DobPicker';
import logo from '../../assets/logo-black.png';
import { validateContact, validateName } from "../formValidation"
function Signup() {

    return (
        <section className="signup">
            <img className="signup__logo" src={logo}></img>
            <Formik

                initialValues={{ contact: "", f_name: "", l_name: "", }}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >

                {({ values, errors, touched }) => (
                    <Form className="signup__form">
                        <div className="signup__form-wrapper signup__form__name">
                            <div>
                                <label className="signup__form-wrapper signup__form__label" htmlFor="f_name">First Name</label>
                                <Field validate={validateName} value={values.f_name} className={`${errors.f_name && touched.f_name ? "input-error" : ""} signup__form__input input-text-field`} id="f_name" name="f_name"></Field>
                                {errors.f_name && touched.f_name && <div className="field-error">{errors.f_name}</div>}
                            </div>
                            <div>
                                <label className="signup__form__label " htmlFor="l_name">Last Name</label>
                                <Field validate={validateName} value={values.l_name} className={`${errors.l_name && touched.l_name ? "input-error" : ""} signup__form__input input-text-field`} id="l_name" name="l_name"></Field>
                                {errors.l_name && touched.l_name && <div className="field-error">{errors.l_name}</div>}

                            </div>
                        </div>
                        <div className="signup__form-wrapper signup__form__contact">
                            <label className="signup__form__label">Email or phone number</label>
                            <Field validate={validateContact} value={values.contact} className={`${errors.contact && touched.contact ? "input-error" : ""} signup__form__input input-text-field`} name="contact" ></Field>
                            {errors.contact && touched.contact && <div className="field-error">{errors.contact}</div>}
                        </div>
                        <div className="signup__form-wrapper signup__form__dob">
                            <label className="signup__form__label">Date of Birth</label>
                            <p className="signup__form__dob__msg">This will not be shown publicly.</p>
                            <DobPicker ></DobPicker>
                        </div>
                        <button type="button" className="signup__form__nextBtn">Next</button>
                    </Form>
                )}
            </Formik>
            <p id="login-ref">Already have an account? <a href="/login">Login</a></p>

        </section>
    )
}

export default Signup