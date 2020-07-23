<?php
    if(isset($_POST["submit"])){
        $name = $_POST["name"];
        $lastName = $_POST["lastName"];
        $mailFrom = $_POST["mail"];
        $message = $_POST["message"];

        $mailTo = "agustinacoppe_@hotmail.com";
        $headers = "From: bettina@jasoc.com.ar";
        $headers .= "Reply-To: $mailFrom";
        $subject = "New message [Wordpress]";
        $txt = "You have received an e-mail from $name $lastName.\n\n $message";

        mail($mailTo, $subject, $txt, $headers);
        header("Location: index.php?mailsent");
    }
?>