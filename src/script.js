//INPUT ELEMENTS
const dayInput =document.querySelector("#day");
const monthInput =document.querySelector ("#month");
const yearInput = document.querySelector ("#year");
//const submit_button= document.querySelector(".submit_button");

//OUTPUT ELEMENTS

const dayOutput =document.querySelector(".output-day");
const monthOutput =document.querySelector (".output-month");
const yearOutput = document.querySelector(".output-year");
const submit_button= document.querySelector(".submit_button");

//ERROR ELEMENTS
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");
//DAY INPUT
dayInput.addEventListener("input",(e)=>{
    if (+dayInput.value>31){
        error_day.textContent="Must be a valid date";
        isValid = false;
        return;

    } else{
        isValid=true;
        error_day.textContent="";
    }
    if(+dayInput.value===0){
        isValid = false;
        error_day.textContent="This field is required";
        isValid = false;
        return;
    } else{
        error_day.textContent = "";
    }
})

//MONTH INPUT
monthInput.addEventListener("input",(e)=>{
    if (+monthInput.value>12){
        error_month.textContent="Must be a valid date";
        isValid = false;
        return;

    } else{
        isValid=true;
        error_month.textContent="";
    }
    if(+monthInput.value===0){
        isValid = false;
        error_month.textContent="This field is required";
        isValid = false;
        return;
    } else{
        error_month.textContent = "";
    }
})

//YEAR INPUT 

yearInput.addEventListener("input",(e)=>{
    if (+yearInput.value>2023){
        error_year.textContent="Must be a valid date";
        isValid = false;
        return;

    } else{
        isValid=true;
        error_year.textContent="";
    }
    if(+yearInput.value===0){
        isValid = false;
        error_year.textContent="This field is required";
        isValid = false;
        return;
    } else{
        error_year.textContent = "";
    }
})