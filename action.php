<?php
$myemail = 'bettina@jasoc.com.ar';
    if(isset($_POST["submit"])){
        $name = $_POST["name"];
        $last_name = $_POST["lastName"];
        $email_address = $_POST["mail"];
        $message = $_POST["message"];

        $to = $myemail;
        $email_subject = "Nueva consulta | Pagina web";
        $email_body = '<html><body>';
        $email_body .= "<p><i> Recibiste un mensaje nuevo a traves de tu pagina web. </i></p><hr>";
        $email_body .= "<p><strong>Nombre: </strong> $name $last_name</p>";
        $email_body .= "<p><strong>Correo electrónico: </strong> $email_address</p>";
        $email_body .= "<p><strong>Mensaje: </strong></p>";
        $email_body .= "<p>$message</p>";
        $email_body .= '</body></html>';

        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $headers .= "From: $myemail\n";
        $headers .= "Reply-To: $email_address";
        mail($to,$email_subject,$email_body,$headers);
        header("Location: index.php?mailsent");
    }
?>