function handelTicketChange(ticketClass, isIncrease){
    const ticketInput= document.getElementById(ticketClass + '-class-input');
    const ticketCount = getInputValue(ticketClass);
    let newTicketValue = ticketCount;
    if (isIncrease == true){
        newTicketValue = ticketCount + 1;
    };
    if (isIncrease == false && ticketCount > 0 ){
        newTicketValue = ticketCount - 1;
    };
    ticketInput.value = newTicketValue;
    totalCalculation();
}

function totalCalculation(){
   const firstClassCount = getInputValue('first');
   const economyClassCount = getInputValue('economy');
   const totalPrice = firstClassCount * 150 + economyClassCount * 100;
   document.getElementById('subTotal').innerText = '$' + totalPrice;

   const tax = Math.round(totalPrice * 0.1);
   document.getElementById('tax-amount').innerText = '$'+ tax;

   const grandtotal = totalPrice + tax;
   document.getElementById('grand-total').innerText = '$'+ grandtotal;
}

function getInputValue(ticketClass){
    const ticketInput = document.getElementById(ticketClass + '-class-input');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}


function bookingFormHide (){
    const firstClassCount = getInputValue('first');
    const economyClassCount = getInputValue('economy');
    if (firstClassCount > 0 || economyClassCount> 0) {
        const  submitForm = document.getElementById("submit-form");
        submitForm.style.display = "none"; 

        const successForm = document.getElementById("success-form");
        successForm.style.display = 'block';
    }
    if (firstClassCount == 0 && economyClassCount == 0) {
        alert("Please select at least 1 ticket");
    }
}

function bookingFormShow(){
    const  submitForm = document.getElementById("submit-form");
    submitForm.style.display = "block"; 
    
    const successForm = document.getElementById("success-form");
    successForm.style.display = 'none';
}

