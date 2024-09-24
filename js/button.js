const donationBtn = document.getElementById("active_donation_btn");
const historyBtn = document.getElementById("active_history_btn");

document.getElementById("active_donation_btn")
.addEventListener("click", function(){
    activeButtonStyle(donationBtn, historyBtn);
    showSectionById(donationBtn);
});

document.getElementById("active_history_btn")
.addEventListener("click", function(){
    activeButtonStyle(historyBtn, donationBtn);
    showSectionById(historyBtn);
});

// Load donation content by default when the page loads
window.addEventListener('DOMContentLoaded', () => {
    activeButtonStyle(donationBtn, historyBtn);
});