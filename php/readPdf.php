

<?php

error_reporting(0);

 if (isset($_GET['file'])) { 

    $filename = $_GET['file'];

    $fileDestination = "../files_cv/".$filename;

    header('Content-type:application/pdf');
    header('Content-Description:inline,filename="' .$filename.'"');
    header('Content-Transfer-Encoding:binary');
    header('Accept-ranges:bytes');

    // Send the file to the browser. ope
    @readfile($fileDestination);
}


?>