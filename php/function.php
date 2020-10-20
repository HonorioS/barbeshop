<?php


include_once 'conection.php';

function login()
{

    global $conexao;

    $user = $_POST['userPHP'];
    $pass = $_POST['passPHP'];

    $consulta = "SELECT * FROM Utilizadores  WHERE Utilizador = '$user'";
    // $result = mysqli_query($conexao, $consulta);

    $resultQuery = mysqli_fetch_array(mysqli_query($conexao, $consulta));

    if ($resultQuery) {

        if ($resultQuery['Utilizador'] == $user && $resultQuery['Password'] == $pass) {

            if ($resultQuery['Tipo'] == "admin") {

                if ($resultQuery['Acesso'] == "desbloqueado") {

                    // header('Location: barbearia/admin/admin.php');
                    echo "ok";
                } else {

                    echo "bloqueado";
                }
            } else {

                echo "denied";
            }
        } else {

            echo "invalid";
        }
    } else {
        echo "-1";
    }
}

if (isset($_POST['loginPHP'])) {

    login();
}


function add_recrutamento()
{

    global $conexao;
    $response = null;
    $response_db = null;

    $nome = $_POST['nomePHP'];
    $contacto = $_POST['contactoPHP'];
    $email = $_POST['emailPHP'];
    $morada = $_POST['moradaPHP'];
    $expProf = $_POST['expProfPHP'];
    $fileName =  $_POST['filePHP'];

    /* validacao de dados */
    $consulta = "SELECT Nome,Contacto,Email  FROM recrutamento where Nome='$nome'";
    $result = mysqli_query($conexao, $consulta);
    $data = mysqli_fetch_array($result);  //mysqli_fetch_assoc

    if ($data['Nome'] == $nome && $data['Contacto'] == $contacto && $data['Email'] == $email) {
        $response_db = 1;
    } else {

        $response_db = -1;
    }

    $add = "INSERT INTO recrutamento (Nome,Contacto,Email,Morada,ExpProfissional,CV) 
            VALUES ('$nome','$contacto', '$email', '$morada','$expProf','$fileName')";

    switch ($response_db) {
        case -1:;
            if (mysqli_query($conexao, $add)) {

                $response = "add";
            } else {

                $fileDestination = "../files_cv/" . $fileName;
                unlink($fileDestination); // delete file
                $response = "error" . $response_db;
            }
            break;

        case 1:;
            $fileDestination = "../files_cv/" . $fileName;
            unlink($fileDestination); // delete file
            $response = "existe";
            break;
    }

    echo $response;
}

if ($_POST['add_recrutamentoPHP']) {

    add_recrutamento();
}

//removCandidatura();

function removCandidatura()
{

    global $conexao;

    $response = null;
    /* 
    $id = $_POST['idPHP'];
    $fileName = $_POST['filePHP']; */

    $id = 59;

    $delet = "DELETE FROM recrutamento WHERE ID='$id'";

    if (mysqli_query($conexao, $delet)) {

        $response = "59";
        // echo "ok";

        /*  $fileDestination = "../files_cv/".$fileName;
        unlink($fileDestination);  */
    } else {

        $response = -1;
        echo "error";
    }

    echo $response;
}

if ($_POST['deletCD']) {

    removCandidatura();

    //add
}


function add_marcacao()
{

    global $conexao;
    $response = null;

    $nome = $_POST['nomePHP'];
    $contacto = $_POST['phonePHP'];
    $servico = $_POST['servicoPHP'];
    $horario = $_POST['hourPHP'];
    $data = $_POST['datePHP'];
    $obs = $_POST['obsPHP'];
    $referencia =  $_POST['codPHP'];

    //$infon = date("Y-m-d H:i:s");

    $dateInfo =  date("Y-m-d");
    $timeInfo =  date("H:i:s");

    if ($data == "" || $data == null) {

        $data = date("Y-m-d");
    }

    /* validacao de dados */

    $add = "INSERT INTO marcacao (Cod,Nome,Contacto,Servico,Datas,Horario,Observacao,Date,hora)
            VALUES('$referencia','$nome', '$contacto', '$servico', '$data', '$horario',  '$obs','$dateInfo', '$timeInfo')";

    if (mysqli_query($conexao, $add)) {

        $response= "add";
    } else {

        $response= "erro-add-marcacao";
    }
    echo $response;
}

if ($_POST['add_marcacaoPHP']) {

    add_marcacao();
}


function getID()
{

    global $conexao;

    $arr = array();

    $lasId = "SELECT ID FROM marcacao  ORDER BY ID DESC";
    $result =  mysqli_query($conexao, $lasId);

    $row = mysqli_fetch_assoc($result);

    if ($row) {

        $arr = array("Existe" => $row['ID']);

    } else {

        $arr = array("empty" => 0);
    }

    echo json_encode($arr);
}

