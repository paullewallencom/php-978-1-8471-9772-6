<?php
// reference the file containing the Chat class
require_once("chat.class.php");
// retrieve the operation to be performed
$mode = $_POST['mode'];
 
// default the last message id to 0
$id = 0;
// create a new Chat instance
$chat = new Chat();

// if the operation is SendAndRetrieve
if($mode == 'SendAndRetrieveNew')
{
  // retrieve the action parameters used to add a new message
  $name = $_POST['name']; 
  $message = $_POST['message'];
  $color = $_POST['color'];
  $id = $_POST['id'];
  
  // check if we have valid values 
  if ($name != '' && $message != '' && $color != '') 
  {
    // post the message to the database     
    $chat->postMessage($name, $message, $color); 
  }
}
// if the operation is DeleteAndRetrieve
elseif($mode == 'DeleteAndRetrieveNew')
{
  // delete all existing messages
  $chat->deleteMessages();         
}
// if the operation is Retrieve
elseif($mode == 'RetrieveNew')
{
  // get the id of the last message retrieved by the client
  $id = $_POST['id'];    
}

// Clear the output
if(ob_get_length()) ob_clean();
// Headers are sent to prevent browsers from caching
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); 
header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . 'GMT'); 
header('Cache-Control: no-cache, must-revalidate'); 
header('Pragma: no-cache');
header('Content-Type: application/json');
// retrieve new messages from the server
echo json_encode($chat->retrieveNewMessages($id));
?>
