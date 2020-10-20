<?php

require_once 'math.php';
require_once 'tcpdf/config/tcpdf_config.php';
require_once 'tcpdf/tcpdf.php';


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

        $test = " Pablo Barbeshop | Relatório de Produção 2020-2021";

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
$pdf->SetTitle('Relatorio Produtividade-Real-time 001');
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
// date("Y-m-d H:i:s");
$infon = date("Y-m-d H:i:s");
$pendente = countSatus("Pendente");
$ausencia  = countSatus("Ausência");
$realizado  = countSatus("Realizado");


// set text shadow effect
$pdf->setTextShadow(array('enabled' => true, 'depth_w' => 0.2, 'depth_h' => 0.2, 'color' => array(196, 196, 196), 'opacity' => 1, 'blend_mode' => 'Normal'));

$html = '

<br>
<br>
<br>

<p> <b>Relatorio de Produtividade ' . $infon . '</b></p>

  <div class="box-report">

       <section >

       <p>O presente relatório, baseia-se apenas nas marcações efectuados nesta plataforma, as que foram
       efectuados por outros meios ou canais tradicionais, não foram refletidos aqui.</p>
       <p>Os resultados apresentados são todos todos valores exatos e, processados   em tempo real.</p> 
       
     <p>Para a referida  data e hora, foram registados  os seguintes eventos :</p>
     
     <p>Serviços realizado. <b> ' . $realizado . ' </b> </p>
     <p>Agendamentos pendente. <b>' . $pendente . '</b>. </p>
     <p>Falta de Comparência. <b>' . $ausencia . '</b>. </p>
     

       </section>

  </div>


<p> </p>';


$pdf->writeHTMLCell(0, 0, '', '', $html, 0, 1, 0, true, '', true);
//$pdf->writeHTML($html, true, false, true, false, '');
//$pdf->writeHTML($txt);
// echo "ok";

$pdf->Output('sampleExamnple.pdf', 'I')


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