// common shared function here
function checkValidations(donateAmount, availableDonateAmount) {
    // check -> Is donation amount field empty or not
    // console.log(donateAmount.value);

    if(donateAmount == "") {
        alert("Donation amount field is empty. Please enter donation amount.");
        return false;
    }

    // check -> donateAmount is a number or not
    if(!isNaN(donateAmount)){
        const amount = parseFloat(donateAmount);
        const availableAmount = parseFloat(availableDonateAmount);

        // check -> availableAmount is zero. There is no fund to donate
        if(availableAmount === 0){
            alert("Donation balance is zero. Please add more funds to continue.");
            return false;
        }
        // check -> donateAmount can not be equal to or less than zero.
        else if(amount <= 0){
            alert("Donation amount can not be zero or negative number.");
            return false
        }

        // check -> donateAmount is greater than 0 && donateAmount is less than or equal to availableAmount
        if(amount > 0 && availableAmount >= amount){
            return true;
        }

        alert("Kindly adjust your donation amount which is higher than available donate balance");
        return false
    }

    alert("Please enter a valid donation amount");
    return false;
}