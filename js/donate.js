document.getElementById("btn1_donate_now").addEventListener("click", function(){
    const donateAmount = document.getElementById("input_donation_amount1").value;
    const availableDonateAmount = document.getElementById("available_donate_amount").innerText;
    const collectedDonatedAmount = document.getElementById("collected_donate_amount1").innerText;
    const inputId = "input_donation_amount1";
    const collectedId = "collected_donate_amount1";

    // validation check
    if(!checkValidations(donateAmount, availableDonateAmount)){
        document.getElementById("input_donation_amount1").value = " ";
        return;
    }

    // calculation for donation amount
    donationCalculator(donateAmount, availableDonateAmount, collectedDonatedAmount, inputId, collectedId);
});


document.getElementById("btn2_donate_now").addEventListener("click", function(){
    const donateAmount = document.getElementById("input_donation_amount2").value;
    const availableDonateAmount = document.getElementById("available_donate_amount").innerText;
    const collectedDonatedAmount = document.getElementById("collected_donate_amount2").innerText;
    const inputId = "input_donation_amount2";
    const collectedId = "collected_donate_amount2";

    // validation check
    if(!checkValidations(donateAmount, availableDonateAmount)){
        document.getElementById("input_donation_amount2").value = " ";
        return;
    }

    // calculation for donation amount
    donationCalculator(donateAmount, availableDonateAmount, collectedDonatedAmount, inputId, collectedId);
});


document.getElementById("btn3_donate_now").addEventListener("click", function(){
    const donateAmount = document.getElementById("input_donation_amount3").value;
    const availableDonateAmount = document.getElementById("available_donate_amount").innerText;
    const collectedDonatedAmount = document.getElementById("collected_donate_amount3").innerText;
    const inputId = "input_donation_amount3";
    const collectedId = "collected_donate_amount3";

    // validation check
    if(!checkValidations(donateAmount, availableDonateAmount)){
        document.getElementById("input_donation_amount3").value = " ";
        return;
    }

    // calculation for donation amount
    donationCalculator(donateAmount, availableDonateAmount, collectedDonatedAmount, inputId, collectedId);
});