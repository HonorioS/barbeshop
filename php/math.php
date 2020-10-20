<?php


include_once 'conection.php';


function  countSatus($status)
{

  global $conexao;
  $date = date("Y-m-d H:i:s");

  $lasId = "SELECT Status FROM logs where Status='$status' and info='$date'";

  $result =  mysqli_query($conexao, $lasId);

  $row = mysqli_num_rows($result);

  if ($row) {

    return $row;
  } else {

    return 0;
  }
}

function contaMarcacao($date)
{

  global  $conexao;

  $lasId = "SELECT info FROM marcacao WHERE info='$date'";
  $result = mysqli_query($conexao, $lasId);

  $total = mysqli_num_rows($result);
  if ($total) {

    return $total;
  } else {

    return -1;
  }
}

function calculoPercentagem($value)
{

  $result  = ($value / 100) * 100;
  return $result . "%";
}

