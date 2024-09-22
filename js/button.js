document.getElementById("active_donation_btn")
.addEventListener("click", function(){
    const button1 = document.getElementById("active_donation_btn");
    const button2 = document.getElementById("active_history_btn");

    activeButtonStyle(button1, button2);
});

document.getElementById("active_history_btn")
.addEventListener("click", function(){
    const button1 = document.getElementById("active_donation_btn");
    const button2 = document.getElementById("active_history_btn");

    activeButtonStyle(button2, button1);
});


function activeButtonStyle(activeBtn, inactiveBtn) {
    // Set the active button styles
    activeBtn.classList.add("text-black_color", "font-semibold", "bg-green_color", "hover:bg-green_color");
    activeBtn.classList.remove("text-dark_shade_color", "font-medium");
    // Set the inactive button styles
    inactiveBtn.classList.remove("text-black_color", "font-semibold", "bg-green_color", "hover:bg-green_color");
    inactiveBtn.classList.add("text-dark_shade_color", "font-medium");
}
