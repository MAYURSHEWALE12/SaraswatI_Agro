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
$SENDER_EMAIL = "YOUR_GMAIL_ADDRESS@gmail.com";
$SENDER_APP_PASSWORD = "YOUR_16_DIGIT_APP_PASSWORD_HERE"; 

// 2. The account that RECEIVES the notifications
$RECEIVER_EMAIL = "YOUR_GMAIL_ADDRESS@gmail.com";
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
        
        $body = "
        <div style='font-family: Arial, sans-serif; max-w-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);'>
            <div style='background-color: #f97316; padding: 20px; text-align: center;'>
                <h2 style='color: white; margin: 0; font-size: 24px;'>🌾 Customized Feed Inquiry</h2>
            </div>
            <div style='padding: 30px; background-color: #ffffff;'>
                <table style='width: 100%; border-collapse: collapse;'>
                    <tr><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0;'><strong style='color: #4b5563;'>Name:</strong></td><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827;'>" . htmlspecialchars($data['name'] ?? 'N/A') . "</td></tr>
                    <tr><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0;'><strong style='color: #4b5563;'>Phone:</strong></td><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827;'>" . htmlspecialchars($data['phone'] ?? 'N/A') . "</td></tr>
                    <tr><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0;'><strong style='color: #4b5563;'>Email:</strong></td><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827;'><a href='mailto:" . htmlspecialchars($data['email'] ?? '') . "' style='color: #2563eb; text-decoration: none;'>" . htmlspecialchars($data['email'] ?? 'N/A') . "</a></td></tr>
                    <tr><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0;'><strong style='color: #4b5563;'>Animal Type:</strong></td><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827;'>" . htmlspecialchars($data['animalType'] ?? 'N/A') . "</td></tr>
                    <tr><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0;'><strong style='color: #4b5563;'>Animal Count:</strong></td><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827;'>" . htmlspecialchars($data['animalCount'] ?? 'N/A') . "</td></tr>
                    <tr><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0;'><strong style='color: #4b5563;'>Milk Per Day:</strong></td><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827;'>" . htmlspecialchars($data['milkPerDay'] ?? 'N/A') . "</td></tr>
                    <tr><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0;'><strong style='color: #4b5563;'>Current Feed:</strong></td><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827;'>" . htmlspecialchars($data['currentFeed'] ?? 'N/A') . "</td></tr>
                    <tr><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0;'><strong style='color: #4b5563;'>Requirement:</strong></td><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827;'>" . htmlspecialchars($data['requirement'] ?? 'N/A') . "</td></tr>
                </table>
                <div style='margin-top: 30px; text-align: center; color: #6b7280; font-size: 12px;'>
                    This email was sent automatically from the Saraswati Agro Feeds website.
                </div>
            </div>
        </div>
        ";
    } else {
        $mail->Subject = "New Dealership Inquiry from " . htmlspecialchars($data['name']);
        
        $body = "
        <div style='font-family: Arial, sans-serif; max-w-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);'>
            <div style='background-color: #16a34a; padding: 20px; text-align: center;'>
                <h2 style='color: white; margin: 0; font-size: 24px;'>🤝 New Dealership Inquiry</h2>
            </div>
            <div style='padding: 30px; background-color: #ffffff;'>
                <table style='width: 100%; border-collapse: collapse;'>
                    <tr><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0; width: 35%;'><strong style='color: #4b5563;'>Name:</strong></td><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827;'>" . htmlspecialchars($data['name'] ?? 'N/A') . "</td></tr>
                    <tr><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0;'><strong style='color: #4b5563;'>Business Name:</strong></td><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827;'>" . htmlspecialchars($data['businessName'] ?? 'N/A') . "</td></tr>
                    <tr><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0;'><strong style='color: #4b5563;'>Mobile:</strong></td><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827;'>" . htmlspecialchars($data['mobile'] ?? 'N/A') . "</td></tr>
                    <tr><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0;'><strong style='color: #4b5563;'>Email:</strong></td><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827;'><a href='mailto:" . htmlspecialchars($data['email'] ?? '') . "' style='color: #2563eb; text-decoration: none;'>" . htmlspecialchars($data['email'] ?? 'N/A') . "</a></td></tr>
                    <tr><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0;'><strong style='color: #4b5563;'>District:</strong></td><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827;'>" . htmlspecialchars($data['district'] ?? 'N/A') . "</td></tr>
                    <tr><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0;'><strong style='color: #4b5563;'>State:</strong></td><td style='padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111827;'>" . htmlspecialchars($data['state'] ?? 'N/A') . "</td></tr>
                </table>
                <div style='margin-top: 20px; background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #16a34a;'>
                    <strong style='color: #4b5563; display: block; margin-bottom: 8px;'>Message:</strong>
                    <div style='color: #374151; line-height: 1.5;'>" . nl2br(htmlspecialchars($data['message'] ?? 'N/A')) . "</div>
                </div>
                <div style='margin-top: 30px; text-align: center; color: #6b7280; font-size: 12px;'>
                    This email was sent automatically from the Saraswati Agro Feeds website.
                </div>
            </div>
        </div>
        ";
    }

    $mail->Body = $body;

    $mail->send();
    echo json_encode(["success" => true, "message" => "Message has been sent"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}
?>
