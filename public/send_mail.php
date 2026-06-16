<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow CORS if needed
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// -------------------------------------------------------------
// IMPORTANT: CONFIGURATION
// -------------------------------------------------------------
// 1. The account that SENDS the emails (the one with the App Password)
$SENDER_EMAIL = "YOUR_SENDER_EMAIL@gmail.com";
$SENDER_APP_PASSWORD = "YOUR_16_DIGIT_APP_PASSWORD_HERE"; 

// 2. The account that RECEIVES the notifications
$RECEIVER_EMAIL = "YOUR_RECEIVER_EMAIL@gmail.com";
// -------------------------------------------------------------

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid JSON data"]);
    exit();
}

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $SENDER_EMAIL;
    $mail->Password   = $SENDER_APP_PASSWORD;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;
    $mail->CharSet    = 'UTF-8';

    // Recipients
    $mail->setFrom($SENDER_EMAIL, 'Saraswati Agro Feeds Website');
    $mail->addAddress($RECEIVER_EMAIL, 'Saraswati Agro Feeds Admin'); // Send to the receiving inbox
    $mail->addReplyTo($data['email'] ?? $RECEIVER_EMAIL, $data['name'] ?? 'Website User');

    // Content
    $mail->isHTML(true);

    if (isset($data['formType']) && $data['formType'] === 'customized_feed') {
        $mail->Subject = "New Customized Feed Inquiry from " . htmlspecialchars($data['name']);
        
        $body = "<h2>New Customized Feed Inquiry</h2>";
        $body .= "<p><strong>Name:</strong> " . htmlspecialchars($data['name'] ?? 'N/A') . "</p>";
        $body .= "<p><strong>Phone:</strong> " . htmlspecialchars($data['phone'] ?? 'N/A') . "</p>";
        $body .= "<p><strong>Email:</strong> " . htmlspecialchars($data['email'] ?? 'N/A') . "</p>";
        $body .= "<p><strong>Animal Type:</strong> " . htmlspecialchars($data['animalType'] ?? 'N/A') . "</p>";
        $body .= "<p><strong>Animal Count:</strong> " . htmlspecialchars($data['animalCount'] ?? 'N/A') . "</p>";
        $body .= "<p><strong>Milk Per Day:</strong> " . htmlspecialchars($data['milkPerDay'] ?? 'N/A') . "</p>";
        $body .= "<p><strong>Current Feed:</strong> " . htmlspecialchars($data['currentFeed'] ?? 'N/A') . "</p>";
        $body .= "<p><strong>Requirement:</strong> " . htmlspecialchars($data['requirement'] ?? 'N/A') . "</p>";
    } else {
        $mail->Subject = "New Dealership Inquiry from " . htmlspecialchars($data['name']);
        
        $body = "<h2>New Dealership Inquiry</h2>";
        $body .= "<p><strong>Name:</strong> " . htmlspecialchars($data['name'] ?? 'N/A') . "</p>";
        $body .= "<p><strong>Business Name:</strong> " . htmlspecialchars($data['businessName'] ?? 'N/A') . "</p>";
        $body .= "<p><strong>Mobile:</strong> " . htmlspecialchars($data['mobile'] ?? 'N/A') . "</p>";
        $body .= "<p><strong>Email:</strong> " . htmlspecialchars($data['email'] ?? 'N/A') . "</p>";
        $body .= "<p><strong>District:</strong> " . htmlspecialchars($data['district'] ?? 'N/A') . "</p>";
        $body .= "<p><strong>State:</strong> " . htmlspecialchars($data['state'] ?? 'N/A') . "</p>";
        $body .= "<p><strong>Message:</strong><br/> " . nl2br(htmlspecialchars($data['message'] ?? 'N/A')) . "</p>";
    }

    $mail->Body = $body;

    $mail->send();
    echo json_encode(["success" => true, "message" => "Message has been sent"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}
?>
