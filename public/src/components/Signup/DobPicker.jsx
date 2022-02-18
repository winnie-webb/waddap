import React, { useState } from 'react'

function DobPicker() {
    const currentYear = new Date().getFullYear()
    const [daysInMonth, setDaysInMonth] = useState(31);
    const [month, setMonth] = useState(0);
    const years = range(1901, currentYear).reverse();
    const days = range(1, daysInMonth)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
        <div className="dob-picker">
            <select id="dob-picker__month" className="signup__form__input input-select" onChange={(e) => {
                const currentDaysInMonth = new Date(currentYear, months.indexOf(e.target.value) + 1, 0).getDate()
                setDaysInMonth(currentDaysInMonth)
                setMonth(months.indexOf(e.target.value))

            }}>
                {months.map(month => <option key={month}>{month}</option>)}
            </select>
            <select id="dob-picker__day" className="signup__form__input input-select" >
                {days.map(day => <option key={day}>{day}</option>)}
            </select>
            <select id="dob-picker__year" className="signup__form__input input-select" onChange={(e) => {
                const newCurrentYear = parseInt(e.target.value)
                const currentDaysInMonth = new Date(newCurrentYear, month + 1, 0).getDate();
                setDaysInMonth(currentDaysInMonth)
            }}>
                {years.map(year => <option key={year}>{year}</option>)}
            </select>

        </div>
    )
}
function range(start, end) {
    return Array(end - start + 1).fill(start).map((currentNum, index) => currentNum + index);
}

export default DobPicker