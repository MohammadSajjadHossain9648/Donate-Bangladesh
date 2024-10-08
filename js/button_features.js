// Event listeners for buttons or create active button styles
function activeButtonStyle(activeBtn, inactiveBtn) {
    // Set the active button styles
    activeBtn.classList.add("text-black_color", "font-semibold", "bg-green_color", "hover:bg-green_color");
    activeBtn.classList.remove("text-dark_shade_color", "font-medium");
    // Set the inactive button styles
    inactiveBtn.classList.remove("text-black_color", "font-semibold", "bg-green_color", "hover:bg-green_color");
    inactiveBtn.classList.add("text-dark_shade_color", "font-medium");
}

//show the clicked button section
function showSectionById(buttonId){
    // hide all the sections
    document.getElementById("donation_section").classList.add("hidden");
    document.getElementById("history_section").classList.add("hidden");

    // show the section which button is clicked
    if(buttonId === 1){
        document.getElementById("donation_section").classList.remove("hidden");
    }
    else{
        document.getElementById("history_section").classList.remove("hidden");
    }
}