document.getElementById("btn1_donate_now").addEventListener("click", function(){
    const donateAmount = document.getElementById("input_donation_amount1").value;
    const availableDonateAmount = document.getElementById("available_donate_amount").innerText;

    // validation check
    if(!checkValidations(donateAmount, availableDonateAmount)){
        alert("Please enter a valid donation amount");
        return;
    }
});