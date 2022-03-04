import React, { useState } from 'react'
import { Field, useFormikContext } from "formik";
import { validateDay, validateMonth, validateYear } from '../formValidation';
function DobPicker() {
    const formik = useFormikContext();
    const currentYear = new Date().getFullYear()
    const [daysInMonth, setDaysInMonth] = useState(31);
    const [month, setMonth] = useState(0);
    const years = range(1901, currentYear).reverse();
    const days = range(1, daysInMonth)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
        <div className="dob-picker">
            <Field validate={validateMonth} name="dobMonth" as="select" id="dob-picker__month" className={`${formik.errors.dobMonth && formik.touched.dobMonth ? "input-error" : ""} signup__form__input input-select`} onChange={(e) => {
                formik.handleChange(e);
                const currentDaysInMonth = new Date(currentYear, months.indexOf(e.target.value) + 1, 0).getDate()
                setDaysInMonth(currentDaysInMonth)
                setMonth(months.indexOf(e.target.value))
            }} >

                <option value="" disabled hidden>Month</option>

                {months.map(month => <option key={month}>{month}</option>)}
            </Field>
            <Field validate={validateDay} name="dobDay" as="select" id="dob-picker__day" className={`${formik.errors.dobDay && formik.touched.dobDay ? "input-error" : ""} signup__form__input input-select`} >
                <option value="" disabled hidden>Day</option>
                {days.map(day => <option key={day}>{day}</option>)}
            </Field>
            <Field validate={validateYear} name="dobYear" as="select" id="dob-picker__year" className={`${formik.errors.dobYear && formik.touched.dobYear ? "input-error" : ""} signup__form__input input-select`} onChange={(e) => {
                formik.handleChange(e)

                const newCurrentYear = parseInt(e.target.value)
                const currentDaysInMonth = new Date(newCurrentYear, month + 1, 0).getDate();
                setDaysInMonth(currentDaysInMonth);

            }}>
                <option value="" disabled hidden>Year</option>

                {years.map(year => <option key={year}>{year}</option>)}
            </Field>

        </div>
    )
}
function range(start, end) {
    return Array(end - start + 1).fill(start).map((currentNum, index) => currentNum + index);
}

export default DobPicker