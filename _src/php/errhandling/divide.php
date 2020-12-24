<?php
// load the error handling module
require_once('error_handler.php');
// specify that we're outputting an XML document
header('Content-Type: text/xml');
// calculate the result
$firstNumber = $_GET['firstNumber'];
$secondNumber = $_GET['secondNumber'];
$result = $firstNumber / $secondNumber;
// create a new XML document
$dom = new DOMDocument();
// create the root <response> element and add it to the document
$response = $dom->createElement('response');
$dom->appendChild($response);
// add the calculated sqrt value as a text node child of <response>
$responseText = $dom->createTextNode($result);
$response->appendChild($responseText);
// build the XML structure in a string variable
$xmlString = $dom->saveXML();
// output the XML string
echo $xmlString;
?>
