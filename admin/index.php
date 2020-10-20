 <!-- <?php

      /* session_start();

   if (!isset($_SESSION['user']) && !isset($_SESSION['pass'])) {

      header("location: ../index.php");
   }

 /*   if (!defined($_SESSION['user']) && !defined($_SESSION['pass'])) {

      header("location: ../index.php");
   } */


      ?> -->

 <?php

   include_once('../headerAdmin.php')

   ?>

 <!-- MENU admin new -->

 <div class="content-menu-admin">

    <!-- <div class="box-menu-Admin1"> -->

    <div class="main-item-admin">

       <span class="bx-cancel-menuAdmin"><i class="fas fa-times fa-1x" onclick="hidden_box_menu_admin()"></i> </span>

       <div class="single-item-admin">

          <div class="icon-admin-item" onclick="show_box_lista_marcacao()">

             <i class="fas fa-address-book fa-2x"></i> <label>[A-Z] Marcações</label>

          </div>

       </div>

       <div class="single-item-admin">

          <div class="icon-admin-item">

             <i class="fas fa-tools fa-2x"></i><label>Config Marcação</label>

          </div>

       </div>

       <div class="single-item-admin" onclick="timer()">

          <div class="icon-admin-item">

             <i class="far fa-clock fa-2x"></i><label>Gestão de Horarios</label>

          </div>

       </div>

       <div class="single-item-admin">

          <div class="icon-admin-item">

             <i class="fas fa-chart-bar fa-2x"></i><label>Grafico de Produtividade</label>

          </div>

       </div>

       <div class="single-item-admin" onclick="showBoxCandidatuta()">

          <div class="icon-admin-item">

             <i class="fas fa-briefcase fa-2x"></i><label>Gestão Recrutamento</label>

          </div>

       </div>

       <div class="single-item-admin" onclick="generateID()">

          <div class="icon-admin-item">

             <i class="fas fa-images fa-2x"></i><label>Gestao Galeria</label>

          </div>

       </div>

       <div class="single-item-admin" onclick="utilizador()">

          <div class="icon-admin-item">

             <i class="fas fa-users fa-2x"></i><label>Gestao de Utilizador</label>

          </div>

       </div>

       <div class="single-item-admin" onclick="printReport()">

          <div class="icon-admin-item">

             <i class="fas fa-file-pdf fa-2x"></i><label>Relatorio de Produtividade</label>

          </div>

       </div>

       <div class="single-item-admin" onclick="generateID()">

          <div class="icon-admin-item">

             <i class="far fa-newspaper fa-2x"></i><label>Gestao de Noticias</label>

          </div>
       </div>



    </div>

    <!--  </div> -->

 </div>


 <div class="box-graphic">
    <canvas id="myChart"></canvas>
 </div>

 <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

 <!-- Gestao Utilizadores -->
 <div class="contentBxUser">

    <div class="box-gestao-utilizador">

       <div class="cancelBoxUser" onclick=" cancelMainBox()()">
          <i class="fas fa-times fa-2x"></i>
          <span class="tooltipDesc" onclick=" cancelMainBox()()">fechar</span>
       </div>

       <div class="add-user" onclick="showBoxAddUser()">
          <i class="fas fa-plus fa-2x" id="add"></i>
          <span class="tooltipDesc">add user</span>
       </div>

       <div id="titleUserList">
          <h3>Gestão de utilizadores</h3>
       </div>

       <div class="box-dateFilter-user">
          <label class="lblFilterUser">Pesquisar Por Nome</label><br>
          <input type="text" id="FilterName">
          <button class="IconSearch" onclick="shearchUser()"><i class="fas fa-search fa-1x"></i></button>
       </div>


      <!--  <div class="communTitle">


          <div class="communItens" id="nomeID">
             <p><i class="fas fa-address-card fa-2x"></i></p>
          </div>

          <div class="communItens" id="emailID">
             <p id="emailID"><i class="fas fa-envelope fa-2x"></i></p>
          </div>

       

          <div class="communItens" id="editarID">
             <p><i class="fas fa-user-edit fa-2x"></i></p>
          </div>

          <div class="communItens" id="apagarID">
             <p><i class="fas fa-user-times fa-2x"></i></p>
          </div>


       </div> -->

       <div class="box-info-delet">

          <div class="cancelBoxUser" onclick="cancelInternalBox()">
             <i class="fas fa-times fa-2x"></i>
             <span class="tooltipDesc" onclick="cancelInternalBox()">fechar</span>
          </div>

          <h5 id="removId">Remover utilizador?</h5>

          <span class="iconDialog" onclick="deletUser()"><i class="far fa-check-circle fa-3x"></i></span>
          <span class="iconDialog"><i class="far fa-times-circle fa-3x"></i></span>

       </div>


      <!-- box- dinamic comunm .-->

       <div class="box-dinamic-comun-utilizador"></div>

       <div class="bx-listaUtilizadores"></div>

       <!-- box info -->

    </div>


    <!-- box-add-user -->
    <div class="box-add-user">

       <div class="cancelBoxUser" onclick="cancelInternalBox()">
          <i class="fas fa-times fa-2x"></i>
          <span class="tooltipDesc" onclick="cancelInternalBox()">fechar</span>
       </div>

       <div class="bx-fr-user">

          <div class="name_icon">
             <i class="fas fa-address-card"></i>
          </div>

          <div class="bxName-fr">
             <input type="text" id="frName">
          </div>

          <div class="email_icon">
             <i class="fas fa-envelope"></i>
          </div>

          <div class="bxEmail-fr">
             <input type="text" id="frEmail">
          </div>

          <div class="user_icon">
             <i class="fas fa-user"></i>
          </div>

          <div class="bxUser-fr">
             <input type="text" id="frUser">
          </div>

          <div class="pass_icon">
             <i class="fas fa-key"></i>
          </div>

          <div class="bxPass-fr">
             <input type="password" id="frPass">
          </div>

       </div>

       <div class="bxConfigAcess-fr">


          <div class="configUserItem">

             <div id="toggleBX">

                <label class="switch">
                   <input type="checkbox" id="acessCheckID">
                   <span class="slider round"></span>
                </label>

             </div>

             <span class="userTypeID">

                <input type="radio" id="nornalUserID" name="configUser" value="normal">
                <label for="nornalUserID" class="labelConfigUser"><i class="fas fa-user fa-2x" style="color: #ccc;"></i></label>

             </span>

             <span class="userTypeID">

                <input type="radio" id="adminUserID" name="configUser" value="admin">
                <label for="adminUserID" class="labelConfigUser"><i class="fas fa-user-cog fa-2x" style=" color: #ccc;"></i></label>

             </span>



          </div>

       </div>


       <div class="bxUserSave" onclick="addUser()">
          <i class="fas fa-save fa-2x"></i>
          <span class="tooltipSave">Salvar</span>
       </div>



    </div>

    <!-- edit user -->
    <div class="box-add-user">

       <div class="cancelBoxUser" onclick="cancelInternalBox()">
          <i class="fas fa-times fa-2x"></i>
          <span class="tooltipDesc" onclick="cancelInternalBox()">fechar</span>
       </div>

       <div class="bx-fr-user">

          <div class="name_icon">
             <i class="fas fa-address-card"></i>
          </div>

          <div class="bxName-fr">
             <input type="text" id="frEdName">
          </div>

          <div class="email_icon">
             <i class="fas fa-envelope"></i>
          </div>

          <div class="bxEmail-fr">
             <input type="text" id="frEdEmail">
          </div>

          <div class="user_icon">
             <i class="fas fa-user"></i>
          </div>

          <div class="bxUser-fr">
             <input type="text" id="frEdUser">
          </div>

          <div class="pass_icon">
             <i class="fas fa-key"></i>
          </div>

          <div class="bxPass-fr">
             <input type="password" id="frEdPass">
          </div>

          <input type="hidden" id="frId">

       </div>

       <div class="bxConfigAcess-fr">


          <div class="configUserItem">

             <div id="toggleBX">

                <label class="switch">
                   <input type="checkbox" id="EdAcess">
                   <span class="slider round"></span>
                   <!--   <span class="tooltipAcess">Bloqueadr/Desbloquear</span> -->
                </label>

             </div>

             <span class="userTypeID">

                <input type="radio" id="editNormal" name="configUser" value="normal">
                <label for="nornalUserID" class="labelConfigUser"><i class="fas fa-user fa-2x" style="color: #ccc;"></i></label>

             </span>

             <span class="userTypeID">

                <input type="radio" id="editAdmin" name="configUser" value="admin">
                <label for="adminUserID" class="labelConfigUser"><i class="fas fa-user-cog fa-2x" style=" color: #ccc;"></i></label>

             </span>

          </div>

       </div>


       <div class="bxUserSave" onclick="updateUser()">
          <i class="fas fa-save fa-2x"></i>
          <span class="tooltipSave">Salvar</span>
       </div>

    </div>


 </div>

 <!-- box- Horarios disponiveis -->

 <div class="box-timers-today">

    <div class="cancelBoxUser" onclick="cancelMainBox()">
       <i class="fas fa-times fa-2x"></i>
       <span class="tooltipDesc" onclick="cancelMainBox()">fechar</span>
    </div>

    <div class="add-user" onclick="showBoxAddTimer()">
       <i class="fas fa-plus fa-2x" id="add"></i>
       <span class="tooltipDesc">add Timer</span>
    </div>

    <div id="titleUserList">
       <h3>Timer</h3>
    </div>

    <div class="box-add-timer">

       <div class="cancelBoxUser" onclick="cancelInternalBox()">
          <i class="fas fa-times fa-2x"></i>
          <span class="tooltipDesc" onclick="cancelInternalBox()">fechar</span>
       </div>

       <div id="titleUserList">
          <h3>Add</h3>
       </div>

       <div class="box-items-timers">
          <label for="time-10">10H00</label>
          <input type="checkbox" id="time-10" value="10:00">

          <label for="time-10h30">10H30</label>
          <input type="checkbox" id="time-10h30" value="10:30">

          <label for="time-11">11H00</label>
          <input type="checkbox" id="time-11" value="11:00">

          <label for="time-11h30">11H30</label>
          <input type="checkbox" id="time-11h30" value="11:30">

          <label for="time-12">12H00</label>
          <input type="checkbox" id="time-12" value="12:00">

          <label for="time-14">14H00</label>
          <input type="checkbox" id="time-14" value="14:00">

          <label for="time-15">15H00</label>
          <input type="checkbox" id="time-15" value="15:00">

          <label for="time-15h40">15H40</label>
          <input type="checkbox" id="time-15h40" value="15:40">

          <label for="time-16h30">16H30</label>
          <input type="checkbox" id="time-16h30" value="16:30">

          <label for="time-17">17H00</label>
          <input type="checkbox" id="time-17" value="17:00">

          <label for="time-18">18H00</label>
          <input type="checkbox" id="time-18" value="18:00">

          <label for="id1">19H00</label>
          <input type="checkbox" id="time-19" value="19:00">

       </div>

       <div class="box-select-all-timer">


          <input type="checkbox" id="check-all-times" onclick="checkAll()">
          <label for="check-all-times" id="check-lbl-timer">Marcar todos</label>


       </div>

       <div class="bxUserSave">
          <i class="fas fa-check fa-2x" onclick="addTimer()"></i>
          <span class="tooltipSave">Salvar</span>
       </div>


    </div>

    <div class="box-title-timer">

       <div class="icon-timer">
          <i class="fas fa-calendar-week fa-2x"></i>
       </div>

       <div class="icon-timer  itemTime">
          <i class="fas fa-clock fa-2x"></i>
       </div>

       <div class="icon-timer">
          <i class="fas fa-id-card-alt fa-2x"></i>
       </div>

    </div>

    <div class="box-list-timer-dinamic"></div>


 </div>


 <!-- lista marcação-->

 <div class="box-lista-marcacao">

    <div class="cancelBoxUser" onclick="hidden_box_marcacao()"><i class="fas fa-times fa-2x"></i></div>
    <h4> Gestão de Marcação </h4>

    <div class="dateFilter_marcacao">
       <label class="lblFilterUser">Pesquisar Por Cod</label><br>
       <input type="text" id="pesquisa_cd_mc" onkeyup="populate_box_marcacao()">
       <button class="IconSearch" onclick="filterMarcacao()"><i class="fas fa-search fa-1x"></i></button>
    </div>

    <div class="box-status">

       <i class="fas fa-times" id="cancel" onclick="hidden_box_status()"></i>
       <label>Definir Status:</label><br>
       <select value="Status a Definir:" class="itemStatus" id="status" onchange="addLogs_marcacao()">

          <option value="choice">--Escolher Status--</option>
          <option value="Realizado">Realizado</option>
          <option value="Pendente">Pendente</option>
          <option value="Ausência">Ausência</option>

       </select>

       <div class="box-infos" id="boxInfo"></div>

    </div>

    <div class="box-dinamic-comun">

    </div>

    <div class="box-dinamic-list-marcacao">

    </div>


 </div>

 <!-- Gestao de recrutamento -->

 <div class="box-gestao-recrutamento">

    <div class="cancelBoxUser" onclick=" hidden_box_candidatura()"><i class="fas fa-times fa-2x"></i></div>
    <h4> Gestão de Recrutamento </h4>

    <div class="box-dateFilter">
       <label class="lblFilterUser">Pesquisar Por Nome</label>
       <input type="text" id="FilterName">
       <button class="IconSearch" onclick="shearchUser()"><i class="fas fa-search fa-1x"></i></button>
    </div>

    <div class="column-title-recrutamento">

       <div class="communItens" id="itemNome_recrutamento">
          <p><i class="fas fa-address-card fa-2x"></i></p>
       </div>

       <!--    <div class="communItens" id="itemNome_recrutamento">
          <p>Nome</p>
       </div> -->

       <div class="communItens" id="itemPhone_recrutamento">
          <p><i class="fas fa-mobile-alt fa-2x"></i></p>
       </div>


       <div class="communItens" id="itemEmail_recrutamento">
          <p><i class="fas fa-envelope fa-2x"></i></p>
       </div>

       <div class="communItens" id="itemPDF_recrutamento">
          <p><i class="fas fa-file-pdf fa-2x"></i></p>
       </div>

       <div class="communItens" id="itemApagar_recrutamento">
          <p><i class="fas fa-trash-alt fa-2x"></i> </p>
       </div>

    </div>

    <div class="box-lista-candidaturas">

    </div>

 </div>