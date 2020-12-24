// holds the remote server address 
var serverAddress = "validate.php";
// when set to true, display detailed error messages
var showErrors = true;

// the function handles the validation for any form field
function validate(inputValue, fieldID)
{
  // the data to be sent to the server through POST
  var data = "validationType=ajax&inputValue=" + inputValue + 
             "&fieldID=" + fieldID;
    
  // build the settings object for the XmlHttp object
  var settings = 
  {
    url: serverAddress, 
    type: "POST",
    async: true,
    complete: function (xhr, response, status)
    {
      if (xhr.responseText.indexOf("ERRNO") >= 0 
          || xhr.responseText.indexOf("error:") >= 0
          || xhr.responseText.length == 0)
      {
        alert(xhr.responseText.length == 0 ? 
          "Server error." : response);
      }                   
      result = response.result;
      fieldID = response.fieldid;
      // find the HTML element that displays the error
      message = document.getElementById(fieldID + "Failed");
      // show the error or hide the error
      message.className = (result == "0") ? "error" : "hidden";
    },
    data: data,
    showErrors: showErrors
  };
  
  // make a server request to validate the input data
  var xmlHttp = new XmlHttp(settings);
}

// sets focus on the first field of the form
function setFocus()    
{
  document.getElementById("txtUsername").focus();
}
