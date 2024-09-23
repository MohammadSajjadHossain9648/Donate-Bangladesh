document.getElementById("btn1_donate_now").addEventListener("click", function(){
    const donateAmount = document.getElementById("input_donation_amount1").value;
    const availableDonateAmount = document.getElementById("available_donate_amount").innerText;

    // validation check
    if(!checkValidations(donateAmount, availableDonateAmount)){
        document.getElementById("input_donation_amount1").value = " ";
        return;
    }

    // calculation for donation amount
    const donate_amount = parseFloat(donateAmount);
    const available_donate_amount = parseFloat(availableDonateAmount);


});