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
    if (input == "hello"||input=="Hello") {
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
    else if(input=="I love this")
    {
        return "Thanks!";
    }
    else if(input=="🧡")
    {
        return "🧡";
    }
    else if(input=="Ok"||input=="Ok")
    {
        return "Thanks!....Is there any query(Yes/No)?";
        if(input=="Yes")
        {
            return "Thanks!";
        }
        else
        {
            return "Tell me how can I help you.";
        }
    }
    
     else {
        return "Try asking something else!";
    }
}
