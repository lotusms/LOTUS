<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once 'phpmailer/PHPMailerAutoload.php';

if (
    isset($_POST['contact_name']) && 
    isset($_POST['contact_email']) && 
    isset($_POST['contact_company']) && 
    isset($_POST['contact_phone']) && 
    isset($_POST['contact_message'])
) {

    //check if any of the inputs are empty
    if (
        empty($_POST['contact_name']) || 
        empty($_POST['contact_email']) ||  
        empty($_POST['contact_phone']) ||
        empty($_POST['contact_message'])
    ) 
    {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
        exit;
    }

    //create an instance of PHPMailer
    $mail = new PHPMailer();
    
    $mail->isSMTP();                            // Set mailer to use SMTP
    $mail->Host = 'smtp.live.com';              // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                     // Enable SMTP authentication
    $mail->Username = 'lotusms@outlook.com';    // SMTP username
    $mail->Password = '5tgb%TGB';               // SMTP password
    $mail->SMTPSecure = 'tls';                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                          // TCP port to connect to

    $mail->From = $_POST['contact_email'];
    $mail->FromName = $_POST['contact_name'];
    $mail->AddAddress('lotusms@outlook.com');   //recipient 
    $mail->Subject = "Contact from LOTUS MS Online";
    $mail->Body = 
        "Name: " . $_POST['contact_name'] . 
        "<br>Company: " . $_POST['contact_company'] . 
        "<br>Phone: " . $_POST['contact_phone'] . 
        "<br>Message: " . stripslashes($_POST['contact_message']);

    if (isset($_POST['ref'])) {
        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    }


    
    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }

    header('Location: http://testangular.lotusmarketingsolutions.com/contact');
    echo json_encode($data);

} else {

    $data = array('success' => false, 'message' => 'Please fill out the form completely.');
    echo json_encode($data);

}