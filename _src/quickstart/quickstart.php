<?php
// we'll generate XML output
header('Content-Type: text/xml');
// generate XML header
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
// create the <response> element
echo '<response>';
// retrieve the user name
$name = $_GET['name'];
// generate output depending on the user name received from client
$userNames = array('YODA', 'AUDRA', 'BOGDAN', 'CRISTIAN');
if (in_array(strtoupper($name), $userNames))
  echo 'Hello, master ' . htmlentities($name) . '!';
else if (trim($name) == '')
  echo 'Stranger, please tell me your name!';
else
  echo htmlentities($name) . ', I don\'t know you!';
// close the <response> element
echo '</response>';
?>
