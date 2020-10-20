<?php

include_once 'conection.php';

function login()
{

    global $conexao;

    /*  $response = null; */
    /* 
    $user = $_POST['userPHP'];
    $pass = $_POST['passPHP']; */

    $user = "comerciald";
    $pass = "comerciald";

    $consulta = "SELECT Utilizador,Password FROM utilizadores  WHERE Utilizador = '$user'";
    $result = mysqli_query($conexao, $consulta);

    $row = mysqli_fetch_assoc($result);

    if ($row) {

        if (password_verify($pass, $row['Password']) && $row['Utilizador']== $user) {

            echo "login sucess";
        }
        else{

            echo "login invalid";
        }
    } else {

        echo "login invalid";
    }

}

login();
