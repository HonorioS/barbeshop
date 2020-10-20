<?php

session_start();

include_once 'conection.php';

function login()
{

    global $conexao;
    $response = null;
  
    $user = $_POST['userPHP'];
    $pass = $_POST['passPHP']; 

    $consulta = "SELECT Utilizador,Password,Tipo,Acesso FROM utilizadores  WHERE Utilizador = '$user' Limit 1";
    $result = mysqli_query($conexao, $consulta);

    $row = mysqli_fetch_assoc($result);

    if ($row) {

        if (password_verify($pass, $row['Password']) && $row['Utilizador'] == $user) {

            if ($row['Tipo'] == "admin") {

                if ($row['Acesso'] == "desbloqueado") {

                    $_SESSION['user'] = $row['Utilizador'];
                    $_SESSION['pass'] = $row['Password'];

                    if ($_SESSION['user'] == $row['Utilizador'] && $_SESSION['pass'] == $row['Password']) {

                        $response =  "sucess";
                    }
                    else{

                        $response = "sessao invalid"; 
                    }
                }
                else{

                    $response = "bloqueado"; 
                }
            }
            else{

                $response = "permissao negado"; 
            }

           
        } else {

            $response = "login invalid";
        }
    } else {

        $response = "login invalid";
    }

    echo $response;
}

if (isset($_POST['loginPHP'])) {

    login();
}

function logout(){

    session_start();
    unset($_SESSION);

    session_destroy();
    
    echo "success";

}

if (isset($_POST['logoutPHP'])) {

    logout();
}
