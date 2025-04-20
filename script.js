function showResult() {
    var answers = {
        "strength": document.querySelector('input[name="strength"]:checked').value,
        "element": document.querySelector('input[name="element"]:checked').value,
        "solve": document.querySelector('input[name="solve"]:checked').value,
        // Add all other questions here
    };
    
    var dragonName = "";
    var dragonPower = "";
    var dragonImage = "";

    // Logic for combining answers and assigning results based on various conditions
    if (answers.strength == "Courage" && answers.element == "Fire" && answers.solve == "Force") {
        dragonName = "Ciaran";
        dragonPower = "Fire Manipulation and Battle Fury";
        dragonImage = "images/ciaran-dragon.jpg"; // Image path for Ciaran
    }
    else if (answers.strength == "Intelligence" && answers.element == "Water" && answers.solve == "Think") {
        dragonName = "Muirne";
        dragonPower = "Water Stealth and Strategic Deception";
        dragonImage = "images/muirne-dragon.jpg"; // Image path for Muirne
    }
    // More combinations for different dragon names
    else {
        dragonName = "Lachlan";
        dragonPower = "Air Powers and Speed";
        dragonImage = "images/lachlan-dragon.jpg"; // Image path for Lachlan
    }

    // Display the result
    document.getElementById('dragonName').innerText = dragonName;
    document.getElementById('dragonPower').innerText = dragonPower;
    document.getElementById('dragonImage').src = dragonImage; // Set the dragon image
    document.getElementById('result').style.display = 'block';
}

// Retake quiz functionality
function retakeQuiz() {
    // Reset the form and hide the result
    document.getElementById('quizForm').reset();
    document.getElementById('result').style.display = 'none';
}
