<!DOCTYPE html>
<html lang="pt-PT">

<head>

  <title>Pablo Barbeshop</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Barbearia Pablo Barbeshop" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="../css/css.css">
  <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
  <script src="https://cdnjs.com/libraries/Chart.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet">
  <script src="../js/jquery-3.4.1.js"></script>
  <script src="../js/script.js"></script>
  <script src="../js/graphic.js"></script>
  <script src="http://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
  <link rel="shortcut icon" href="../img/favicon.png">
</head>

<body>

  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

  <!-- menu principal nav bar-->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">

    <!-- <div class="container"> -->

    <a class="navbar-brand h1 mb-0" href="http://localhost/barbearia"><img src="../icon/logo_temp1.png" width="200px" height="50px"></a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarBarbshop">

      <span class="navbar-toggler-icon"></span>

    </button>


    <div class="collapse navbar-collapse" id="navbarMenu">


      <ul class="navbar-nav mr-auto">
  
      <li class="nav-itemv active">
      <a class="nav-link" id="admin_menu" onclick="show_box_menu_admin()"> <i class="fas fa-bars fa-1x"></i>Menu</a>
        </li>

        <li class="nav-itemv active">
          <a class="nav-link" href="../marcacao/" id="marcacao">Marcação</a>
        </li>

        <li class="nav-itemv active">
          <a class="nav-link" href="#" id="Galeria">Galeria</a>
        </li>

        <li class="nav-itemv active">
          <a class="nav-link" href="#" id="Contactos">Contactos</a>
        </li>

        <li class="nav-itemv active">
          <a class="nav-link" href="../sugestao/" id="bookReclamtion">Sugestão & Reclamação</a>
        </li>

        <li class="nav-itemv active">
          <a class="nav-link" href="../promo/" id="about">Promoções & Campanha</a>
        </li>

        <li class="nav-itemv active">
          <a class="nav-link" href="../recrutamento/" id="about">Trabalhe Conosco</a>
        </li>

        </li>

        <li class="nav-itemv active">
            <a class="nav-link" id="Admin-lgout" onclick="logout()"><i class="fas fa-sign-out-alt fa-2x text-warning"></i></a>
        </li>

      </ul>

      <!--social network-->

      <ul class="navbar-nav mr-auto  ml-6">


        <li class="nav-item">
          <a class="nav-link px-2" href="#"><i class="fab fa-facebook"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-2" href="#"><i class="fab fa-instagram"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-2" href="#"><i class="fab fa-whatsapp"></i></a>
        </li>

        <li class="nav-item">
          <a class="nav-link px-2" href="#"><i class="fab fa-twitter"></i></a>
        </li>

      </ul>

    </div>
    <!--  </div>-->

  </nav>

  <div class="box-login">

    <div class="box-loginItem">

      <div class="box-cancel-login">
        <i class="fas fa-times" onclick="cancelBoxLogin()"></i>
      </div>

      <div class="box-fr-login-user">
        <!--USERNAME-->

        <i class="fas fa-user icon"></i>
        <input type="text" id="fname-login" placeholder="userName">

      </div>

      <div class="box-fr-login-pass">
        <!-- PASSWORD -->
        <span class="toggle-on-pass-login config-icon-pass"><i class="fas fa-eye" onclick="showPass()"></i></span>
        <span class="toggle-off-pass-login config-icon-pass"><i class="fas fa-eye-slash" onclick="hidePass()"></i></span>

        <i class="fas fa-key icon"></i>
        <input type="password" id="fpass-login" placeholder="password">

      </div>

      <div class="box-remenber-login">

        <input type="checkbox" id="id-remenber-login" value="ok">
        <label for="id-remenber-login">Remenber</label>

      </div>

      <div class="box-btn-login">
        <i class="fas fa-sign-in-alt" onclick="login()"></i>
      </div>

      <div class="box-error-login">
        <p id="info-error-lg"></p>
      </div>

    </div>

  </div>

  