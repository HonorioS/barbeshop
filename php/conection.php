<?php

error_reporting(0);
/*header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");*/

function conexaoBaseDados()
{

    global $conexao;

    $host = "localhost";  //172.17.235.153 localhost
    $user = "root";
    $pass = "";
    $baseDados = "barbeshopdb";

    $conexao = new mysqli($host, $user, $pass, $baseDados);
    mysqli_set_charset($conexao, "utf8mb4");

    if (! $conexao) {

         /*  die("falha na conexao : " . mysqli_error($conexao));
          echo " conection error "; */
    }

  /*  echo "conectado"; */
}

conexaoBaseDados();





?>