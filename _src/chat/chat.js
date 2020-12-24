/* chatURL - URL for updating chat messages */
var chatURL = "chat.php";
/* colorURL - URL for retrieving the chosen RGB color */
var colorURL = "color.php";

/* variables that establish how often to access the server */
var updateInterval = 2000; // how many milliseconds to wait to get new message
// when set to true, display detailed error messages
var debugMode = true;
/* lastMessageID - the ID of the most recent chat message */
var lastMessageID = -1;

// function that displays an error message
function displayError(message) 
{
    // display error message, with more technical details if debugMode is true
    alert("Error accessing the server! " +
                 (debugMode ? message : ""));
}

// function that displays a PHP error message
function displayPHPError(error)
{
  displayError ("Error number :" + error.errno + "\r\n" +
              "Text :"+ error.text + "\r\n" +
              "Location :" + error.location + "\r\n" +
              "Line :" + error.line + + "\r\n");
}

function retrieveNewMessages() 
{
    $.ajax({
        url: chatURL,
        type: 'POST',
        data: $.param({
            mode: 'RetrieveNew',
            id: lastMessageID
        }),
        dataType: 'json',
        error: function(xhr, textStatus, errorThrown) {
            displayError(textStatus);
        },
        success: function(data, textStatus) {
            if(data.errno != null)
              displayPHPError(data);
            else
              readMessages(data);
            // restart sequence
            setTimeout("retrieveNewMessages();", updateInterval);
        }
    });
}

function sendMessage() 
{
    var message = $.trim($('#messageBox').val());
    var color = $.trim($('#color').val());
    var username = $.trim($('#userName').val());

    // if we need to send and retrieve messages          
    if (message != '' && color != '' & username != '') {
        var params = {
            mode: 'SendAndRetrieveNew',
            id: lastMessageID,
            color: color,
            name: username,
            message: message
        };
        $.ajax({
            url: 'chat.php',
            type: 'POST',
            data: $.param(params),
            dataType: 'json',
            error: function(xhr, textStatus, errorThrown) {
                displayError(textStatus);
            },
            success: function(data, textStatus) {
                if(data.errno != null)
                  displayPHPError(data);
                else
                  readMessages(data);
                // restart sequence
                setTimeout("retrieveNewMessages();", updateInterval);
            }
        });

    }
}

function deleteMessages() 
{
    $.ajax({
        url: chatURL,
        type: 'POST',
        success: function(data, textStatus) {
            if(data.errno != null)
              displayPHPError(data);
            else
              readMessages(data);
            // restart sequence
            setTimeout("retrieveNewMessages();", updateInterval);
        },
        data: $.param({
            mode: 'DeleteAndRetrieveNew'
        }),
        dataType: 'json',
        error: function(xhr, textStatus, errorThrown) {
            displayError(textStatus);
        }
    });
}

function readMessages(data, textStatus) 
{
    // retrieve the flag that says if the chat window has been cleared or not 
    clearChat = data.clear;
    // if the flag is set to true, we need to clear the chat window 
    if (clearChat == 'true') {
        // clear chat window and reset the id
        $('#scroll')[0].innerHTML = "";
        lastMessageID = -1;
    }
    
    if (data.messages.length > 0)
    {
      // check to see if the first message 
      // has been already received and if so
      // ignore the rest of the messages
      if(lastMessageID > data.messages[0].id)
        return;
      // the ID of the last received message is stored locally
      lastMessageID = data.messages[data.messages.length - 1].id;
    }
    // display the messages retrieved from server
    $.each(data.messages, function(i, message) {
        // compose the HTML code that displays the message
        var htmlMessage = "";
        htmlMessage += "<div class=\"item\" style=\"color:" + message.color + "\">";
        htmlMessage += "[" + message.time + "] " + message.name + " said: <br/>";
        htmlMessage += message.message;
        htmlMessage += "</div>";

        // check if the scroll is down
        var isScrolledDown = ($('#scroll')[0].scrollHeight - $('#scroll')[0].scrollTop <=
                    $('#scroll')[0].offsetHeight);

        // display the message
        $('#scroll')[0].innerHTML += htmlMessage;

        // scroll down the scrollbar
        $('#scroll')[0].scrollTop = isScrolledDown ? $('#scroll')[0].scrollHeight : $('#scroll')[0].scrollTop;
    });
    
}

$(document).ready(function() 
{
    // hook to the blur event
    $('#userName').blur(
    // function that ensures that the username is never empty and if so 
    // a random name is generated
      function(e) {
          // ensures our user has a default random name when the form loads        
          if (this.value == "")
              this.value = "Guest" + Math.floor(Math.random() * 1000);
      }
    );
    // populate the username field with 
    // the default value
    $('#userName').triggerHandler('blur');

    // handle the click event on the image
    $('#palette').click(
      function(e) {
          // http://docs.jquery.com/Tutorials:Mouse_Position        
          // retrieve the relative mouse position inside the image
          var x = e.pageX - $('#palette').position().left;
          var y = e.pageY - $('#palette').position().top;

          // make the ajax request to get the RGB code
          $.ajax({
              url: colorURL,
              success: function(data, textStatus) {
                  if(data.errno != null)
                    displayPHPError(data);
                  else
                  {
                    $('#color')[0].value = data.color;
                    $('#sampleText').css('color', data.color);
                  }
              },
              data: $.param({
                  offsetx: x,
                  offsety: y
              }),
              dataType: 'json',
              error: function(xhr, textStatus, errorThrown) {
                  displayError(textStatus);
              }
          }
        );
      }
    );

    // set the default color to black
    $('#sampleText').css('color', 'black');

    $('#send').click(
      function(e) {
          sendMessage();
      }
    );

    $('#delete').click(
      function(e) {
          deleteMessages();
      }
    );

    // set autocomplete off
    $('#messageBox').attr('autocomplete', 'off');

    // handle the enter key event
    $('#messageBox').keydown(
      function(e) {
          if (e.keyCode == 13) {
              sendMessage();
          }
      }
    );

    retrieveNewMessages();
});
