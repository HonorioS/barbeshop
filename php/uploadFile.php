<?php

$response = null;

if ($_FILES['file']['name']) {

    $fileName = $_FILES['file']['name'];
    $fileTemp = $_FILES['file']['tmp_name'];
    $fileSize = $_FILES['file']['size'];
    $fileType = $_FILES['file']['type'];
    $fileError = $_FILES['file']['error'];
    $allow = array("pdf");

    $fileExt = explode('.', $fileName);
    $fileActualExtension = strtolower(end($fileExt));
    $fileNewName = $fileExt[0].".".$fileActualExtension;

    if (in_array($fileActualExtension, $allow)) {  

        if ($fileError === 0) {

            if ($fileSize <= 25000000) {

                $fileDestination = "../files_cv/" . $fileName;
                move_uploaded_file($fileTemp, $fileDestination);
                $response= $fileNewName; // send name the file for put in database

            } else {

                $response = "tamanho nao suportado";
            }
        } else {

            $response = "error file";
        }

    } else {

        $response = "invalid extension";
    }
} else {

    $response = -1;
}

switch ($response) {

    case 1:;
        echo $response;
        break;

    case "tamanho nao suportado":;
        echo $response;
        break;

    case "error file":;
        echo $response;
        break;

    case "invalid extension":;
        echo $response;
        break;

    case -1:;
        echo $response;
        break;

    default;
        echo $response;
        break;
}
