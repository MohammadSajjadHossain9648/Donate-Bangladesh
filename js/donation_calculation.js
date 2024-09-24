// common shared function here
function donationCalculator(id, time, donateAmount, availableDonateAmount, collectedDonatedAmount, inputId, collectedId){
    const donate_amount = parseFloat(donateAmount);
    const available_donate_amount = parseFloat(availableDonateAmount);
    const collected_donated_amount = parseFloat(collectedDonatedAmount);

    document.getElementById(collectedId).innerText = collected_donated_amount + donate_amount;
    document.getElementById("available_donate_amount").innerText = available_donate_amount - donate_amount;

    document.getElementById(inputId).value = " ";

    // Show the success modal immediately after calculations
    document.getElementById("my_modal_6").checked = true;

    //make a transactions history
    createTransactions(id, time, donateAmount, collectedId);
}