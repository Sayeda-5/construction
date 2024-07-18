<?php
  // Configuration
  $toEmail = 'sidrasyed199930@gmail.com';
  $subject = 'New Message from Website';

  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Validate form data
  if (empty($name) || empty($email) || empty($message)) {
    echo 'Please fill in all fields.';
    exit;
  }

  // Send email
  $headers = 'From: '. $email. "\r\n".
             'Reply-To: '. $email. "\r\n".
             'MIME-Version: 1.0'. "\r\n".
             'Content-Type: text/html; charset=UTF-8';
  $body = '<p>Name: '. $name. '</p>'.
           '<p>Email: '. $email. '</p>'.
           '<p>Message: '. $message. '</p>';
  if (mail($toEmail, $subject, $body, $headers)) {
    echo 'Thank you for contacting us!';
  } else {
    echo 'Error sending email.';
  }
?>