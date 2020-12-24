<?php
  // clear any data saved in the session
  session_start();
  session_destroy();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" 
"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>AJAX Form Validation</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="validate.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    Registration Successful!<br />
    <a href="index.php" title="Go back">&lt;&lt; Go back</a>
  </body>
</html>
