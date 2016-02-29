<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once 'phpmailer/PHPMailerAutoload.php';

    if (isset($_POST['quote_name']) && 
        isset($_POST['quote_email']) && 
        isset($_POST['quote_company']) && 
        isset($_POST['quote_phone']) && 
        isset($_POST['quote_address']) && 
        isset($_POST['quote_city']) && 
        isset($_POST['quote_state']) && 
        isset($_POST['quote_zip']) && 
        isset($_POST['quote_link1']) && 
        isset($_POST['quote_link2']) && 
        isset($_POST['quote_link3']) && 
        isset($_POST['quote_link4']) && 
        isset($_POST['quote_details'])
       ) {

    //check if any of the inputs are empty
    if (
        empty($_POST['quote_name']) || 
        empty($_POST['quote_email']) ||  
        empty($_POST['quote_phone']) || 
        empty($_POST['quote_details'])) 
    {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
        exit;
    }
        
    //create an instance of PHPMailer
    $mail = new PHPMailer();

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.live.com';                        // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'lotusms@outlook.com';              // SMTP username
    $mail->Password = '5tgb%TGB';                         // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to
    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->From = $_POST['quote_email'];
    $mail->FromName = $_POST['quote_name'];
    $mail->AddAddress('lotusms@outlook.com'); //recipient 
    $mail->Subject = "Quote from LOTUS MS Online";
    $mail->Body = 
        "Name: " . $_POST['quote_name'] . 
        "<br>Company: " . $_POST['quote_company'] .
        "<br>Phone: " . $_POST['quote_phone'] . 
        "<br>Address: " . $_POST['quote_address'] . 
        "<br>City: " . $_POST['quote_city'] . 
        "<br>State: " . $_POST['quote_state'] . 
        "<br>Zip: " . $_POST['quote_zip'] . 
        "<br>Inspirational Link: " . $_POST['quote_link1'] . 
        "<br>Inspirational Link: " . $_POST['quote_link2'] . 
        "<br>Inspirational Link: " . $_POST['quote_link3'] . 
        "<br>Inspirational Link: " . $_POST['quote_link4'] . 
        "<br>Project Details: " . stripslashes($_POST['quote_details']);


    if (isset($_POST['ref'])) {
        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    }



    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }

        header('Location: http://testangular.lotusmarketingsolutions.com');
        echo json_encode($data);

    } else {

        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);

    }