if ($_POST['id_marcacaophp']) {

    getID();
}


function filtraMarcacao()
{

    global $conexao;

    $filter = $_POST['filterPHP'];

    //echo $filter;

    $consulta = "SELECT  * FROM marcacao where Cod='$filter' order by ID";
    $result = mysqli_query($conexao, $consulta);

    /*  if ($filter != "" || $filter != null) { */

    if ($result) {

        while ($row = mysqli_fetch_assoc($result)) {

            echo $row['ID'] . "," . $row['Cod'] . "," . $row['Nome'] . "," . $row['Contacto'] . "," . $row['Servico'] . ","
                . $row['Datas'] . "," . $row['Horario'] . "," . $row['Observacao'] . "," . $row['Date'] . ",";
        }
    } else {

        echo "error";
    }

    /*  } else {

        echo "emptyFilter";
    } */
}

if ($_POST['filtercodPHP']) {

    filtraMarcacao();
}

//listaMarcacao();

function listaMarcacao()
{


    global $conexao;
    $consulta = "SELECT * FROM marcacao ";
    $result = mysqli_query($conexao, $consulta);

    if ($result) {

        while ($row = mysqli_fetch_assoc($result)) {

            echo $row['ID'] . "," . $row['Cod'] . "," . $row['Nome'] . "," . $row['Contacto'] . "," . $row['Servico'] . ","
                . $row['Datas'] . "," . $row['Horario'] . "," . $row['Observacao'] . "," . $row['Date'] . ",";
        }
    } else {

        echo "error";
    }
}

//listaMarcacao();

if ($_POST['listMarcPHP']) {

    listaMarcacao();
}

function listaCandidaturas()
{

    global $conexao;
    $consulta = "SELECT * FROM recrutamento ";
    $result = mysqli_query($conexao, $consulta);

    if ($result) {

        while ($row = mysqli_fetch_assoc($result)) {

            echo $row['ID'] . "," . $row['Nome'] . "," . $row['Contacto'] . "," .
                $row['Email'] . "," . $row['Morada'] . "," . $row['ExpProfissional'] . "," . $row['CV'] . ",";
        }
    } else {

        echo "error";
    }
}


if ($_POST['listRecrtPHP']) {

    listaCandidaturas();
}


function addLogs()
{

    global $conexao;
    $response = NULL;

    $nome =  $_POST['nomePHP'];
    $contacto =  $_POST['contactoPHP'];
    $servico =  $_POST['servicoPHP'];
    $datas =  $_POST['datasPHP'];
    $status =  $_POST['statusPHP'];
    $obs =  $_POST['observacaoPHP'];
    $cod = $_POST['codigoPHP'];
    $hora  = $_POST['horaPHP'];
    $infon = date("Y-m-d H:i:s");

    // $add = "INSERT INTO timer(Data,Time,User) VALUES('$date','" . $time[$i] . "','$user')";

    $add = "INSERT INTO logs (COD,Cliente,Contacto,Data,Hora,Servico,Status,Obs,info) 
            value('$cod','$nome','$contacto','$datas','$hora','$servico','$status','$obs','$infon')";


    $result = mysqli_query($conexao, $add);

    if ($result) {

        $response = "send";
    } else {

        $response = "error";
    }

    echo  $response;
}

if ($_POST['addLogsPHP']) {

    addLogs();
}

function remov_marcacao()
{

    global $conexao;

    $response = NULL;

    $ID = $_POST['idPHP'];

    $delet =  "DELETE FROM marcacao WHERE ID='$ID'";

    $result = mysqli_query($conexao, $delet);

    if ($result) {

        $response = "ok";
    } else {

        $response = "error";
    }
    echo $response;
}

if ($_POST['removItemMc']) {

    remov_marcacao();
}



function listaUser()
{

    global $conexao;
    $consulta = "SELECT * FROM utilizadores  order by ID";
    $result = mysqli_query($conexao, $consulta);

    if ($result) {

        while ($row = mysqli_fetch_assoc($result)) {

            echo $row['ID'] . "," . $row['Nome'] . "," . $row['Email'] . "," .
                $row['Utilizador'] . "," . $row['Password'] . "," . $row['Tipo'] . "," . $row['Acesso'] . ",";
        }
    } else {

        echo "error";
    }
}

if ($_POST['listaUserPHP']) {

    listaUser();
}

/* addUser(); */

//addUser();

function addUser()
{
    global $conexao;

    $name  =  $_POST['namePHP'];
    $email =  $_POST['emailPHP'];
    $userName =  $_POST['userPHP'];
    $password = password_hash($_POST['passPHP'], PASSWORD_DEFAULT);
    $userType =  $_POST['typeUserPHP'];
    $acess =  $_POST['acessPHP'];

    /*  $name  = "testst";
    $email =  "testst";
    $userName =   "testst";
    $password =  "testst";
    $userType =  "admin";
    $acess =  "desbloqueado"; */

    $add = "INSERT INTO utilizadores (Nome,Email,Utilizador,Password,Tipo,Acesso) 
           VALUES( '$name','$email','$userName','$password','$userType','$acess')";

    $result = mysqli_query($conexao, $add);

    if ($result) {

        echo 1;
    } else {

        echo -1;
    }
}

