
<?php

include_once 'conection.php';
include_once 'math.php';


function graphic()
{
    //$date = "hjjkd";

    $arr = array();

    $pendente = countSatus("Pendente");
    $ausencia  = countSatus("Ausência");
    $realizado  = countSatus("Realizado");
    /*   $totalmarcaçõesHoje = contaMarcacao($date); */
    /*  $arr = array($pendente,$ausencia,$realizado,$totalmarcaçõesHoje); */
    $arr = array("Pendente " => $pendente, " Ausencia" => $ausencia, " Realizado " => $realizado);
    echo json_encode($arr);
}

graphic();


?>