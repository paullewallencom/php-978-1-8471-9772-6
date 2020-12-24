<?php
require_once ('index_top.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Degradable AJAX Form Validation with PHP and MySQL</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="validate.css" rel="stylesheet" type="text/css" />  
  </head>
  
  <body onload="setFocus();">
  <script type="text/javascript" src="json2.js"></script>
  <script type="text/javascript" src="xhr.js"></script>
  <script type="text/javascript" src="validate.js"></script>
  <fieldset>
    <legend class="txtFormLegend">New User Registration Form</legend>
    <br />
    <form name="frmRegistration" method="post" action="validate.php">
      <input type="hidden" name="validationType" value="php"/>
        <!-- Username -->
        <label for="txtUsername">Desired username:</label>
        <input id="txtUsername" name="txtUsername" type="text" 
               onblur="validate(this.value, this.id)" 
 
               value="<?php echo $_SESSION['values']['txtUsername'] ?>" />
        <span id="txtUsernameFailed"
              class="<?php echo $_SESSION['errors']['txtUsername'] ?>">
          This username is in use, or empty username field.
        </span>
        <br />
  
        <!-- Name -->
        <label for="txtName">Your name:</label>
        <input id="txtName" name="txtName" type="text" 
               onblur="validate(this.value, this.id)" 
               value="<?php echo $_SESSION['values']['txtName'] ?>" />
        <span id="txtNameFailed"
              class="<?php echo $_SESSION['errors']['txtName'] ?>">
          Please enter your name. 
        </span>
        <br />
          
        <!-- Gender -->
        <label for="selGender">Gender:</label>
        <select name="selGender" id="selGender" 
                onblur="validate(this.value, this.id)">
          <?php buildOptions($genderOptions, 
                             $_SESSION['values']['selGender']); ?>
        </select>
        <span id="selGenderFailed"
              class="<?php echo $_SESSION['errors']['selGender'] ?>">
          Please select your gender. 
        </span>
        <br />
          
        <!-- Birthday -->
        <label for="selBthMonth">Birthday:</label>
        
        <!-- Month -->
        <select name="selBthMonth" id="selBthMonth" 
                onblur="validate(this.value, this.id)">
          <?php buildOptions($monthOptions, 
                             $_SESSION['values']['selBthMonth']); ?>
        </select>
        &nbsp;-&nbsp;        
        <!-- Day -->
        <input type="text" name="txtBthDay" id="txtBthDay" maxlength="2" 
               size="2" 
               onblur="validate(this.value, this.id)" 
               value="<?php echo $_SESSION['values']['txtBthDay'] ?>" />
        &nbsp;-&nbsp;
        <!-- Year -->
        <input type="text" name="txtBthYear" id="txtBthYear" maxlength="4" 
               size="2" onblur="validate(document.getElementById('selBthMonth').options[document.getElementById('selBthMonth').selectedIndex].value + '#' + document.getElementById('txtBthDay').value + '#' + this.value, this.id)" 
               value="<?php echo $_SESSION['values']['txtBthYear'] ?>" />
        
        <!-- Month, Day, Year validation -->
        <span id="selBthMonthFailed"
              class="<?php echo $_SESSION['errors']['selBthMonth'] ?>">
          Please select your birth month. 
        </span>
        <span id="txtBthDayFailed"
              class="<?php echo $_SESSION['errors']['txtBthDay'] ?>">
          Please enter your birth day. 
        </span>
        <span id="txtBthYearFailed"
              class="<?php echo $_SESSION['errors']['txtBthYear'] ?>">
          Please enter a valid date. 
        </span>
        <br />
        
        <!-- Email -->
        <label for="txtEmail">E-mail:</label>
        <input id="txtEmail" name="txtEmail" type="text" 
               onblur="validate(this.value, this.id)" 
               value="<?php echo $_SESSION['values']['txtEmail'] ?>" />
        <span id="txtEmailFailed"
              class="<?php echo $_SESSION['errors']['txtEmail'] ?>">
          Invalid e-mail address.
        </span>
        <br />
          
        <!-- Phone number -->
        <label for="txtPhone">Phone number:</label>
        <input id="txtPhone" name="txtPhone" type="text" 
               onblur="validate(this.value, this.id)" 
               value="<?php echo $_SESSION['values']['txtPhone'] ?>" />
        <span id="txtPhoneFailed"
              class="<?php echo $_SESSION['errors']['txtPhone'] ?>">
          Please insert a valid US phone number (xxx-xxx-xxxx). 
        </span>
        <br />
          
        <!-- Read terms checkbox -->
        <input type="checkbox" id="chkReadTerms" name="chkReadTerms" 
               class="left" 
               onblur="validate(this.checked, this.id)" 
               <?php if ($_SESSION['values']['chkReadTerms'] == 'on') 
                     echo 'checked="checked"' ?> /> 
        I've read the Terms of Use
        <span id="chkReadTermsFailed"
              class="<?php echo $_SESSION['errors']['chkReadTerms'] ?>">
          Please make sure you read the Terms of Use. 
        </span>
        
        <!-- End of form -->
        <hr />
        <span class="txtSmall">Note: All fields are required.</span>
        <br /><br />
        <input type="submit" name="submitbutton" value="Register" 
               class="left button" />
      </form>
    </fieldset>
  </body>
</html>
