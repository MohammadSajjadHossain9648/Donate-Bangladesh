function createTransactions(id, time, donateAmount, collectedId){
    const div = document.createElement("div");
    div.classList.add("p-4", "flex", "justify-center", "items-center", "gap-6", "border", "border-border_color", "rounded-xl");

    if(id === 1){
        div.innerHTML = `
            <div class="w-30 h-20">
                <img class="w-full h-full rounded-xl" src="assets/noakhali.png" alt="Noakhali flood moment image">
            </div>
            <div class="w-full">
                <div class="flex justify-between items-center">
                    <h1 class="text-black_color font-bold">Donated for Flood at Noakhali, Bangladesh</h1>
                    <p class="text-sm text-dark_shade_color font-light">Date: <span>${time}</span></p>
                </div>
                <h3 class="text-sm text-dark_shade_color">Recipient: <span>${generatePhoneNumber()}</span></h3>
                <div class="flex justify-between items-center">
                    <h3 class="text-sm text-dark_shade_color">Trans Id: <span>${generateTransactionID()}</span></h3>
                    <p class="text-2xl text-lime-500 font-bold">BDT <span>${donateAmount}</span></p>
                </div>
            </div>
        `;
    }
    else if(id === 2){
        div.innerHTML = `
            <div class="w-30 h-20">
                <img class="w-full h-full rounded-xl" src="assets/feni.png" alt="Feni village flood image">
            </div>
            <div class="w-full">
                <div class="flex justify-between items-center">
                    <h1 class="text-black_color font-bold">Donated for Flood Relief in Feni, Bangladesh</h1>
                    <p class="text-sm text-dark_shade_color font-light">Date: <span>${time}</span></p>
                </div>
                <h3 class="text-sm text-dark_shade_color">Recipient: <span>${generatePhoneNumber()}</span></h3>
                <div class="flex justify-between items-center">
                    <h3 class="text-sm text-dark_shade_color">Trans Id: <span>${generateTransactionID()}</span></h3>
                    <p class="text-2xl text-lime-500 font-bold">BDT <span>${donateAmount}</span></p>
                </div>
            </div>
        `;
    }
    else{
        div.innerHTML = `
            <div class="w-30 h-20">
                <img class="w-full h-full rounded-xl" src="assets/quota-protest.png" alt="Quota protest moment image">
            </div>
            <div class="w-full">
                <div class="flex justify-between items-center">
                    <h1 class="text-black_color font-bold">Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
                    <p class="text-sm text-dark_shade_color font-light">Date: <span>${time}</span></p>
                </div>
                <h3 class="text-sm text-dark_shade_color">Recipient: <span>${generatePhoneNumber()}</span></h3>
                <div class="flex justify-between items-center">
                    <h3 class="text-sm text-dark_shade_color">Trans Id: <span>${generateTransactionID()}</span></h3>
                    <p class="text-2xl text-lime-500 font-bold">BDT <span>${donateAmount}</span></p>
                </div>
            </div>
        `;
    }

    document.getElementById("history_section").appendChild(div);
}