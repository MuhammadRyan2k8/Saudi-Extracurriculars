<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Format the data
$data = "Name: $name\nEmail: $email\nMessage: $message\n\n";

// Save the data to a file
file_put_contents(' ', $data, FILE_APPEND);

// Redirect to a thank-you page (or back to the form)
header('Location: index.html');
exit();
?>