if ($_POST['addUserPHP']) {

    addUser();
}


function updateUser()
{

    global $conexao;

    $name  =  $_POST['namePHP'];
    $email =  $_POST['emailPHP'];
    $userName =  $_POST['userPHP'];
    $password =  $_POST['passPHP'];
    $userType =  $_POST['typeUserPHP'];
    $acess =  $_POST['acessPHP'];
    $id =  $_POST['idPHP'];

    $update = "UPDATE utilizadores
    SET Nome = '$name', Email='$email', Utilizador='$userName',Password='$password',Tipo=' $userType',Acesso='$acess'
    WHERE ID = '$id'";

    $result = mysqli_query($conexao, $update);

    if ($result) {

        echo 1;
    } else {

        echo -1;
    }
}

if ($_POST['updatPHP']) {

    updateUser();
}

function deletUser()
{

    global $conexao;

    $id =  $_POST['idPHP'];

    $delet =  "DELETE FROM utilizadores WHERE ID='$id'";

    $result = mysqli_query($conexao, $delet);

    if ($result) {

        echo 1;
    } else {

        echo -1;
    }
}

if ($_POST['deletPHP']) {

    deletUser();
}


function filtraUser()
{

    global $conexao;
    $filter = $_POST['filterPHP'];

    $consulta = "SELECT  * FROM utilizadores where Nome='$filter' order by ID";
    $result = mysqli_query($conexao, $consulta);

    if ($filter != "" || $filter != null) {

        if ($result) {

            while ($row = mysqli_fetch_assoc($result)) {

                echo $row['ID'] . "," . $row['Nome'] . "," . $row['Email'] . "," .
                    $row['Utilizador'] . "," . $row['Password'] . "," . $row['Tipo'] . "," . $row['Acesso'] . ",";
            }
        } else {

            echo "error";
        }
    } else {

        echo "emptyFilter";
    }
}

if ($_POST['filterUserPHP']) {

    filtraUser();
}




function addTimer()
{

    global $conexao;

    $date = date("Y-m-d");
    $time = $_POST['horaPHP'];
    $user =  $_POST['userPHP'];
    $arr = array();
    $check = null;


    foreach ($time as $item) {   // armazena os valor da coluna(DB) no array 

        $consulta = "SELECT Time FROM timer WHERE Time='$item'";
        $result =  mysqli_query($conexao, $consulta);

        $row = mysqli_fetch_assoc($result);
        array_push($arr, $row["Time"]);
    }

    for ($i = 0; $i < sizeof($arr); $i++) { // verifica se os valores sao diferente/iguais 

        if ($arr[$i] != $time[$i]) { // validação de dados 

            $add = "INSERT INTO timer(Data,Time,User) VALUES('$date','" . $time[$i] . "','$user')";

            if (mysqli_query($conexao, $add)) {

                $check = 1;
            } else {

                $check = -1;
            }
        } else {

            $check = 0;
        }
    }

    switch ($check) {

        case 1:
            echo 1;
            break;

        case -1:
            echo  -1;
            break;

        case 0:
            echo  0;
            break;
    }
}


if ($_POST['timer_addPHP']) {

    addTimer();
}

function listaTimer()
{

    global $conexao;
    $consulta = "SELECT * FROM timer order by ID";

    $result = mysqli_query($conexao, $consulta);

    if ($result) {

        while ($row = mysqli_fetch_assoc($result)) {

            echo $row['Data'] . "," . $row['Time'] . "," . $row['User'] . ",";
        }
    } else {

        echo "error";
    }
}

if ($_POST['timerPHP']) {


    listaTimer();
}


function removTime()
{

    global $conexao;

    $time = $_POST['horaPHP'];
    $delet =  "DELETE FROM timer WHERE Time='$time'";


    $result = mysqli_query($conexao, $delet);

    if ($result) {

        echo 1;
    } else {

        echo -1;
    }
}

if ($_POST['timeDelPHP']) {

    removTime();
}

function number_time()
{
    global $conexao;

    $arr = array();

    $lasId = "SELECT * FROM timer";
    $result =  mysqli_query($conexao, $lasId);

    $total_row = mysqli_num_rows($result);

    if ($total_row>=0) {

        $arr = array("qtdade" => $total_row);

    } else {

        $arr = array("error"=> -1);
    }

    echo json_encode($arr);
}

if ($_POST['numberTimelPHP']) {

    number_time();
}
