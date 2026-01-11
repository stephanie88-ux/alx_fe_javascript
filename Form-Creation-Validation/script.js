 document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    const feedbackDiv = document.getElementById("form-feedback");
    submitButton = document.getElementById("click");
    const usernameInput = document.getElementById("username").value.trim();


    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // prevent default submission

        const username= document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
            
        let isValid = true;
        const messages = [];

        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        if (!email.includes("@")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }
        
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        feedbackDiv.innerHTML = "style.display = 'block';";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!"
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});
            
