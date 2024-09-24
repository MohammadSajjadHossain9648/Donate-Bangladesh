function createTransactions(id, donateAmount, collectedId){
    let title = "";
    if(id === 1){
        title = "Donated for Flood at Noakhali, Bangladesh";
    }
    else if(id === 2){
        title = "Donated for Flood Relief in Feni, Bangladesh";
    }
    else{
        title = "Donated for Aid for Injured in the Quota Movement, Bangladesh";
    }

    const recipient = generatePhoneNumber();
    const transactionId = generateTransactionID();
    console.log(title, recipient, transactionId, donateAmount);
}