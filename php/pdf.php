
<?php

require_once 'tcpdf/config/tcpdf_config.php';
require_once 'tcpdf/tcpdf.php';


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';
require 'credential.php';

$name = $_GET['useID'];
$date = $_GET['date'];
$time = $_GET['time'];
$id_marcacao =  $_GET['id'];
// echo $name;


class MYPDF extends TCPDF
{

    function Header()
    {

        // Logo
        $image_file = '../img/logoRed.png';
        $dimx = 15;
        $dimy = 8;
        $withid = 28;

        $this->Image(
            $image_file,
            $dimx,
            $dimy,
            $withid,
            '',
            'PNG',
            ''/*link*/,
            'T',
            false,
            300,
            '',
            false,
            false,
            0,
            false,
            false,
            false
        );

        $test = " Pablo Barbeshop | Notificalção de Agendamento 2020-2021";

        $this->Cell(0, 0, $test, 0, 0, 'R', 0, '', 0, false, 'T', 'M');
        $this->SetY(-271);


        $this->setColor(1);
        $this->SetFont('helvetica', 'B', 11);

        $this->Cell(0, 0, '', 1, 0, FALSE, 'C', 2, '', 4, FALSE, 'T', 'M');
    }

    function Footer()
    {

        $txt = 'Pablo Barbeshop -  Cabelereiro Masculino  Tel +351 925 456 367 323 |  ';
        $txt .= ' Rua Dom Pedro V, 1058 | 4785-308 Trofa-Porto - Portugal |';
        $txt .= ' fixo: +351 223 456 781 |  www.pablobarbeshop.pt ';
        $image_file = "../images/logo_tecit.png";
        $this->Image($image_file, 13, 259, 40, '', 'PNG', '', 'T', false, 300, '', false, false, 0, false, false, false);
        $this->SetFont('helvetica', 'I', 6);
        $this->SetY(-22);
        // data
        $dt = new DateTime();
        // morada
        $this->Cell(174, 0, $txt, 1, 0, false, 'C', 0, '', 2, false, 'T', 'M');
        // numeros de pagina
        $this->Cell(0, 0, 'pag.' . $this->getAliasNumPage() . '/' . $this->getAliasNbPages() . "\n", 1, 0, false, 'C', 0, '', 2, false, 'T', 'M');
        // hora
        $this->Cell(350, $this->SetY(-15), $dt->format('Y-m-d H:i:s'));
    }
}



$pdf = new MYPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', true);
// create new PDF document

//$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Nicola Asuni');
$pdf->SetTitle('TCPDF Example 001');
$pdf->SetSubject('TCPDF Tutorial');
$pdf->SetKeywords('TCPDF, PDF, example, test, guide');

// set default header data
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE . ' 001', PDF_HEADER_STRING, array(0, 64, 255), array(0, 64, 128));
$pdf->setFooterData(array(0, 64, 0), array(0, 64, 128));

// set header and footer fonts
$pdf->setHeaderFont(array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
$pdf->setFooterFont(array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

// set auto page breaks
$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

$pdf->setFontSubsetting(true);
$pdf->SetFont('dejavusans', '', 14, '', true);

// Add a page
// This method has several options, check the source code documentation for more information.
$pdf->AddPage();

// set text shadow effect
$pdf->setTextShadow(array('enabled' => true, 'depth_w' => 0.2, 'depth_h' => 0.2, 'color' => array(196, 196, 196), 'opacity' => 1, 'blend_mode' => 'Normal'));

$txt = <<<EOD

        <!DOCTYPE HTML>
        <html>
        <head>
                 <link rel="stylesheet" type="text/css" href="../css/css.css">     
        </head>
        <body>

        <div class="box-pdf">

            <p>NOTIFICAÇÃO DE AGENDAMENTO </p>
            <p>Referência <b> $id_marcacao </b></p>
            <br>
            <br>
            <br>
            <p> A pedido de <b>$name</b>  Foi efectuado um agendamento com ID  <b>$id_marcacao</b> para data de <b>$date  $time </b>
              através da nossa  plataforma de marcações automática www.pablobarbeshop.pt.</p>

              <p>Nota : Na ausência  deste comprovativo basta indicar o ID de agendamento para ser atendido pelo funcionário. 
            
        </div>

        </body>
        </html>                           
      
EOD;
$pdf->writeHTMLCell(0, 0, '', '', $txt, 0, 1, 0, true, '', true);
//$pdf->writeHTML($txt);


if (isset($_GET['check'])) {

    global  $filePDF;

    // apos a criação do downlaod enviar um email para o admnin 

    $filePDF = $pdf->Output('Doc-Agendamento.pdf', 'F');

    $filePDF  =  $pdf->Output($_SERVER['DOCUMENT_ROOT'].'/barbearia/files_agendamento/Doc-Agendamento.pdf', 'F');


    function sendMail()
    {

        global $filePDF;

        try {

            $mail = new PHPMailer(TRUE);

            /* hesa29ao77@gmail.com
            pass : HESA29TIME07 */

            $email = "hesa29ao77@gmail.com";

            $mail->isSMTP();
           /*  $mail->SMTPDebug = 1; */ // show log de envios 
            $mail->Host = SERVIDOR;
            $mail->SMTPAuth = true;
            $mail->Username = EMAIL;
            $mail->Password = PASS;
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465;
            $mail->setFrom(EMAIL, 'Notificação-Agendamento');
            $mail->addAddress($email);
            $mail->addReplyTo(EMAIL);
            $mail ->addAttachment($_SERVER['DOCUMENT_ROOT'] .'/barbearia/files_agendamento/Doc-Agendamento.pdf');
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

            <div class='box-mail' style='width: 500px; height: 300; border-bottom: thick solid #DBA901; background: chartreuse;'>
               
            <p>De modo a validar a sua nova Password clica no link abaixo</p>
      
            <a href='http://localhost/barbearia/'>ir ao Menu Principal</a></p>

            </div>";

            if ($mail->send()) {

               $param = password_hash("eNVIADO", PASSWORD_DEFAULT);

                header("Location: ../marcacao/index.php?hjdFDFdfdfjkdjk =$param");
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
   
    sendMail();

} else {

    echo "error loadingn pdf ...";
}



?>

<!DOCTYPE html>
<html lang="pt-PT">

<head>

  <title>Pablo Barbeshop</title>
  <meta charset="utf-8">
  <meta name="description" content="Barbearia Pablo Barbeshop" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="../css/css.css">

</head>

</html>