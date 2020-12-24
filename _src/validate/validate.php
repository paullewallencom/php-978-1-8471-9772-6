<?php
// start PHP session
session_start();
// load error handling script and validation class
require_once ('error_handler.php');
require_once ('validate.class.php');
  
// Create new validator object
$validator = new Validate();

// read validation type (PHP or AJAX?)
$validationType = '';  
if (isset($_POST['validationType']))
{
  $validationType = $_POST['validationType'];
}

// AJAX validation or PHP validation?
if ($validationType == 'php')
{
  // PHP validation is performed by the ValidatePHP method, which returns
  // the page the visitor should be redirected to (which is allok.php if
  // all the data is valid, or back to index.php if not)
  header("Location:" . $validator->ValidatePHP());  
}
else
{
  // AJAX validation is performed by the ValidateAJAX method. The results
  // are used to form an XML document that is sent back to the client
  $response = array("result" =>  
  $validator->ValidateAJAX($_POST['inputValue'], $_POST['fieldID']),
    "fieldid" => $_POST['fieldID'] );
   
  // generate the response
  if(ob_get_length()) ob_clean();
  header('Content-Type: application/json');
  echo json_encode($response);
}
?>
