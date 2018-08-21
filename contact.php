<?php
if(isset($_POST['submit'] && isset($_POST['email']))){
  $name = $_POST['name'];
  $mailFrom = $_POST['email'];
  $message = $_POST['message'];
  $mailTo = 'michael.p.silverman@gmail.com';
  $subject = 'Email from Landing Page';
  $headers = "From: ".mailFrom;
  $txt = "You have recieved an email from ".name.".\n\n".$message;



  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.php?mailsend");

}

 ?>
