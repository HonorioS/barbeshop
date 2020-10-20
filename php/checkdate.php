<?php

include_once 'conection.php';

function check(){

    $date =  $_POST['datePHP'];
    $time =  $_POST['timePHP'];

 /*    $date = "2020-10-06";
    $time =  "12:00"; */

    global $conexao;

    $arr = array();

    $consulta = "SELECT Datas,Horario  FROM marcacao where  Datas='$date' and  Horario='$time'";
    $result = mysqli_query($conexao, $consulta);

    $row = mysqli_num_rows($result);
  
    if ($row>0) {

        $arr = array("Existe" => 1);

    } else {
  
        $arr = array("N_existe" => -1);
    }

    echo json_encode($arr);

}

check();

?>