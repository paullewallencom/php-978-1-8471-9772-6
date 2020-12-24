<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html>
  <head>
    <title>Practical AJAX: Working with PHP and MySQL</title>
  </head>
  <body>

<?php
// load configuration file
require_once('error_handler.php');
require_once('config.php');
// connect to the database
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);      
// the SQL query to execute
$query = 'SELECT user_id, user_name FROM users'; 
// execute the query
$result = $mysqli->query($query);  
// loop through the results
while ($row = $result->fetch_array(MYSQLI_ASSOC)) 
{
  // extract user id and name
  $user_id = $row['user_id'];
  $user_name = $row['user_name'];
  // do something with the data (here we output it)
  echo 'Name of user #' . $user_id . ' is ' . $user_name . '<br/>';
}
// close the input stream
 
$result->close();
// close the database connection
$mysqli->close();
?>

  </body>
</html>
