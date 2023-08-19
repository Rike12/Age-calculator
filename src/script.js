//INPUT ELEMENTS
const dayInput =document.getElementById("day");
const monthInput =document.getElementById ("month");
const yearInput = document.getElementById ("year");


//OUTPUT ELEMENTS

const dayOutput =document.getElementById("DD");
const monthOutput =document.getElementById ("MM");
const yearOutput = document.getElementById("YY");


// FORM ELEMENT

const form = document.querySelector ("form");

//ADDING THE SUBMIT EVENTLISTENER TO FORM

form.addEventListener("submit", handleSubmit);

//TRACK THE NUMBER OF DAYS IN EACH MONTH
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//STORE THE DATE INSERTED BY THE USER
let inputDate = {day:0, month:0, year:0};

//FUNCTION TO VALIDATE USER INPUT
function validate() {
    const date = newDate();

    // KEEP TRACK OF FAIL VALIDATION
    let validator = true;

    //GET THE PARENT ELEMENT OF INPUT BEING VALIDATED
     let parent = monthInput.parentElement;

     // THIS CHECK IF THE MONTH INPUT IS NOT EMPTY AND THE MONTH INSERTED IS NOT GREATER THAN 12
     if (!monthInput.value || (monthInput.getAttribute('id') == 'month' && monthInput.value > 12)) {
        monthInput.style.borderColor = "red";

         //THIS GET THE SMALL ELEMENT INSIDE THE PARENT OF THE INPUT AND INSERT THE ERROR MESSAGE
         monthInput.parentElement.querySelector("small").innerText = "must be a valid month.";
        
         //IF THE VALIDATION CHECK FAILS THE STATUS IS TRACKED HERE
         validator = false;
     }else if (monthInput.getAttribute('id') == 'month'){
       
        // THIS STORE THE USER INPUT IN THE VARIABLE
         inputDate.month = monthInput.value;
   
         
     }

     parent = dayInput.parentElement;
     //VALIDATE THE DAY INPUT
     if (!dayInput.value || (dayInput.getAttribute('id') == 'day' && dayInput.value > 31)) {
         dayInput.style.borderColor = "red";
         dayInput.parentElement.querySelector("small").innerText = "must be a valid day.";
         validator = false;
     }else if (dayInput.getAttribute('id') == 'day'){
         inputDate.day = dayInput.value;

     }
      // VALIDATE THE YEAR INPUT
     parent = yearInput.parentElement;
     if (!yearInput.value || (yearInput.getAttribute('id') == 'year' && yearInput.value > date.getFullYear())) {
         yearInput.style.borderColor = "red";
         yearInput.parentElement.querySelector("small").innerText = "must be a valid year.";
         validator = false;
     }else if(yearInput.getAttribute('id') == 'year'){
         inputDate.year = yearInput.value;

     }
     
     if(validator){
         // IF NO VALIDATION FAILS, ALL ERROR MESSAGES ARE CLEARED
 
         dayInput.style.borderColor = "black";
         parent = dayInput.parentElement;
         parent.querySelector("small").innerText= "";

         monthInput.style.borderColor = "black";
         parent = monthInput.parentElement;
         parent.querySelector("small").innerText= "";

         yearInput.style.borderColor = "black";
         parent = yearInput.parentElement;
         parent.querySelector("small").innerText= "";
     }


 

 if(validator){ 
     // VALIDATE THAT THE NUMBER OF DAYS INSERTED DOES NOT EXCEED THE NUMBER OF DAYS OF THE MONTH INSERTED

     if(inputDate.day > months[(inputDate.month-1)]){
         dayInput.style.borderColor = "red";
         dayInput.parentElement.querySelector("small").innerText = "must be a valid day.";
         validator = false;
     }else{
         dayInput.style.borderColor = "black";
         dayInput.parentElement.querySelector("small").innerText= "";
         validator = true;
     }
 }

 return validator;
}