// common shared function here
function checkValidations(donateAmount, availableDonateAmount) {
    // check -> donateAmount is a number or not
    if(!isNaN(donateAmount)){
        const amount = parseFloat(donateAmount);
        const availableAmount = parseFloat(availableDonateAmount);

        // check -> donateAmount is greater than 0 && donateAmount is less than or equal to availableDonateAmount
        if(amount > 0 && availableDonateAmount >= amount){
            return true;
        }
    }

    return false;
}