<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $policyNumber = $_POST['policy-number'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $date = $_POST['date'];
    $estimatedLoss = $_POST['estimated-loss'];
    $claimType = $_POST['claim-type'];
    $description = $_POST['description'];

    // Create email body
    $emailBody = "
        Policy Holder Name: $name
        Policy Holder Number: $policyNumber
        Phone: $phone
        Email: $email
        Date of Accident or Loss: $date
        Loss Estimate (KSh.): $estimatedLoss
        Type of Claim: $claimType
        Description: $description
    ";

    // Email settings
    $to = "mweroabdalla@gmail.com";
    $subject = "Insurance Claim";
    $headers = "From: $email\r\n";

    // Send email
    if (mail($to, $subject, $emailBody, $headers)) {
        echo "Form submitted successfully!";
    } else {
        echo "Error sending the form. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
