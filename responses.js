function getBotResponse(input) {

    // Questions and Answers
    if (input == "Hi Menty") {
        return "Hello there!";
    } else if (input == "Thank you Menty") {
        return "We are glad to help you! Thank you for using <b>MENTY</b>";
    } else if (input == "Tangina mo") {
        return "Tangina mo din!"; 
    } else if (input == "Can you help me?") { 
        return "Certainly! What do you want to talk about? a: <b>Stress</b> b: <b>Anxiety</b>";
    } else if (input == "Can you help me") { 
        return "Certainly! What do you want to talk about? a: <b>Stress</b> b: <b>Anxiety</b>";
    } else if (input == "What can you do for me?") { 
        return "We can help answer your questions making you worry free!"
    } else if (input == "Stress") { 
        return "Kindly tell us what level of stress you are experiencing: <br> <b>Mild</b>, <b>Moderate</b>, <b>Extreme</b>"
    } else if (input == "Mild") { 
        return "A little bit of stress is inevitable, try taking a rest bit by bit before you continue in doing your work."
    } else if (input == "Moderate") { 
        return "Stress can be a motivator! Try using your stress in a positive way for a productive change in your life."
    } else if (input == "Extreme") { 
        return "We suggest that you seek professional help as early as you can. We cannot assess your current state virtually."
    } else if (input == "Anxiety") { 
        return "Kindly tell us how anxious you are right now: <br> <b>Slightly Anxious</b>, <b>Moderately Anxious</b>, <b>Severely Anxious</b>"
    } else if (input == "Slightly Anxious") { 
        return "Sit down tight and try to calm down to ease your worries."
    } else if (input == "Moderately Anxious") { 
        return "Think about why you are worrying and try to feel your mind with positive thoughts, these may give you a quick relief."
    } else if (input == "Severely Anxious") { 
        return "We suggest that you try to control your breathing right away to calm you down. Please seek professionak help as early as you can."
    } else {
        return "Thank you for using <b>MENTY</b>! but your message's response is still on process.";
    }   
}