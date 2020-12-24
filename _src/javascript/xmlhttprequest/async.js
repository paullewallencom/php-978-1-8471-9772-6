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

// performs a server request and assigns a callback function 
function process()
{
  // only continue if we have a valid xmlHttp object
  if (xmlHttp)
  {
    // try to connect to the server
    try
    {
      // initiate reading the async.txt file from the server
      xmlHttp.open("GET", "async.txt", true);
      xmlHttp.onreadystatechange = handleRequestStateChange;
      xmlHttp.send(null);
      // change cursor to "busy" hourglass icon
      document.body.style.cursor = "wait";
    }
    // display the error in case of failure
    catch (e)
    {
      alert("Can't connect to server:\n" + e.toString());
      // revert "busy" hourglass icon to normal cursor
       document.body.style.cursor = "default";
    }
  }
}

// function that handles the HTTP response
function handleRequestStateChange() 
{
  // obtain a reference to the <div> element on the page
  myDiv = document.getElementById("myDivElement"); 
  // display the status of the request 
  if (xmlHttp.readyState == 1)
  {
    myDiv.innerHTML += "Request status: 1 (loading) <br/>";
  }
  else if (xmlHttp.readyState == 2)
  {
    myDiv.innerHTML += "Request status: 2 (loaded) <br/>";
  }
  else if (xmlHttp.readyState == 3)
  {
    myDiv.innerHTML += "Request status: 3 (interactive) <br/>";
  }
  // when readyState is 4, we also read the server response
  else if (xmlHttp.readyState == 4) 
  {
    // revert "busy" hourglass icon to normal cursor
    document.body.style.cursor = "default";
    // read response only if HTTP status is "OK"
    if (xmlHttp.status == 200) 
    {
      try
      {
        // read the message from the server
        response = xmlHttp.responseText;
        // display the message 
        myDiv.innerHTML += 
            "Request status: 4 (complete). Server said: <br/>";
        myDiv.innerHTML += response;
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
