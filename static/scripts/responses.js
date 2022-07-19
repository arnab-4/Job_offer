function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else if(input=="Hi"||input=="hi")
    {
        return "Tell me how can I help You!";
    }
    else if(input=="What is your name ?"||input=="What is your name?")
    {
        return "My name Sam";
    }
     else {
        return "Try asking something else!";
    }
}