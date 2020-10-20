<?php
include_once('../header.php')
?>


<div class="box-info-termos">


  <div class="box-item-termos">

    <div class="box-logo-termos">

      <img src="../img/logoRed.PNG" alt="LOGO">

      <h4>Termos de Armazenamento e Protecção de Dados</h4>

    </div>

    <div class="box-text-termo">

      <p class="p-text-termos">

        Queremos de uma forma consetida por ambas partes, informa-lhe da nossa politica de armazenamento e protecção de dados. <br>
        <strong>A Pablo Barbeshop </strong> compromete-se a tratar os seus Dados Pessoais armazenado em nossa base de dados em conformidade com os seguintes princípios:<br>
        <br>
        - Processamento lícito, leal e transparente, garantindo assim os princípios da licitude, lealdade e transparência;<br>
        - Recolha e processamento para finalidades determinadas, explícitas e legítimas. <br>
        - Cumprimento do princípio da limitação da finalidade, dado que não serão tratados de forma divergente e
        incompatível com os fins para os quais foram recolhidos;<br>
        - Os Dados Pessoais recolhidos e tratados devem ser exatos e atualizados, procedendo à respetiva retificação
        ou atualização sempre que necessário ou assim o entenda. <br>
        - Os Dados armazenados na nossa base de dados ficarão retidos por um perido de 6 meses a 1 ano, para futuras candidaturas. No caso em que
        o seu perfil não tenha o match pretendido. <br>
      </p>


    </div>

    
<script>
  $(document).ready(function() {

    function checkTermo() {

      if (localStorage.getItem("termos")) {

        document.getElementsByClassName("box-info-termos")[0].style.display = "none";
      } else {

        document.getElementsByClassName("box-info-termos")[0].style.display = "block";
      }
    }

    checkTermo();

  })
</script>

    <div class="bx-btn-termos">

      <div class="bx-not" onclick="NotaceptTermo()"> <label> Rejeitar</label></div>

      <div class="bx-yes" onclick="aceptTermo()"> <label> Aceitar</label> </div>

    </div>


  </div>

</div>



<div class="box-text-info-recrutamento">

  <div class="box-title-recrutamento">
    <label> Formulario de Recrutamento </label>
  </div>

  <div class="box-section-recrutamento">
    <p>

      <strong>Pablo Barbeshop</strong> tem como objectivo a expansão dos seus serviços alem fronteira.
      Por isso queremos contar com profissionais que se sintam atraidos e apaixonados por esta atividade, com dinamismo e espirito de equipe.
      Somos orientados por uma política de rigor, quer ao nível das regras de higiene,
      qualidade e ao nível de inovação resultando num serviço de excelência ao Cliente.
      Se tens espírito inovador, gosta de trabalhar em equipa e tem um carinho especial pela arte de barbear,
      junta-se nós prenchendo o formulario abaixo.
      Envie-nos o seu Curriculum Vitæ em formato <strong>PDF</strong>, automaticamente os seus dados passarão pelo departamento de análise.
      Caso tenha o match pretendido a nossa equipa entrará em contacto consigo.
    </p>
  </div>



</div>


<div class="main-box-recrutamento">

  <div class="box-item-recrutamento">

    <div class="box-icon-recrutamento">
      <i class="fas fa-address-card"></i>
      <label>Nome(*)</label>
    </div>

    <div class="box-fr-item-recrutamento">
      <input type="text" id="frName-recrutamento">
    </div>


    <div class="box-icon-recrutamento">
      <i class="fas fa-phone"></i>
      <label for="">Phone(*)</label>
    </div>

    <div class="box-fr-item-recrutamento">
      <input type="text" id="frPhone-recrutamento">
    </div>


    <div class="box-icon-recrutamento">
      <i class="fas fa-envelope"></i>
      <label for="">E-mail(*)</label>
    </div>

    <div class="box-fr-item-recrutamento">
      <input type="text" id="frEmail-recrutamento">
    </div>


    <div class="box-icon-recrutamento">
      <i class="fas fa-map-marker-alt"></i>
      <label for="">Morada actual(*)</label>
    </div>

    <div class="box-fr-item-recrutamento">
      <input type="text" id="frAdress-recrutamento">
    </div>


    <div class="box-icon-recrutamento">
      <i class="fas fa-briefcase"></i>
      <label for="">Experiencia Profissional</label>
    </div>

    <div class="box-fr-item-recrutamento">
      <textarea rows="4" cols="50" id="frExP-recrutamento"></textarea>
    </div>

    <div class="box-upload-cv">
      <input type="file" id="file">
    </div>

    <div class="box-check-term-responsability">

      <input type="checkbox" id="term-responsa-recrutamento">
      <label id="id_termo_show" onclick="show_box_termos()">Termos de Armazenamento</label>

    </div>



    <div class="box-btn-recrutamento" onclick="checkIn_candidatura()">
      <label>Candidatar-se</label>
    </div>

    <div class="info-error-recrutamento">

      <p id="error-fr-recrutamento"></p>

    </div>



  </div>

</div>

<div class="box-info-add-recrutamento">

  <div class="box-icon-confirmar-marcacao" style=" color:green;">
    <i class="fas fa-check-double fa-3x checkConfirm"></i>
  </div>
  <div id="id-title-info-marcacao"> Candidatura submetida com ucesso</div>

</div>


<div class="box-linhaHorizontal"></div>

<?php
include_once('../footer.php')
?>