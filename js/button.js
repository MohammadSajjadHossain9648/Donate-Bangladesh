const donationBtn = document.getElementById("active_donation_btn");
const historyBtn = document.getElementById("active_history_btn");

document.getElementById("active_donation_btn")
.addEventListener("click", function(){
    activeButtonStyle(donationBtn, historyBtn);
});

document.getElementById("active_history_btn")
.addEventListener("click", function(){
    activeButtonStyle(historyBtn, donationBtn);
});


// Event listeners for buttons
function activeButtonStyle(activeBtn, inactiveBtn) {
    // Set the active button styles
    activeBtn.classList.add("text-black_color", "font-semibold", "bg-green_color", "hover:bg-green_color");
    activeBtn.classList.remove("text-dark_shade_color", "font-medium");
    // Set the inactive button styles
    inactiveBtn.classList.remove("text-black_color", "font-semibold", "bg-green_color", "hover:bg-green_color");
    inactiveBtn.classList.add("text-dark_shade_color", "font-medium");
}



// Load donation content by default when the page loads
window.addEventListener('DOMContentLoaded', () => {
    activeButtonStyle(donationBtn, historyBtn);
});