<?php


include_once 'conection.php';
include_once 'uploadFile.php';

function add_recrutamento(){


    global $conexao;

    $nome = $_POST['nomePHP'];
    $contacto = $_POST['contactoPHP'];
    $email = $_POST['emailPHP'];
    $morada = $_POST['moradaPHP'];
    $expProf = $_POST['expProfPHP'];
    $file =   $_POST['filePHP'];
    $path =   $_POST['pathPHP'];

    /* validacao de dados */
    $consulta = "SELECT * FROM recrutamento WHERE Nome = '$nome'";
    $result = mysqli_query($conexao, $consulta);
    $data = mysqli_fetch_assoc($result);

    if ($data['Nome'] != $nome || $data['Contacto'] != $contacto || $data['Email'] != $email) {

        $add = "INSERT INTO recrutamento (Nome,Contacto,Email,Morada,ExpProfissional,CV) VALUES   
               ('$nome', '$contacto', '$email', '$morada', '$expProf')";

        if (mysqli_query($conexao, $add)) {

             $fileDestination = "../files_cv/" . $file;
             move_uploaded_file($path, $fileDestination);

            echo "add";

        } else {

            echo "erro";
        }
    } else {

        echo "existe";
    }
}

if ($_POST['add_recrutamentoPHP']) {

    add_recrutamento();
}
