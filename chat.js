// Collapsible
$( document ).ready(function() {
    var coll = document.getElementsByClassName("collapsible");

    function getTime() {
        let today = new Date();
        hours = today.getHours();
        minutes = today.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let time = hours + ":" + minutes;
        return time;
    }

    // Gets the first message
    function firstBotMessage() {
        let firstMessage = "Hi there! Welcome to <b>MENTY</b><br>Try asking 'Can you help me?'"
        document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

        let time = getTime();

        $("#chat-timestamp").append(time);
        document.getElementById("userInput").scrollIntoView(false);
    }

    firstBotMessage();

    // Retrieves the response
    function getHardResponse(userText) {
        let botResponse = getBotResponse(userText);
        let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
        $("#chatbox").append(botHtml);

        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }

    //Gets the text text from the input box and processes it
    function getResponse() {
        let userText = $("#textInput").val();

        if (userText == "") {
            userText = "";
        }

        let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);

        setTimeout(() => {
            getHardResponse(userText);
        }, 1000)
    }

    // Press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponse();
        }
    });


    //Chat Button Up and Down
    $('#chat-button').click(function(){
        $('.outer-container').css("min-height", "435px");
    });

    $('#chat-button').click(function(){
        $('.outer-container').toggle();
    });
});