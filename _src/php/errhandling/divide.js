// holds an instance of XMLHttpRequest
var xmlHttp = createXmlHttpRequestObject();

// creates an XMLHttpRequest instance
function createXmlHttpRequestObject() 
{
  // will store the reference to the XMLHttpRequest object
  var xmlHttp;
  // create the XMLHttpRequest object
  try
  {
    // assume IE7 or newer or other modern browsers
    xmlHttp = new XMLHttpRequest();
  }
  catch(e)
  {
    // assume IE6 or older
    try
    {
      xmlHttp = new ActiveXObject("Microsoft.XMLHttp");
    }
    catch(e) { }
  }
  // return the created object or display an error message
  if (!xmlHttp)
    alert("Error creating the XMLHttpRequest object.");
  else 
    return xmlHttp;
}
 
// initiates a server request to send the numbers typed by the user 
// and sets a callback function that reads the server response
function process()
{
  // only continue if xmlHttp isn't void
  if (xmlHttp)
  {
    // try to connect to the server
    try
    {
      // get the two values entered by the user
      var firstNumber = document.getElementById("firstNumber").value; 
      var secondNumber = document.getElementById("secondNumber").value;

      // create the params string
      var params = "firstNumber=" + firstNumber + 
                   "&secondNumber=" + secondNumber;

      // initiate the asynchronous HTTP request
      xmlHttp.open("GET", "divide.php?" + params, true);
      xmlHttp.onreadystatechange = handleRequestStateChange;
      xmlHttp.send(null);
    }
    // display the error in case of failure
    catch (e)
    {
      alert("Can't connect to server:\n" + e.toString());
    }
  }
}

// function that handles the HTTP response
function handleRequestStateChange() 
{
  // when readyState is 4, we read the server response
  if (xmlHttp.readyState == 4) 
  {
    // read response only if HTTP status is "OK"
    if (xmlHttp.status == 200) 
    {
      try
      {
        // read the response from the server
        handleServerResponse();
      }
      catch(e)
      {
        // display error message
        alert("Error reading the response: " + e.toString());
      }
    } 
    else
    {
      // display status message
      alert("There was a problem retrieving the data:\n" + 
            xmlHttp.statusText);
      // revert "busy" hourglass icon to normal cursor
      document.body.style.cursor = "default"; 
    }
  }
}

// handles the response received from the server
function handleServerResponse()
{
  // retrieve the server's response packaged as an XML DOM object
  var xmlResponse = xmlHttp.responseXML;

  // catching server-side errors
  if (!xmlResponse || !xmlResponse.documentElement)
    throw("Invalid XML structure:\n" + xmlHttp.responseText);

  // catching server-side errors (Firefox version)
  var rootNodeName = xmlResponse.documentElement.nodeName;
  if (rootNodeName == "parsererror") 
    throw("Invalid XML structure:\n" + xmlHttp.responseText);

  // getting the root element (the document element)
  xmlRoot = xmlResponse.documentElement;
  // testing that we received the XML document we expect
  if (rootNodeName != "response" || !xmlRoot.firstChild)
    throw("Invalid XML structure:\n" + xmlHttp.responseText);

  // the value we need to display is the child of the root <response> element
  responseText = xmlRoot.firstChild.data;

  // display the user message
  myDiv = document.getElementById("myDivElement");
  myDiv.innerHTML = "Server says the answer is: " + responseText;
}
