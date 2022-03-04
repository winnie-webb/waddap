import React, { useState } from 'react';
import "./Signup.scss"
import { Formik, Form, Field } from 'formik';
import DobPicker from './DobPicker';
import logo from '../../assets/logo-black.png';
import { validateContact, validateName, validatePassword, validateConfirmPassword } from "../formValidation"
function Signup() {
    const [step, setStep] = useState(1);
    const nextStep = (isValid) => {
        if (isValid) {
            return setStep(step + 1)
        }
    }
    const prevStep = (isValid) => {
        if (isValid) {
            return setStep(step - 1)
        }
    }
    return (
        <section className="signup">
            <img className="signup__logo" src={logo}></img>
            <Formik

                initialValues={{ dobMonth: "", dobDay: "", dobYear: "", contact: "", f_name: "", l_name: "", password: "", confirmPassword: "" }}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >

                {({ values, errors, touched, isValid, dirty }) => (
                    <Form className="signup__form">
                        {

                            step === 1 && <><div className="signup__form-wrapper signup__form__name">
                                <div>
                                    <label className="signup__form-wrapper signup__form__label" htmlFor="f_name">First Name</label>
                                    <Field validate={validateName} value={values.f_name} className={`${(errors.f_name && touched.f_name) || (touched.contact && errors.f_name) ? "input-error" : ""} signup__form__input input-text-field`} id="f_name" name="f_name"></Field>
                                    {(errors.f_name && touched.f_name) && <div className="field-error">{errors.f_name}</div> || (touched.contact && errors.f_name) && <div className="field-error">Required*</div>}
                                </div>
                                <div>
                                    <label className="signup__form-wrapper signup__form__label" htmlFor="l_name">Last Name</label>
                                    <Field validate={validateName} value={values.l_name} className={`${(errors.l_name && touched.l_name) || (touched.contact && errors.l_name) ? "input-error" : ""} signup__form__input input-text-field`} id="l_name" name="l_name"></Field>
                                    {(errors.l_name && touched.l_name) && <div className="field-error">{errors.l_name}</div> || (touched.contact && errors.l_name) && <div className="field-error">Required*</div>}

                                </div>
                            </div><div className="signup__form-wrapper signup__form__contact">
                                    <label className="signup__form__label">Email or phone number</label>
                                    <Field validate={validateContact} value={values.contact} className={`${errors.contact && touched.contact ? "input-error" : ""} signup__form__input input-text-field`} name="contact"></Field>
                                    {errors.contact && touched.contact && <div className="field-error">{errors.contact}</div>}
                                </div>
                                <div className="signup__form-wrapper signup__form__dob">
                                    <label className="signup__form__label">Date of Birth</label>
                                    <p className="signup__form__dob__msg">This will not be shown publicly.</p>
                                    <DobPicker values={values} ></DobPicker>
                                </div>
                                <button disabled={!(dirty && isValid)} onClick={nextStep} type="button" className={`${!(isValid && dirty) ? "btn-disabled" : ""} signup__form__btn signup__form__nextBtn`}>Next</button>
                                <p id="login-ref">Already have an account? <a href="/login">Login</a></p>

                            </>

                        }
                        {step === 2 &&
                            <div className="signup__form-wrapper">
                                <label className="signup__form__label " htmlFor="password">Create Password</label>
                                <Field validate={validatePassword} value={values.password} className={`${errors.password && touched.password ? "input-error" : ""} signup__form__input input-text-field`} id="password" name="password">
                                </Field>
                                {errors.password && touched.password && <div className="field-error">{errors.password}</div>}

                                <label className="signup__form__label " htmlFor="confirm-password">Confirm Password</label>
                                <Field validate={(value) => validateConfirmPassword(values.password, value)} value={values.confirmPassword} className={`${errors.confirmPassword && touched.confirmPassword ? "input-error" : ""} signup__form__input input-text-field`} id="confirm-password" name="confirmPassword">
                                </Field>
                                {errors.confirmPassword && touched.confirmPassword && <div className="field-error">{errors.confirmPassword}</div>}

                                <div className="form-navigation">
                                    <button onClick={prevStep} className="signup__form__btn signup__form__btnPrev">Edit</button>

                                    <button disabled={!(dirty && isValid)} type="submit" className={`${!(isValid && dirty) ? "btn-disabled" : ""} signup__form__btn signup__form__btnSubmit `}>Create Account</button>

                                </div>
                            </div>
                        }
                    </Form>
                )}
            </Formik>

        </section>
    )
}

export default Signup