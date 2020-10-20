<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
include_once 'conection.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';
require 'credential.php';

  
/* hesa29ao77@gmail.com
pass : HESA29TIME07 */
function sendMail()
{

    try {

        $mail = new PHPMailer(TRUE);

        $email = "hesa29ao77@gmail.com";
     
        $mail->isSMTP();
        $mail->SMTPDebug = 3;
        $mail->Host = SERVIDOR;
        $mail->SMTPAuth = true;
        $mail->Username = EMAIL;
        $mail->Password = PASS;
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        $mail->setFrom(EMAIL, 'Recuperacao');
        $mail->addAddress($email);
        $mail ->addAttachment($_SERVER['DOCUMENT_ROOT'] .'/barbearia/files_agendamento/Doc-Agendamento.pdf');
        $mail->addReplyTo(EMAIL);
        $mail->isHTML(true);

        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );

        $mail->Subject = "New Password";
        $mail->Body = "

        <p>De modo a validar a sua nova Password clica no link abaixo</p>
  
        <a href='http://localhost/barbearia/'>ir ao Menu Principal</a></p>";

        if ($mail->send()) {

            echo "enviado";
        } 
        else {

            echo "erro";
        }
    } 
    catch (Exception $e) {
        echo $e->errorMessage();
    } catch (\Exception $e) {
        echo $e->getMessage();
    }
}



if ($_GET['check']) {
    
    sendMail();
}
else  {

    echo "error to send email";
}

?>