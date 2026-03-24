import flatpickr from "flatpickr";
import { DateTime } from "luxon";

import './style.css';



const dateInput = document.getElementById('dob-input');
const calcBtn = document.getElementById('calc-btn');
const resultDiv = document.getElementById('result');


flatpickr(dateInput, {
    dateFormat: "Y-m-d",
    maxDate: "today",
});

calcBtn.addEventListener("click", () => {
    const userDate = dateInput.value;

    if (!userDate) return;

    const birthDate = DateTime.fromISO(userDate);
    const today = DateTime.now();

    const age = today.diff(birthDate, ['years', 'months', 'days']).toObject();

    resultDiv.innerText = `You are ${age.years} years, ${age.months} months, and ${Math.floor(age.days)} days old.`;
})