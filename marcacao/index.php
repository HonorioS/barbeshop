<?php

include_once("../header.php")

?>

<script>
   $(document).ready(function() {

       // <input type="text" id="date-marcacao">
      getTimeInput();

      $("#date-marcacao").datepicker({

         changeYear: false,
         changeMonth: false,
         minDate: "+1D",
         maxDate: "+3W",
         dateFormat: "yy-mm-dd",
         /* beforeShowDay: $.datepicker.noSunday   // this cod disable wekend  */
         beforeShowDay: disableSunday
      })

      function disableSunday(sunday){

            var day  = sunday.getDay();
            return [(day>0)];
      }
      
   })
   
</script>

<div class="box-info-marcacao">

   <div class="box-icon-confirmar-marcacao" style=" color:green;">
      <i class="fas fa-check-double fa-3x checkConfirm"></i>
   </div>
   <div id="id-title-info-marcacao"> A Sua Marcação Foi Efectuado Com Sucesso</div>

</div>

<div class="box-marcacao-form">
  
   <div class="bx-fr-marcacao">

      <div class="name_icon-marcacao">
         <i class="fas fa-address-card"></i>
         <label>Nome</label>
      </div>

      <div class="bxName-fr-marcacao">
         <input type="text" id="frName-marcacao">
      </div>

      <div class="phone_icon-marcacao">
         <i class="fas fa-phone"></i>
         <label for="">Phone</label>
      </div>

      <div class="bxEmail-fr-marcacao">
      <!--    <input type="number" id="frPhone-marcacao" maxlength ="10" minlength="0"> -->
         <input type="text" id="frPhone-marcacao" onkeypress="return isNumberKey(event)" maxlength="12"/>
      </div>

      <div class="service_icon-marcacao">
         <i class="fas fa-cut"></i>
         <label>Serviços</label>
      </div>

      <div class="bxUser-fr-marcacao">
         <select id="idServico">
            <option>Corte de Cabelo</option>
            <option>Cabelo & Barba</option>
            <option>Barba</option>
         </select>
      </div>

      <div class="time_icon-marcacao">
         <i class="fas fa-clock"></i>
         <label id="txt_time_inf">Horas disponiveis Hoje</label>
      </div>

      <div class="bx-select-time-fr-marcacao">

      </div>


      <div class="date_icon-marcacao" onclick="showBoxData()">
         <i class="far fa-calendar-alt"></i>
         <label for="birthday">Escolher Outra Data</label>
      </div>

      <div class="box-date-other">

         <div class="box-dateFilter-marcacao">

            <input type="text" id="date-marcacao">

            <select id="item-time-marcacao" onchange="verificaData()">
               <option>10:00:00</option>
               <option>11:00:00</option>
               <option>12:00:00</option>
               <option>14:00:00</option>
               <option>15:00:00</option>
               <option>16:00:00</option>
               <option>17:00:00</option>
               <option>18:00:00</option>
               <option>19:00:00</option>
            </select>

         </div>

      </div>

      <div class="obs_icon-marcacao">

         <i class="fas fa-exclamation"></i>
         <label for="">Observação</label>

      </div>

      <div class="bxPass-fr-marcacao">
         <input type="text" id="frObs-marcacao">
      </div>

   </div>

   <div class="bxUserSave-marcacao" onclick="showBox_CheckIn()">
      <label>Continuar</label>
   </div>

   <div class="box-error-info-marcacao">

      <p id="error-info"></p>

   </div>

</div>


<div class="box-check-in-marcacao">

  <h4>Por favor verifica os teus dados antes de enviar !</h4>

   <div class="box-ID_marcacao">
      <label>ID Marcação:</label></br>
      <label id="cd-marcacao"></label>
   </div>

   <div class="item-currentDate-marcacao">
      <label>Data : </label>
      <label id="id-Current-date">12-09-2020</label></br>
      <label>Hora : </label>
      <label id="id-Current-time"></label>
   </div>

   <div id="line-up-confir"></div>

   <div id="title-detalhesMarcacao">Detalhes Marcação</div>

   <div class="box-confirm-detalhes-marcacao">

      <label>Nome : </label>
      <label id="name_check"></label></br>

      <label>Telemóivel : </label>
      <label id="phone_check"></label></br>

      <label>Serviço : </label>
      <label id="servico_check"></label></br>

      <label>Hora : </label>
      <label id="time_check"></label></br>

      <label>Data : </label>
      <label id="date_check"></label>

   </div>

   <div id="line-down-confir"></div>

   <div class="box-icon-confirmar-marcacao">

      <i class="fas fa-paper-plane fa-2x checkConfirm" onclick="addMarcacao()"></i>
      <i class="fas fa-edit fa-2x editConfirm" onclick="showBoxMarcacao()"></i>
   </div>

</div>



<!-- Footer -->
<div class="box-linhaHorizontal"></div>

<!-- Footer -->

<?php

include_once("../footer.php")

?>