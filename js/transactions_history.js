function createTransactions(id, time, donateAmount, collectedId){
    const img = document.createElement('img');
    let title = "";
    if(id === 1){
        title = "Donated for Flood at Noakhali, Bangladesh";
        img.innerHTML = `<img class="w-full h-full" src="assets/noakhali.png" alt="Noakhali flood moment image">`;
    }
    else if(id === 2){
        title = "Donated for Flood Relief in Feni, Bangladesh";
        img.innerHTML = `<img class="w-full h-full" src="assets/feni.png" alt="Feni village flood image">`;
    }
    else{
        title = "Donated for Aid for Injured in the Quota Movement, Bangladesh";
        img.innerHTML = `<img class="w-full h-full" src="assets/quota-protest.png" alt="Quota protest moment image">`;
    }


    // document.getElementById("transaction_image").appendChild(img);
    // document.getElementById("transaction_title").innerText = title;
    // document.getElementById("transaction_time").innerText = time;
    // document.getElementById("transaction_recipient").innerText = recipient;
    // document.getElementById("transaction_id").innerText = transactionId;
    // document.getElementById("transaction_amount").innerText = donateAmount;

}