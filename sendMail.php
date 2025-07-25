<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit(0); // CORS preflight
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? 'Contact Form Message';
    $message = $_POST['message'] ?? '';

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'gharbiislem14@gmail.com'; 
        $mail->Password   = 'fhyl mktu ptbk smwt';     
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom('gharbiislem14@gmail.com', $name); 
        $mail->addReplyTo($email, $name); 
        $mail->addAddress('gharbiislem14@gmail.com'); 

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
       $mail->Body = "
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .content { padding: 10px; border: 1px solid #eee; border-radius: 5px; background-color: #f9f9f9; }
        .footer { font-size: 12px; color: #777; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class='content'>
        <p>Dear Islem,</p>

        <p>You have received a new message from the contact form on your portfolio website.</p>

        <p><strong>Sender Name:</strong> {$name}<br>
        <strong>Sender Email:</strong> {$email}</p>

       

        <p><strong>Message:</strong><br>
        {$message}</p>

        <p class='footer'>This message was sent via your website contact form.</p>
      </div>
    </body>
    </html>
";


        $mail->send();
        echo 'success';
    } catch (Exception $e) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
}
?>
