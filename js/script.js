//$(function(){

// add recrutamento 
// $("#btnSend").click(function(){


function addCandidatura(file) {

    var url = "../php/function.php";
    var nome = document.getElementById("frName-recrutamento").value
    var contacto = document.getElementById("frPhone-recrutamento").value
    var email = document.getElementById("frEmail-recrutamento").value
    var morada = document.getElementById("frAdress-recrutamento").value
    var expProf = document.getElementById("frExP-recrutamento").value

    var send = "add";

    $.ajax({
        type: "POST",
        crossDomain: true,
        cache: false,
        url: url,
        data: {

            nomePHP: nome,
            contactoPHP: contacto,
            emailPHP: email,
            moradaPHP: morada,
            expProfPHP: expProf,
            filePHP: file,
            add_recrutamentoPHP: send
        },

        datatype: "text",

        success: function(data) {

            switch (data) {

                case "add":
                    alert('enviado')
                    clean_form_candidatura()
                    break

                case "error":
                    alert('failed')
                    break
                default:
                    alert('existe')
                    clean_form_candidatura()
                    break

            }

        }

    });


}

function showBoxCandidatuta() { // itemsCandidaturas

    candidaturas()
    document.getElementsByClassName("box-gestao-recrutamento")[0].style.display = "block"
}

function hidden_box_candidatura() { // itemsCandidaturas

    document.getElementsByClassName("box-gestao-recrutamento")[0].style.display = "none"
}

function candidaturas() {

    var callFunction = "we_can_go";
    var url = "../php/function.php";

    $.ajax({

        type: "POST",
        crossDomain: true,
        cache: false,
        url: url,

        data: {

            listRecrtPHP: callFunction
        },

        datatype: "text",

        success: function(data) {

            if (data != "error" && data != " ") {

                var candidatura = data.split(',')

                listaCandidtura(candidatura)

            } else {

                alert("faled to read candidaturas")
            }

        }
    })

}

function listaCandidtura(candidaturas) {

    var content = document.getElementsByClassName("box-lista-candidaturas")[0]

    for (i = 0; i < candidaturas.length - 1; i += 7) {

        if (!document.getElementById("divID-" + i)) {

            var div = document.createElement('div')
            div.setAttribute("class", "box-candidatura")
            div.id = "divID-" + i

            // id 
            var idCdd = document.createElement('input')
            idCdd.type = "hidden"
            idCdd.id = "id-" + i;
            idCdd.value = candidaturas[i]

            // Nome 
            var boxNome = document.createElement('Label')
            boxNome.innerHTML = candidaturas[i + 1]
            boxNome.setAttribute("class", "lbl_item_nome")
            boxNome.id = "id-" + i;

            var divNome = document.createElement('div')
            divNome.setAttribute("class", "box_itemNome")

            divNome.appendChild(boxNome)

            // conatacto 
            var boxContacto = document.createElement('Label')
            boxContacto.innerHTML = candidaturas[i + 2]
            boxContacto.setAttribute("class", "lbl_item_phone")
            boxContacto.id = "id-" + i;

            var divPhone = document.createElement('div')
            divPhone.setAttribute("class", "box_itemPhone")

            divPhone.appendChild(boxContacto)

            // E-mail 
            var boxEmail = document.createElement('Label')
            boxEmail.innerHTML = candidaturas[i + 3]
            boxEmail.setAttribute("class", "lbl_item_mail")
            boxEmail.id = "id-" + i;

            var divEmail = document.createElement('div')
            divEmail.setAttribute("class", "box_itemEmail")

            divEmail.appendChild(boxEmail)

            // filename
            var fileName = document.createElement('input')
            fileName.type = "hidden"
            fileName.id = "fileId-" + i;
            fileName.value = candidaturas[i + 6]

            // cv
            var funct_open_pdf = 'openPdf(`' + i + '`)'

            var div_cv = document.createElement('div')
            div_cv.id = "id-" + i;
            div_cv.setAttribute("class", "box_show_cv")
            div_cv.setAttribute("onclick", funct_open_pdf)


            var cvTEXT = document.createElement('Label')
            cvTEXT.innerHTML = "Abrir Cv"

            div_cv.appendChild(cvTEXT);

            // delet

            var funct_delet_cd = 'deletCandidatura(`' + i + '`)'

            var Remov = document.createElement('Label')
            Remov.id = "id-" + i;
            Remov.setAttribute("class", "fas fa-trash-alt fa-2x")
            Remov.setAttribute("onclick", funct_delet_cd)


            div.appendChild(idCdd)
            div.appendChild(divNome)
            div.appendChild(divPhone)
            div.appendChild(divEmail)
            div.appendChild(div_cv)
            div.appendChild(Remov)
            div.appendChild(fileName)

            content.appendChild(div)
        }

    }

}



function deletCandidatura(id) {

    var id_cc = document.getElementById("id-" + id).value;
    var ficheiro = document.getElementById("fileId-" + id).value;

    var callFunction = "we_can_go"

    $.ajax({

        type: "POST",
        crossDomain: true,
        cache: false,
        url: "../php/readPdf.php",

        data: {
            filePHP: ficheiro,
            idPHP: id_cc,
            deletCD: callFunction
        },

        datatype: "text",
        success: function(data) {

            switch (data) {

                case 1:
                    alert("removido com sucesso")
                    break;
                case -1:
                    alert("Erro ao remover")
                    break;
                default:
                    alert("error server(-1)")
                    break;

            }

        }
    })

}

function openPdf(id) {

    var file = document.getElementById("fileId-" + id).value;

    window.open('/barbearia/php/readPdf.php?file=' + file);

}

function marcacao() {

    var callFunction = "we_can_go";
    var url = "../php/function.php";

    $.ajax({

        type: "POST",
        crossDomain: true,
        cache: false,
        url: url,

        data: {

            listMarcPHP: callFunction
        },

        datatype: "text",

        success: function(data) {

            if (data != "error" && data != " ") {

                localStorage.setItem("itemsMC", data)

                var marcacao = data.split(',')



                listaMarcacao(marcacao)

            } else {

                alert("faled to read candidaturas")
            }

        }
    })

}

function show_box_lista_marcacao() {

    marcacao()

    document.getElementsByClassName("box-lista-marcacao")[0].style.display = "block"
}

function hidden_box_marcacao() {

    document.getElementsByClassName("box-lista-marcacao")[0].style.display = "none"
}

function listaMarcacao(marcacao) {

    var content = document.getElementsByClassName("box-dinamic-list-marcacao")[0]
    var count = 0;

    for (i = 0; i < marcacao.length - 1; i += 9) {

        if (!document.getElementById("divIdMc-" + i)) {

            count++;

            /*  var funct_box_status = showBox_status() */

            var div = document.createElement('div')
            div.id = "divIdMc-" + i
            div.setAttribute("class", "bx-list-all-mc")
                /*  div.setAttribute("onclick", funct_box_status) */

            comunTitle()

            var idCdd = document.createElement('input')
            idCdd.type = "hidden"
            idCdd.id = "idmc-" + i;
            idCdd.value = marcacao[i]

            // id 
            var boxid = document.createElement('Label')
            boxid.innerHTML = count
            boxid.setAttribute("class", "lbl_item_nome")

            var divID = document.createElement('div')
            divID.setAttribute("class", "box_itemNumber_mc")
            divID.appendChild(boxid)

            // codigo 
            var boxcod = document.createElement('p')
            boxcod.innerHTML = marcacao[i + 1]
            boxcod.value = marcacao[i + 1]
            boxcod.setAttribute("class", "lbl_item_nome")
            boxcod.id = "idcodigoMC-" + i;

            var divCodigo = document.createElement('div')
            divCodigo.setAttribute("class", "box_itemCod_mc")
            divCodigo.appendChild(boxcod)

            // Nome 
            var boxNome = document.createElement('p')
            boxNome.innerHTML = marcacao[i + 2]
            boxNome.value = marcacao[i + 2]
            boxNome.setAttribute("class", "lbl_item_nome")
            boxNome.id = "idNomeMC-" + i;

            var divNome = document.createElement('div')
            divNome.setAttribute("class", "box_itemNome_mc")
            divNome.appendChild(boxNome)

            // contacto 
            var boxcontacto = document.createElement('Label')
            boxcontacto.innerHTML = marcacao[i + 3]
            boxcontacto.value = marcacao[i + 3]
            boxcontacto.setAttribute("class", "lbl_item_nome")
            boxcontacto.id = "idCCmc-" + i;

            var divcc = document.createElement('div')
            divcc.setAttribute("class", "box_itemContacto_mc")
            divcc.appendChild(boxcontacto)

            // servico 
            var boxServico = document.createElement('Label')
            boxServico.innerHTML = marcacao[i + 4]
            boxServico.value = marcacao[i + 4]
            boxServico.setAttribute("class", "lbl_item_nome")
            boxServico.id = "idsvMC-" + i;

            var divsc = document.createElement('div')
            divsc.setAttribute("class", "box_itemservico_mc")
            divsc.appendChild(boxServico)

            // data 
            var boxData = document.createElement('p')
            boxData.innerHTML = marcacao[i + 5]
            boxData.value = marcacao[i + 5]
            boxData.setAttribute("class", "lbl_item_nome")
            boxData.id = "idDtmc-" + i;

            var divdt = document.createElement('div')
            divdt.setAttribute("class", "box_itemdata_mc")
            divdt.appendChild(boxData)

            // horario 
            var boxHorario = document.createElement('p')
            boxHorario.innerHTML = marcacao[i + 6]
            boxHorario.value = marcacao[i + 6]
            boxHorario.setAttribute("class", "lbl_item_nome")
            boxHorario.id = "idhrMC-" + i;

            var divhr = document.createElement('div')
            divhr.setAttribute("class", "box_itemhr_mc")
            divhr.appendChild(boxHorario)

            // obs
            var boxObs = document.createElement('p')
            boxObs.innerHTML = marcacao[i + 7]
            boxObs.value = marcacao[i + 7]
            boxObs.setAttribute("class", "lbl_itemObs_nome")
            boxObs.id = "idOBSmC-" + i;

            var divobs = document.createElement('div')
            divobs.setAttribute("class", "box_itemobs_mc")
            divobs.appendChild(boxObs)

            // date
            var boxdate = document.createElement('p')
            boxdate.innerHTML = marcacao[i + 8]
            boxdate.value = marcacao[i + 8]
            boxdate.setAttribute("class", "lbl_item_nome")
            boxdate.id = "iddate-" + i;

            var divdate = document.createElement('div')
            divdate.setAttribute("class", "box_itemdata_mc")
            divdate.appendChild(boxdate)

            // status

            var funt_open_box_status = 'showBox_status(`' + i + '`)'

            var config = document.createElement('input')
            config.type = "button"
            config.id = "configID-" + i
            config.setAttribute('onclick', funt_open_box_status)
            config.setAttribute('class', 'fas fa-cogs fa-1x')


            var divconfig = document.createElement('div')
            divconfig.setAttribute("class", "box_itemconfig_mc")
            divconfig.appendChild(config)



            div.appendChild(idCdd)
            div.appendChild(divID)
            div.appendChild(divCodigo)
            div.appendChild(divNome)
            div.appendChild(divcc)
            div.appendChild(divsc)
            div.appendChild(divdt)
            div.appendChild(divhr)
            div.appendChild(divobs)
            div.appendChild(divdate)
            div.appendChild(divconfig)

            content.appendChild(div)

        }

    }

}

function comunTitle() {

    var content = document.getElementsByClassName("box-dinamic-comun")[0]

    if (!document.getElementById("id_comun")) {

        var divComun = document.createElement('div')
        divComun.id = "id_comun";
        divComun.setAttribute("class", "bx-list-all-mc")

        var cmNr = document.createElement('Label')
        cmNr.innerHTML = "#"
        cmNr.setAttribute("class", "lbl_item_nome")

        var comunNumber = document.createElement('div')
        comunNumber.setAttribute("class", "box_itemNumber_mc")
        comunNumber.appendChild(cmNr)

        var cmCod = document.createElement('p')
        cmCod.innerHTML = "Referencia"
        cmCod.setAttribute("class", "lbl_item_nome")

        var comunCod = document.createElement('div')
        comunCod.setAttribute("class", "box_itemCod_mc")
        comunCod.appendChild(cmCod)


        var cmNome = document.createElement('Label')
        cmNome.innerHTML = "Nome"
        cmNome.setAttribute("class", "lbl_item_nome")

        var comunName = document.createElement('div')
        comunName.setAttribute("class", "box_itemNome_mc")
        comunName.appendChild(cmNome)

        var cmPn = document.createElement('Label')
        cmPn.innerHTML = "Contacto"
        cmPn.setAttribute("class", "lbl_item_nome")

        var comunPhone = document.createElement('div')
        comunPhone.setAttribute("class", "box_itemContacto_mc")
        comunPhone.appendChild(cmPn)


        var cmServico = document.createElement('Label')
        cmServico.innerHTML = "Servico"
        cmServico.setAttribute("class", "lbl_item_nome")

        var comunServico = document.createElement('div')
        comunServico.setAttribute("class", "box_itemservico_mc")
        comunServico.appendChild(cmServico)


        var cmdateAgd = document.createElement('Label')
        cmdateAgd.innerHTML = "Data Agendada"
        cmdateAgd.setAttribute("class", "lbl_item_nome")

        var comunDateAgendamento = document.createElement('div')
        comunDateAgendamento.setAttribute("class", "box_itemdata_mc")
        comunDateAgendamento.appendChild(cmdateAgd)


        var cmHoraAgd = document.createElement('Label')
        cmHoraAgd.innerHTML = "Horario"
        cmHoraAgd.setAttribute("class", "lbl_item_nome")

        var comunHoraAgendamento = document.createElement('div')
        comunHoraAgendamento.setAttribute("class", "box_itemhr_mc")
        comunHoraAgendamento.appendChild(cmHoraAgd)


        var cmObs = document.createElement('Label')
        cmObs.innerHTML = "Observação"
        cmObs.setAttribute("class", "lbl_item_nome")

        var comunObs = document.createElement('div')
        comunObs.setAttribute("class", "box_itemobs_mc")
        comunObs.appendChild(cmObs)


        var cmCurrentDate = document.createElement('Label')
        cmCurrentDate.innerHTML = "Data"
        cmCurrentDate.setAttribute("class", "lbl_item_nome")

        var comunCurrentDate = document.createElement('div')
        comunCurrentDate.setAttribute("class", "box_itemdata_mc")
        comunCurrentDate.appendChild(cmCurrentDate)


        var cmStatus = document.createElement('Label')
        cmStatus.innerHTML = "Status"
        cmStatus.setAttribute("class", "lbl_item_nome")

        var comunStatus = document.createElement('div')
        comunStatus.setAttribute("class", "box_itemconfig_mc")
        comunStatus.appendChild(cmStatus)

        divComun.appendChild(comunNumber)
        divComun.appendChild(comunCod)
        divComun.appendChild(comunName)
        divComun.appendChild(comunPhone)
        divComun.appendChild(comunServico)
        divComun.appendChild(comunDateAgendamento)
        divComun.appendChild(comunHoraAgendamento)
        divComun.appendChild(comunObs)
        divComun.appendChild(comunCurrentDate)
        divComun.appendChild(comunStatus)

        content.appendChild(divComun)

    }

}


function removAll_marcacao() {

    var itens = localStorage.getItem("itemsMC")
    var main = document.getElementsByClassName("box-dinamic-list-marcacao")[0]

    for (i = 0; i < itens.length - 1; i += 9) {

        if (document.getElementById("divIdMc-" + i)) {

            main.removeChild(document.getElementById("divIdMc-" + i))

        }
    }

}

function removFilter_marcacao() {

    var itens = localStorage.getItem("itemFilterMc")
    var main = document.getElementsByClassName("box-dinamic-list-marcacao")[0]

    for (i = 0; i < itens.length - 1; i += 9) {

        if (document.getElementById("divIdFilter-" + i)) {

            main.removeChild(document.getElementById("divIdFilter-" + i))

        }

    }


}

function populate_box_marcacao() {

    removFilter_marcacao()

    if (document.getElementById("pesquisa_cd_mc").value == "") {

        marcacao();
    }

}

function filterMarcacao() {

    var callFunction = "we_can_go";
    var url = "../php/function.php";

    var cod = document.getElementById("pesquisa_cd_mc").value

    if (cod != "") {

        $.ajax({

            type: "POST",
            crossDomain: true,
            cache: false,
            url: url,

            data: {

                filterPHP: cod,
                filtercodPHP: callFunction
            },

            datatype: "text",

            success: function(data) {

                if (data != "error") {

                    var filter = data.split(',')

                    localStorage.setItem("itemFilterMc", filter)

                    listaFilterMarcacao(filter)
                }

            }
        })

    } else {

        document.getElementById("pesquisa_cd_mc").value = "Deve preencher o campo"
        document.getElementsByClassName("box-lista-marcacao")[0].style.borderColor = "red"

    }


}

function showBox_status(id) {

    localStorage.setItem("idMarcacao", id)
    document.getElementsByClassName("box-status")[0].style.display = "block"


}

function addLogs_marcacao() {

    var id = localStorage.getItem("idMarcacao")

    var callFunction = "we_can_go"

    var selector = document.getElementById("status");
    var status = selector.options[selector.selectedIndex].value;

    var id_mc = document.getElementById("idmc-" + id).value

    var codigo = document.getElementById("idcodigoMC-" + id).value
    var nome = document.getElementById("idNomeMC-" + id).value;
    var contacto = document.getElementById("idCCmc-" + id).value;
    var servico = document.getElementById("idsvMC-" + id).value;
    var datas = document.getElementById("idDtmc-" + id).value;
    var hora = document.getElementById("idhrMC-" + id).value;
    var observacao = document.getElementById("idOBSmC-" + id).value;

    $.ajax({

        type: "POST",
        crossDomain: true,
        cache: false,
        url: "../php/function.php",

        data: {

            codigoPHP: codigo,
            nomePHP: nome,
            contactoPHP: contacto,
            statusPHP: status,
            servicoPHP: servico,
            datasPHP: datas,
            horaPHP: hora,
            observacaoPHP: observacao,

            addLogsPHP: callFunction
        },

        datatype: "text",

        success: function(data) {

            if (data == "send") {

                // alert(data)

                removItemMarcacao(id_mc)

                /*   document.getElementById("boxStatus").style.borderColor = "green"
                  document.getElementById("boxInfo").style.color = "green"
                  document.getElementById("boxStatus").style.color = "green"
                  document.getElementById("boxInfo").innerHTML = "status defined" */

            } else {

                alert(data)

                /*     document.getElementById("boxStatus").style.borderColor = "red"
                    document.getElementById("boxStatus").style.color = "red"
                    document.getElementById("boxInfo").style.color = "red"
                    document.getElementById("boxInfo").innerHTML = "status not defined*" */
            }
        }
    });

}

function ajax() {

    var url = "../php/function.php";
    var callFunction = "we_can_go"

    $.ajax({

        type: "POST",
        crossDomain: true,
        cache: false,
        url: url,

        data: {

            idPHP: id,
            removItemMc: callFunction
        },

        datatype: "text",

        success: function(data) {

            if (data == "ok") {

                alert("removed-marcacao")

            } else {

                alert("error")
            }

        }

    })


}

function removItemMarcacao(id) {

    var url = "../php/function.php";
    var callFunction = "we_can_go"

    $.ajax({

        type: "POST",
        crossDomain: true,
        cache: false,
        url: url,

        data: {

            idPHP: id,
            removItemMc: callFunction
        },

        datatype: "text",

        success: function(data) {

            if (data == "ok") {

                alert("removed-marcacao && and Logs")

            } else {

                alert("error")
            }

        }

    })


}


function listaFilterMarcacao(marcacao) {

    removAll_marcacao()

    var content = document.getElementsByClassName("box-dinamic-list-marcacao")[0]
    var count = 0;

    for (i = 0; i < marcacao.length - 1; i += 9) {

        if (!document.getElementById("divIdFilter-" + i)) {

            count++;
            /*  var funct_box_status = showBox_status() */

            var div = document.createElement('div')
            div.id = "divIdMc-" + i
            div.setAttribute("class", "bx-list-all-mc")
                /*  div.setAttribute("onclick", funct_box_status) */


            /*  title colunas name  */

            comunTitle()

            /*  title colunas name end   */

            var idCdd = document.createElement('input')
            idCdd.type = "hidden"
            idCdd.id = "idmc-" + i;
            idCdd.value = marcacao[i]

            // id 
            var boxid = document.createElement('Label')
            boxid.innerHTML = count
            boxid.setAttribute("class", "lbl_item_nome")

            var divID = document.createElement('div')
            divID.setAttribute("class", "box_itemNumber_mc")
            divID.appendChild(boxid)

            // codigo 
            var boxcod = document.createElement('p')
            boxcod.innerHTML = marcacao[i + 1]
            boxcod.value = marcacao[i + 1]
            boxcod.setAttribute("class", "lbl_item_nome")
            boxcod.id = "idcodigoMC-" + i;

            var divCodigo = document.createElement('div')
            divCodigo.setAttribute("class", "box_itemCod_mc")
            divCodigo.appendChild(boxcod)

            // Nome 
            var boxNome = document.createElement('p')
            boxNome.innerHTML = marcacao[i + 2]
            boxNome.value = marcacao[i + 2]
            boxNome.setAttribute("class", "lbl_item_nome")
            boxNome.id = "idNomeMC-" + i;

            var divNome = document.createElement('div')
            divNome.setAttribute("class", "box_itemNome_mc")
            divNome.appendChild(boxNome)

            // contacto 
            var boxcontacto = document.createElement('Label')
            boxcontacto.innerHTML = marcacao[i + 3]
            boxcontacto.value = marcacao[i + 3]
            boxcontacto.setAttribute("class", "lbl_item_nome")
            boxcontacto.id = "idCCmc-" + i;

            var divcc = document.createElement('div')
            divcc.setAttribute("class", "box_itemContacto_mc")
            divcc.appendChild(boxcontacto)

            // servico 
            var boxServico = document.createElement('Label')
            boxServico.innerHTML = marcacao[i + 4]
            boxServico.value = marcacao[i + 4]
            boxServico.setAttribute("class", "lbl_item_nome")
            boxServico.id = "idsvMC-" + i;

            var divsc = document.createElement('div')
            divsc.setAttribute("class", "box_itemservico_mc")
            divsc.appendChild(boxServico)

            // data 
            var boxData = document.createElement('p')
            boxData.innerHTML = marcacao[i + 5]
            boxData.value = marcacao[i + 5]
            boxData.setAttribute("class", "lbl_item_nome")
            boxData.id = "idDtmc-" + i;

            var divdt = document.createElement('div')
            divdt.setAttribute("class", "box_itemdata_mc")
            divdt.appendChild(boxData)

            // horario 
            var boxHorario = document.createElement('p')
            boxHorario.innerHTML = marcacao[i + 6]
            boxHorario.value = marcacao[i + 6]
            boxHorario.setAttribute("class", "lbl_item_nome")
            boxHorario.id = "idhrMC-" + i;

            var divhr = document.createElement('div')
            divhr.setAttribute("class", "box_itemhr_mc")
            divhr.appendChild(boxHorario)

            // obs
            var boxObs = document.createElement('p')
            boxObs.innerHTML = marcacao[i + 7]
            boxObs.value = marcacao[i + 7]
            boxObs.setAttribute("class", "lbl_itemObs_nome")
            boxObs.id = "idOBSmC-" + i;

            var divobs = document.createElement('div')
            divobs.setAttribute("class", "box_itemobs_mc")
            divobs.appendChild(boxObs)

            // date
            var boxdate = document.createElement('p')
            boxdate.innerHTML = marcacao[i + 8]
            boxdate.value = marcacao[i + 8]
            boxdate.setAttribute("class", "lbl_item_nome")
            boxdate.id = "iddate-" + i;

            var divdate = document.createElement('div')
            divdate.setAttribute("class", "box_itemdata_mc")
            divdate.appendChild(boxdate)

            // status

            var funt_open_box_status = 'showBox_status(`' + i + '`)'

            var config = document.createElement('input')
            config.type = "button"
            config.id = "configID-" + i
            config.setAttribute('onclick', funt_open_box_status)
            config.setAttribute('class', 'fas fa-cogs fa-1x')


            var divconfig = document.createElement('div')
            divconfig.setAttribute("class", "box_itemconfig_mc")
            divconfig.appendChild(config)

            div.appendChild(idCdd)
            div.appendChild(divID)
            div.appendChild(divCodigo)
            div.appendChild(divNome)
            div.appendChild(divcc)
            div.appendChild(divsc)
            div.appendChild(divdt)
            div.appendChild(divhr)
            div.appendChild(divobs)
            div.appendChild(divdate)
            div.appendChild(divconfig)

            content.appendChild(div)

        }

    }

}

function printReport() {

    window.open("/barbearia/php/reportPdf.php");

}


function cancelBoxLogin() {

    document.getElementsByClassName("box-login")[0].style.display = "none"
    document.getElementsByClassName("box-loginItem")[0].style.borderColor = "#DBA901"
    document.getElementById("info-error-lg").innerHTML = ""

    document.getElementsByClassName("box-fr-login-user")[0].style.borderColor = "#DBA901"
    document.getElementsByClassName("box-fr-login-pass")[0].style.borderColor = "#DBA901"

    document.getElementById("fname-login").value = ""
    document.getElementById("fpass-login").value = ""

    if (document.getElementById("id-remenber-login").checked == true) {

        document.getElementById("id-remenber-login").checked = false
    }

}




function showBoxLogin() {

    session()
    document.getElementsByClassName("box-login")[0].style.display = "block"
}

/* document.getElementsByClassName("box-btn-login")[0].addEventListener("click", function() {

    const load = document.querySelector(".box-preload");
    load.className += " hidden"; // class "loader hidden"
});
 */
function login() {

    var callFunction = "we_can_go"
    var user = document.getElementById("fname-login").value
    var pass = document.getElementById("fpass-login").value
    var remember = document.getElementById("id-remenber-login")
    var url = "/barbearia/php/login.php"

    if (user != "" && pass != "") {

        $.ajax({

            type: "POST",
            crossDomain: true,
            cache: false,
            url: url,

            data: {
                userPHP: user,
                passPHP: pass,
                loginPHP: callFunction
            },

            datatype: "text",

            success: function(data) {

                switch (data) {

                    case "sucess":

                        location.href = '/barbearia/admin/'

                        if (remember.checked == true) {

                            localStorage.setItem('user', user)
                            localStorage.setItem('pass', user)
                        }
                        break;

                    case "invalid":

                        alert(data)

                        document.getElementsByClassName("box-loginItem")[0].style.borderColor = "red"

                        document.getElementsByClassName("box-error-login")[0].style.display = "block"
                        document.getElementById("info-error-lg").innerHTML = "Login Invalido"

                        break;

                    case "invalid pass":

                        alert(data)

                        document.getElementsByClassName("box-loginItem")[0].style.borderColor = "red"

                        document.getElementsByClassName("box-error-login")[0].style.display = "block"
                        document.getElementById("info-error-lg").innerHTML = "Login Invalido"

                        break;

                    case "permissao negado":

                        alert(data)

                        document.getElementsByClassName("box-loginItem")[0].style.borderColor = "red"

                        document.getElementsByClassName("box-error-login")[0].style.display = "block"
                        document.getElementById("info-error-lg").innerHTML = "Acesso Negado"

                        break;

                    case "bloqueado":

                        alert(data)

                        document.getElementsByClassName("box-loginItem")[0].style.borderColor = "red"

                        document.getElementsByClassName("box-error-login")[0].style.display = "block"
                        document.getElementById("info-error-lg").innerHTML = "Utilizador Bloqueado"

                        break;


                    case "login invalid":
                        alert(data)

                        document.getElementsByClassName("box-loginItem")[0].style.borderColor = "red"

                        document.getElementsByClassName("box-error-login")[0].style.display = "block"
                        document.getElementById("info-error-lg").innerHTML = "Login Invalido"

                        break;


                    default:

                        alert(data)

                        document.getElementsByClassName("box-loginItem")[0].style.borderColor = "red"

                        document.getElementsByClassName("box-error-login")[0].style.display = "block"
                        document.getElementById("info-error-lg").innerHTML = "error"

                        break;
                }
            }

        });

    } else {

        document.getElementsByClassName("box-loginItem")[0].style.borderColor = "red"
        document.getElementsByClassName("box-error-login")[0].style.display = "block"

        document.getElementsByClassName("box-fr-login-user")[0].style.borderColor = "red"
        document.getElementsByClassName("box-fr-login-pass")[0].style.borderColor = "red"

        document.getElementById("info-error-lg").innerHTML = "Deve Preencher campos!"

    }

}

function load() {

    document.getElementsByClassName("box-preload")[0].style.display = "block"
}

function hidden_preload() {

    document.getElementsByClassName("box-preload")[0].style.display = "none"

}

function logout() {

    var logout = 'logout';

    $.post(
        '../php/login.php', {
            logoutPHP: logout,
        },

        function(data) {
            if (data == 'success') {

                location.href = '/barbearia/'

            }
        }
    )

}

function session() {

    var user = localStorage.getItem("user")
    var pass = localStorage.getItem("pass")

    if (user != undefined && pass != undefined) {

        if (user != null && pass != null) {

            document.getElementById("fname-login").value = user
            document.getElementById("fpass-login").value = pass
            document.getElementById("id-remenber-login").checked = true

        }
    }

}

function showPass() {

    var mostrar = document.getElementById('fpass-login');

    if (mostrar.value != "" || mostrar.value != null) {

        if (mostrar.type == 'password') {

            mostrar.type = 'text';

            document.getElementsByClassName('toggle-on-pass-login')[0].style.display = 'none';
            document.getElementsByClassName('toggle-off-pass-login')[0].style.display = 'block';
        }

    }

}

function hidePass() {

    var mostrar = document.getElementById('fpass-login');
    if (mostrar.value != "" || mostrar.value != null) {

        if (mostrar.type == 'text') {
            mostrar.type = 'password';

            document.getElementsByClassName('toggle-on-pass-login')[0].style.display = 'block';
            document.getElementsByClassName('toggle-off-pass-login')[0].style.display = 'none';
        }

    }


}



/* function listaMarcacao() {


    if (document.getElementById("itemsMarcacao").style.display == "none") {

        document.getElementById("itemsMarcacao").style.display = "block"
        document.getElementById("box-marcacao").style.backgroundColor = "#F7D358"

    } else {

        document.getElementById("itemsMarcacao").style.display = "none"
        document.getElementById("box-marcacao").style.backgroundColor = "#848484"
    }

    var callFunction = "we_can_go";
    var url = "../php/function.php";
    var content = document.getElementById("itemsMarcacao")

    $.ajax({

        type: "POST",
        crossDomain: true,
        cache: false,
        url: url,

        data: {

            listMarcPHP: callFunction
        },

        datatype: "text",

        success: function(data) {



            var marcacao = data.split(',')
            localStorage.setItem("items", data)

            if (data != "error") {


                for (i = 0; i < marcacao.length - 1; i += 7) {

                    if (!document.getElementById("rowMarcacao-" + i)) {

                        var funct = 'configStatus(' + i + ')'

                        var boxMarcacao = document.createElement("div")
                        boxMarcacao.id = "rowMarcacao-" + i
                        boxMarcacao.setAttribute("class", "dinamic-list")
                        boxMarcacao.setAttribute("onclick", funct)



                        var boxFlex = document.createElement('div')
                        boxFlex.setAttribute("class", "box-flexItem")


                        var itemID = document.createElement('p')
                        itemID.id = "itemID-" + i
                        itemID.setAttribute("class", "dinamic-itemlista")
                        itemID.innerHTML = "Nr." + marcacao[i]
                        itemID.value = marcacao[i]

                        var itemNome = document.createElement('p')
                        itemNome.id = "itemNome-" + i
                        itemNome.setAttribute("class", "dinamic-itemlista")
                        itemNome.innerHTML = marcacao[i + 1]
                        itemNome.value = marcacao[i + 1]

                        var itemContacto = document.createElement('p')
                        itemContacto.id = "itemContacto-" + i
                        itemContacto.setAttribute("class", "dinamic-itemlista")
                        itemContacto.innerHTML = marcacao[i + 2]
                        itemContacto.value = marcacao[i + 2]

                        var itemServico = document.createElement('p')
                        itemServico.id = "itemServico-" + i
                        itemServico.setAttribute("class", "dinamic-itemlista")
                        itemServico.innerHTML = marcacao[i + 3]
                        itemServico.value = marcacao[i + 3]

                        var itemData = document.createElement('p')
                        itemData.id = "itemData-" + i
                        itemData.setAttribute("class", "dinamic-itemlista")
                        itemData.innerHTML = marcacao[i + 4]
                        itemData.value = marcacao[i + 4]

                        var itemHorario = document.createElement('p')
                        itemHorario.id = "itemHorario-" + i
                        itemHorario.setAttribute("class", "dinamic-itemlista")
                        itemHorario.innerHTML = marcacao[i + 5]
                        itemHorario.value = marcacao[i + 5]

                        var itemObservacao = document.createElement('p')
                        itemObservacao.id = "itemObservacao-" + i
                        itemObservacao.setAttribute("class", "dinamic-itemlista")
                        itemObservacao.innerHTML = marcacao[i + 6]
                        itemObservacao.value = marcacao[i + 6]


                        boxFlex.appendChild(itemID)
                        boxFlex.appendChild(itemNome)
                        boxFlex.appendChild(itemContacto)
                        boxFlex.appendChild(itemServico)
                        boxFlex.appendChild(itemData)
                        boxFlex.appendChild(itemHorario)
                        boxFlex.appendChild(itemObservacao)

                        boxMarcacao.appendChild(boxFlex)

                        content.appendChild(boxMarcacao)

                    }


                }

            } else {

                alert(" error")

            }

        }

    });


} */

/* function showListaMarcacao() {

    listaMarcacao()
} */


function cancelInternalBox() {


    document.getElementsByClassName("box-add-user")[0].style.display = "none"
    document.getElementsByClassName("box-add-user")[1].style.display = "none"
    document.getElementsByClassName('box-info-delet')[0].style.display = "none"
    document.getElementsByClassName('box-add-timer')[0].style.display = "none"

}

function cancelMainBox() {

    document.getElementsByClassName("box-gestao-utilizador")[0].style.display = "none"
    document.getElementsByClassName('box-timers-today')[0].style.display = "none"

}

function utilizador() {

    var callFunction = "we_can_go";
    var url = "../php/function.php";

    $.ajax({

        type: "POST",
        crossDomain: true,
        cache: false,
        url: url,

        data: {

            listaUserPHP: callFunction
        },

        datatype: "text",

        success: function(data) {

            if (data != "error") {

                var utilizadores = data.split(',')
                listaUtilizadores(utilizadores)
                localStorage.setItem("items", data)
                localStorage.setItem("utilizador", data)

            } else {

                alert(" error")

            }

        }

    });

}

function listaUtilizadores(utilizadores) {

    document.getElementsByClassName("box-gestao-utilizador")[0].style.display = "block"

    var content = document.getElementsByClassName("bx-listaUtilizadores")[0]

    var count = 0;

    for (i = 0; i < utilizadores.length - 1; i += 7) {

        if (!document.getElementById("listaUserBX-" + i)) {
            count++;

            comunUtilizador()

            var boxUtilizador = document.createElement("div")
            boxUtilizador.id = "listaUserBX-" + i
            boxUtilizador.setAttribute("class", "userLista")

            // id 
            var idUser = document.createElement('input')
            idUser.type = "hidden"
            idUser.id = "userID-" + i
            idUser.value = utilizadores[i]

            // numeracao
            var cNumber = document.createElement('Label')
            cNumber.innerHTML = count;
            /*  cNumber.setAttribute("class", ) */

            var divNumber = document.createElement('div')
            divNumber.setAttribute("class", "box_number_item_user")
            divNumber.appendChild(cNumber)

            // nome 
            var itemNome = document.createElement('Label')
            itemNome.id = "idNome-" + i
            itemNome.innerHTML = utilizadores[i + 1]
            itemNome.value = utilizadores[i + 1]
                /*  itemNome.setAttribute("class", "itemName-box") */

            var divNome = document.createElement('div')
            divNome.setAttribute("class", "box_item_user")
            divNome.appendChild(itemNome)

            // email
            var itemEmail = document.createElement('Label')
            itemEmail.id = "idEmail-" + i
            itemEmail.innerHTML = utilizadores[i + 2]
            itemEmail.value = utilizadores[i + 2]
                /*   itemEmail.setAttribute("class", "itemEmail-box") */

            var divEmail = document.createElement('div')
            divEmail.setAttribute("class", "box_item_mail")
            divEmail.appendChild(itemEmail)

            // userName

            var userName = document.createElement('input')
            userName.type = "hidden"
            userName.id = "userNameID-" + i
            userName.value = utilizadores[i + 3]

            // pass

            var passW = document.createElement('input')
            passW.type = "hidden"
            passW.id = "passWID-" + i
            passW.value = utilizadores[i + 4]

            // tipo

            var tipo = document.createElement('input')
            tipo.type = "hidden"
            tipo.id = "tipoID-" + i
            tipo.value = utilizadores[i + 5]

            // acesso 

            var acesso = document.createElement('input')
            acesso.type = "hidden"
            acesso.id = "acessoID-" + i
            acesso.value = utilizadores[i + 6]


            // edit

            var call_edit_funct = 'showBoxEdit(`' + i + '`)'

            var edit = document.createElement('input')
            edit.type = "button"
            edit.id = "editID-" + i
            edit.setAttribute('onclick', call_edit_funct)
            edit.setAttribute('class', 'fas fa-pencil-alt')

            var divEdit = document.createElement('div')
            divEdit.setAttribute("class", "box_item_edit_user")
            divEdit.appendChild(edit)


            /*   var editSpan = document.createElement('span')
            editSpan.setAttribute("class", "itemListaIconED")

            // var swift = 'sendOutboxToggle(`' + address + '`,`' + counter + '`)'  showBoxInfo
          

            var edit = document.createElement('input')
            edit.type = "button"
            edit.id = "editID-" + i
            edit.setAttribute('class', 'fas fa-pencil-alt fa-2x')
            edit.setAttribute('onclick', call_edit_funct)

            editSpan.appendChild(edit)
 */
            // delet 

            var call_del_funct = 'showBoxInfo(`' + i + '`)'
            var delet = document.createElement('input')
            delet.type = "button"
            delet.id = "deletID-" + i
            delet.setAttribute('onclick', call_del_funct)
            delet.setAttribute('class', 'far fa-trash-alt')


            var divDelet = document.createElement('div')
            divDelet.setAttribute("class", "box_item_delet_user")
            divDelet.appendChild(delet)

            boxUtilizador.appendChild(idUser)
            boxUtilizador.appendChild(divNumber)
            boxUtilizador.appendChild(divNome)
            boxUtilizador.appendChild(divEmail)
            boxUtilizador.appendChild(userName)
            boxUtilizador.appendChild(passW)
            boxUtilizador.appendChild(tipo)
            boxUtilizador.appendChild(acesso)
            boxUtilizador.appendChild(divEdit)
            boxUtilizador.appendChild(divDelet)

            content.appendChild(boxUtilizador)

        }


        /* for end */
    }


}

function comunUtilizador() {

    var content = document.getElementsByClassName("box-dinamic-comun-utilizador")[0]

    if (!document.getElementById("id_comun_user")) {

        var divComun = document.createElement('div')
        divComun.id = "id_comun_user";
        divComun.setAttribute("class", "bx-comun-user")

        var cmNr = document.createElement('Label')
        cmNr.innerHTML = "#"
        cmNr.setAttribute("class", "lbl_item_nome")

        var comunNr = document.createElement('div')
        comunNr.setAttribute("class", "box_comun_nr_user")
        comunNr.appendChild(cmNr)


        var cmNome = document.createElement('Label')
        cmNome.innerHTML = "Nome"
        cmNome.setAttribute("class", "lbl_item_nome")

        var comunName = document.createElement('div')
        comunName.setAttribute("class", "box_comun_name_user")
        comunName.appendChild(cmNome)

        var cmEmail = document.createElement('Label')
        cmEmail.innerHTML = "E-mail"
        cmEmail.setAttribute("class", "lbl_item_nome")

        var comunEmail = document.createElement('div')
        comunEmail.setAttribute("class", "box_comun_mail_user")
        comunEmail.appendChild(cmEmail)

        var cmEdit = document.createElement('Label')
        cmEdit.innerHTML = "Editar"
        cmEdit.setAttribute("class", "lbl_item_nome")

        var comunEdit = document.createElement('div')
        comunEdit.setAttribute("class", "box_comun_edit_user")
        comunEdit.appendChild(cmEdit)

        var cmRemov = document.createElement('Label')
        cmRemov.innerHTML = "Remover"
        cmRemov.setAttribute("class", "lbl_item_nome")

        var comunmRemov = document.createElement('div')
        comunmRemov.setAttribute("class", "box_comun_delet_user")
        comunmRemov.appendChild(cmRemov)


        divComun.appendChild(comunNr)
        divComun.appendChild(comunName)
        divComun.appendChild(comunEmail)
        divComun.appendChild(comunEdit)
        divComun.appendChild(comunmRemov)

        content.appendChild(divComun)

    }

}

function showBoxAddUser() {

    document.getElementsByClassName("box-add-user")[0].style.display = "block"
    document.getElementsByClassName("box-gestao-utilizador")[0].style.marginRight = "20px"


}

function addUser() {

    var name = document.getElementById("frName").value
    var email = document.getElementById("frEmail").value
    var userName = document.getElementById("frUser").value
    var password = document.getElementById("frPass").value
    var callFunction = "ok"

    var url = "../php/function.php";

    if (name != "" && email != "" && userName != "" && password != "") {

        var blocked_Unlocked = ""
        var userType = ""

        if (document.getElementById("acessCheckID").checked == true) {

            blocked_Unlocked = "bloqueado"
        } else {

            blocked_Unlocked = "desbloqueado"
        }

        if (document.getElementById("nornalUserID").checked) {

            userType = "normal"
        } else if (document.getElementById("adminUserID").checked) {

            userType = "admin"
        } else {

            userType = "normal"

        }


        $.ajax({

            type: "POST",
            crossDomain: true,
            cache: false,
            url: url,

            data: {

                namePHP: name,
                emailPHP: email,
                userPHP: userName,
                passPHP: password,
                typeUserPHP: userType,
                acessPHP: blocked_Unlocked,
                addUserPHP: callFunction

            },

            datatype: "text",

            success: function(data) {

                if (data == 1) {

                    document.getElementsByClassName('box-add-user')[0].style.borderColor = "#64FE2E"

                    document.getElementById("frName").value = ""
                    document.getElementById("frEmail").value = ""
                    document.getElementById("frUser").value = ""
                    document.getElementById("frPass").value = ""

                } else {

                    document.getElementsByClassName('box-add-user')[0].style.borderColor = "red"
                }

            }

        })
    } else {

        document.getElementsByClassName('box-add-user')[0].style.borderColor = "red"

    }


}

function showBoxEdit(id) {


    document.getElementById("frEdName").value = document.getElementById("idNome-" + id).value
    document.getElementById("frEdEmail").value = document.getElementById("idEmail-" + id).value
    document.getElementById("frEdUser").value = document.getElementById("userNameID-" + id).value
    document.getElementById("frEdPass").value = "UYEHBDFBFDBNFD"

    /*  document.getElementById("frEdPass").value = document.getElementById("passWID-" + id).value */
    document.getElementById("frId").value = document.getElementById("userID-" + id).value

    if (document.getElementById("tipoID-" + id).value == "admin") {

        document.getElementById("editAdmin").checked = true

    }
    /*  else {

            document.getElementById("editNormal").checked = true
        } */

    if (document.getElementById("acessoID-" + id).value == "bloqueado") {

        document.getElementById("EdAcess").checked = true
    }

    document.getElementsByClassName("box-add-user")[1].style.display = "block"
    document.getElementsByClassName("box-gestao-utilizador")[0].style.marginRight = "20px"

}


function updateUser() {

    var id = document.getElementById("frId").value
    var name = document.getElementById("frEdName").value
    var email = document.getElementById("frEdEmail").value
    var userName = document.getElementById("frEdUser").value
    var password = document.getElementById("frEdPass").value
    var callFunction = "ok"

    var url = "../php/function.php";

    if (name != "" && email != "" && userName != "" && password != "") {

        var blocked_Unlocked = ""
        var userType = ""

        if (document.getElementById("EdAcess").checked == true) {

            blocked_Unlocked = "bloqueado"
        } else {

            blocked_Unlocked = "desbloqueado"
        }

        if (document.getElementById("editNormal").checked) {

            userType = "normal"
        } else if (document.getElementById("editAdmin").checked) {

            userType = "admin"
        } else {

            userType = "normal"

        }


        $.ajax({

            type: "POST",
            crossDomain: true,
            cache: false,
            url: url,

            data: {

                idPHP: id,
                namePHP: name,
                emailPHP: email,
                userPHP: userName,
                passPHP: password,
                typeUserPHP: userType,
                acessPHP: blocked_Unlocked,
                updatPHP: callFunction

            },

            datatype: "text",

            success: function(data) {

                if (data == 1) {

                    document.getElementsByClassName('box-add-user')[1].style.borderColor = "#64FE2E"

                    document.getElementById("frEdName").value = ""
                    document.getElementById("frEdEmail").value = ""
                    document.getElementById("frEdUser").value = ""
                    document.getElementById("frEdPass").value = ""

                } else {

                    document.getElementsByClassName('box-add-user')[1].style.borderColor = "red"
                }

            }

        })
    } else {

        document.getElementsByClassName('box-add-user')[1].style.borderColor = "red"
    }

}

function deletUser() {

    var id = localStorage.getItem("id")
    var callFunction = "we_can_go";
    var url = "../php/function.php";

    $.ajax({

        type: "POST",
        crossDomain: true,
        cache: false,
        url: url,

        data: {

            idPHP: id,
            deletPHP: callFunction
        },

        datatype: "text",

        success: function(data) {

            if (data == 1) {

                utilizador();
                document.getElementsByClassName('box-info-delet')[0].style.borderColor = "green"

            } else {

                document.getElementsByClassName('box-info-delet')[0].style.borderColor = "red"

            }
        }

    })

}

function showBoxInfo(id) {

    document.getElementsByClassName('box-info-delet')[0].style.display = "block";
    localStorage.setItem("id", document.getElementById("userID-" + id).value)
}

/*function listaCandidtura() {

    var callFunction = "we_can_go";
    var url = "../php/function.php";
    var content = document.getElementById("itemsCandidaturas")

    $.ajax({

            type: "POST",
            crossDomain: true,
            cache: false,
            url: url,

            data: {

                listRecrtPHP: callFunction
            },

            datatype: "text",

            success: function(data) {

                var candidatura = data.split(',')

                if (data != "error") {


                    for (i = 0; i < candidatura.length - 1; i += 6) {

                        if (!document.getElementById("rowMarcacao-" + i)) {

                            if (!document.getElementById("rowMarcacao-" + i)) {

                                var funct = 'configStatus(' + i + ')'

                                var boxMarcacao = document.createElement("div")
                                boxMarcacao.id = "rowMarcacao-" + i
                                boxMarcacao.setAttribute("class", "dinamic-list")
                                boxMarcacao.setAttribute("onclick", funct)



                                var boxFlex = document.createElement('div')
                                boxFlex.setAttribute("class", "box-flexItem")


                                var itemID = document.createElement('p')
                                itemID.setAttribute("class", "dinamic-itemlista")
                                itemID.innerHTML = "Nr." + marcacao[i]

                                var itemNome = document.createElement('p')
                                itemNome.setAttribute("class", "dinamic-itemlista")
                                itemNome.innerHTML = marcacao[i + 1]

                                var itemContacto = document.createElement('p')
                                itemContacto.setAttribute("class", "dinamic-itemlista")
                                itemContacto.innerHTML = marcacao[i + 2]

                                var itemServico = document.createElement('p')
                                itemServico.setAttribute("class", "dinamic-itemlista")
                                itemServico.innerHTML = marcacao[i + 3]

                                var itemData = document.createElement('p')
                                itemData.setAttribute("class", "dinamic-itemlista")
                                itemData.innerHTML = marcacao[i + 4]

                                var itemHorario = document.createElement('p')
                                itemHorario.setAttribute("class", "dinamic-itemlista")
                                itemHorario.innerHTML = marcacao[i + 5]

                                var itemObservacao = document.createElement('p')
                                itemObservacao.setAttribute("class", "dinamic-itemlista")
                                itemObservacao.innerHTML = marcacao[i + 6]


                                boxFlex.appendChild(itemID)
                                boxFlex.appendChild(itemNome)
                                boxFlex.appendChild(itemContacto)
                                boxFlex.appendChild(itemServico)
                                boxFlex.appendChild(itemData)
                                boxFlex.appendChild(itemHorario)
                                boxFlex.appendChild(itemObservacao)

                                boxMarcacao.appendChild(boxFlex)

                                content.appendChild(boxMarcacao)

                            }


                        }

                    } else {

                        alert(" error")

                    }


                }

            });

    }*/



function hidden_box_status() {

    document.getElementsByClassName("box-status")[0].style.display = "none"
}




function getSelectValue(selector) {

    var item = selector.options[selector.selectedIndex].value
    return item

}


function getSelectedOption(sel) { // return the value selected in dropDown

    var opt = "";
    len = sel.options.length

    var value = selector[sel.selectedIndex].value;

    for (i = 0; i < len; i++) {

        opt = sel.options[i].value;

        if (opt.selected === true) {

            opt = sel.options[i];
            break;
        }
    }

    return opt;
}


function validaTime() {

    var firts_opt = 0;
    var last_opt = 0;
    var empty = 0;

    var select = document.getElementById("item-time-marcacao")
    var item = select.options[select.selectedIndex].value


    if (document.getElementsByClassName("box-date-other")[0].style.display == "block") {

        if (document.getElementById("date-marcacao").value == null || document.getElementById("date-marcacao").value == undefined ||
            document.getElementById("date-marcacao").value == "") {

            empty = -1;

        } else {

            last_opt = 2;
        }

    } else {

        if (document.getElementById("select-time-current").disabled == false) {

            firts_opt = 1;
        } else {

            empty = -1;
        }

    }

    if (firts_opt == 1) { // get time today 

        return 1;
    }
    if (last_opt == 2) { // get other date

        return 2;
    }

    return empty;

}


function show_box_menu_admin() {

    document.getElementsByClassName("content-menu-admin")[0].style.display = "block"
}

function hidden_box_menu_admin() {

    document.getElementsByClassName("content-menu-admin")[0].style.display = "none"
}

function verificaData() {

    var date = document.getElementById("date-marcacao").value;

    var selector = document.getElementById("item-time-marcacao");
    var time = selector.options[selector.selectedIndex].value;


    if (date != "" && time != "") {

        var url = "../php/checkdate.php";

        $.ajax({

            method: "POST",
            crossDomain: true,
            cache: false,
            url: url,
            data: {

                datePHP: date,
                timePHP: time
            },

            success: function(data) {

                var values = JSON.parse(data);
                var indexN_existe = values.N_existe;
                var indexExiste = values.Existe;

                if (indexN_existe != null) {

                    localStorage.setItem("checkdate", indexN_existe)

                } else {

                    localStorage.setItem("checkdate", indexExiste)

                }
            }
        })

    }

}

function addMarcacao() {

    var nome = document.getElementById("frName-marcacao").value
    var phone = document.getElementById("frPhone-marcacao").value;
    var hour = "";
    var info = ""
    var obs = document.getElementById("frObs-marcacao").value;
    var date = "";
    var referencia = generateID();

    var callFunction = "we_can_go";
    var url = "../php/function.php";

    var servico = getSelectValue(document.getElementById("idServico"))

    switch (validaTime()) {

        case 1:
            hour = getSelectValue(document.getElementById("select-time-current"))
            date = currentDate()
            break;
        case 2:
            hour = getSelectValue(document.getElementById("item-time-marcacao"))
            date = document.getElementById("date-marcacao").value
            break;
        case -1:
            info = "escolher a hora"
            alert(info)
            break

    }

    /*  if (nome != "" && phone != "" && hour != "" && servico != "") { */

    switch (localStorage.getItem("checkdate")) {

        case -1:
            $.ajax({

                type: "POST",
                crossDomain: true,
                cache: false,
                url: url,

                data: {

                    nomePHP: nome,
                    phonePHP: phone,
                    servicoPHP: servico,
                    hourPHP: hour,
                    datePHP: date,
                    obsPHP: obs,
                    add_marcacaoPHP: callFunction,
                    codPHP: referencia
                },

                datatype: "text",

                success: function(data) {

                    if (data == "add") {

                        removTime()
                        alert("yes_add")

                        // location.href = '/barbearia/php/pdf.php?useID=' + nome + 'date=' + date + 'time=' + hour; */
                        var id = generateID();
                        var ok = "yes"

                        location.href = '../php/pdf.php?useID=' + nome + '&date=' + date + '&time=' + hour + '&id=' + id + '&check=' + ok;

                        /*  location.href = '/barbearia/php/email.php?check=' + ok; */

                        document.getElementsByClassName("box-check-in-marcacao")[0].style.display = "none"

                        document.getElementsByClassName("box-info-marcacao")[0].style.borderColor = "green"
                        document.getElementsByClassName("box-info-marcacao")[0].style.display = "block"

                        if (document.getElementById("date-marcacao").value != "" || document.getElementById("date-marcacao").value != null) {

                            document.getElementById("date-marcacao").value = null
                        }

                    } else {

                        document.getElementsByClassName("box-info-marcacao")[0].style.borderColor = "red"
                        document.getElementsByClassName("box-info-marcacao")[0].style.display = "block"

                        document.getElementById("id-title-info-marcacao").innerHTML = "Erro no Envio! Por Favor Tenta Novamente"

                        if (document.getElementById("date-marcacao").value != "" || document.getElementById("date-marcacao").value != null) {

                            document.getElementById("date-marcacao").value = null
                        }

                    }
                }
            })

            break

        case 1:

            alert("Deve escolher outra data. ja existe uma marcacao para esta data!")

            break

    }


    /*  } else {

         alert("deve preencher os campos obrigatorios")
         document.getElementsByClassName("box-marcacao-form")[0].style.borderColor = "red"
     } */

}

function aceptTermo() {

    document.getElementsByClassName("box-info-termos")[0].style.display = "none";
    document.getElementById("term-responsa-recrutamento").checked = true

    var value = "yes"

    localStorage.setItem("termos", value);


}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {

        return false;

    }
    return true;
}

function aceptOnlyNumber(input) {

    var num = /[^0-9]/gi;
    input.value = input.value.replace(num, "");

}

function checkNumber(event) {

    if ((event.charCode != 8 && event.charCode == 0 || (event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)))) {

        var fieldLength = document.getElementById('frPhone-marcacao').value;
        /* 
                if (fieldLength.length == 9) {

                    return true

                } else {

                    alert("is not number!")
                } */

        return true

    }

}

/* function checkLength() {
    var fieldLength = document.getElementById('frPhone-marcacao').value.length;
    //Suppose u want 4 number of character
    if (fieldLength = 9) {
        return true;
    } else {
        var str = document.getElementById('txtF').value;
        str = str.substring(0, str.length - 1);
        document.getElementById('txtF').value = str;
    }
} */

function NotaceptTermo() {

    document.getElementsByClassName("box-info-termos")[0].style.display = "none";
    document.getElementById("term-responsa-recrutamento").checked = false

    var value = "not"

    localStorage.setItem("termos", value);

}

function show_box_termos() {

    document.getElementsByClassName("box-info-termos")[0].style.display = "block";
}


function clean_form_candidatura() {

    document.getElementById("frName-recrutamento").value = ""
    document.getElementById("frPhone-recrutamento").value = ""
    document.getElementById("frEmail-recrutamento").value = ""
    document.getElementById("frAdress-recrutamento").value = ""
    document.getElementById("frExP-recrutamento").value = ""
    document.getElementById("file").value = ""

    document.getElementById("id_termo_show").value = "Termos de Armazenamento"
    document.getElementById("id_termo_show").style.color = "black"

    document.getElementsByClassName("info-error-recrutamento")[0].style.display = "none"

    document.getElementsByClassName("box-icon-recrutamento")[0].style.color = "#DBA901";
    document.getElementsByClassName("box-icon-recrutamento")[1].style.color = "#DBA901";
    document.getElementsByClassName("box-icon-recrutamento")[2].style.color = "#DBA901";
    document.getElementsByClassName("box-icon-recrutamento")[3].style.color = "#DBA901";

    document.getElementsByClassName("main-box-recrutamento")[0].style.borderColor = "#DBA901";

}

function checkIn_candidatura() {

    if (document.getElementById("frName-recrutamento").value != "" && document.getElementById("frPhone-recrutamento").value != "" &&
        document.getElementById("frEmail-recrutamento").value != "" && document.getElementById("frAdress-recrutamento").value != "" &&
        document.getElementById("file").value != "") {

        if (document.getElementById("term-responsa-recrutamento").checked == true) {

            uploadFile()

        } else {

            document.getElementsByClassName("info-error-recrutamento")[0].style.display = "block"
            document.getElementById("error-fr-recrutamento").innerHTML = "Deve Aceitar os Termos de Armazenamento e protrecção de dados"
            document.getElementById("id_termo_show").innerHTML = "Termos de Armazenamento *"
            document.getElementById("id_termo_show").style.color = "red"

        }

    } else {

        errorInfo_form_candidatura()

    }

}



function errorInfo_form_candidatura() {

    document.getElementsByClassName("main-box-recrutamento")[0].style.borderColor = "red";

    document.getElementsByClassName("box-icon-recrutamento")[0].style.color = "red";
    document.getElementsByClassName("box-icon-recrutamento")[1].style.color = "red";
    document.getElementsByClassName("box-icon-recrutamento")[2].style.color = "red";
    document.getElementsByClassName("box-icon-recrutamento")[3].style.color = "red";
    document.getElementsByClassName("box-upload-cv")[0].style.color = "red";


    document.getElementsByClassName("info-error-recrutamento")[0].style.display = "block"
    document.getElementById("error-fr-recrutamento").innerHTML = "Deve Preencher os campos obrigatorios e anexar  o Cv"

}




function uploadFile() {

    var file = new FormData();
    var ficheiro = $("#file")[0].files[0];
    file.append("file", ficheiro);

    var url = "../php/uploadFile.php";

    $.ajax({

        type: "POST",
        contentType: false,
        processData: false,
        crossDomain: true,
        cache: false,
        url: url,
        data: file,

        success: function(data) {

            switch (data) {

                case 1:
                    ;
                    alert("upload realizado com sucesso")
                    break;

                case "tamanho nao suportado":

                    document.getElementsByClassName("main-box-recrutamento")[0].style.borderColor = "red";
                    document.getElementsByClassName("info-error-recrutamento")[0].style.display = "block"
                    document.getElementById("error-fr-recrutamento").innerHTML = "O Tamanho do Ficheiro Excede o Limite. Max 25MB"
                    break;

                case "error file":
                    document.getElementsByClassName("main-box-recrutamento")[0].style.borderColor = "red";
                    document.getElementsByClassName("info-error-recrutamento")[0].style.display = "block"
                    document.getElementById("error-fr-recrutamento").innerHTML = "Verifica o ficheiro e tenta Novamente"
                    break;

                case "invalid extension":

                    document.getElementsByClassName("main-box-recrutamento")[0].style.borderColor = "red";
                    document.getElementsByClassName("info-error-recrutamento")[0].style.display = "block"
                    document.getElementById("error-fr-recrutamento").innerHTML = " Tipo de Ficheiro nao suportado. Exclusivamente PDF"

                    break;

                case -1:
                    alert("eRROR sERVER ...")
                    break;

                default:
                    addCandidatura(data)
                    break;
            }

        }

    })

}



function removListUser() {

    var itens = localStorage.getItem("items").split(',')
        /*  var main = document.getElementsByClassName("box-gestao-utilizador")[0] */
    var main = document.getElementsByClassName("bx-listaUtilizadores")[0]

    for (i = 0; i < itens.length - 1; i += 7) {

        if (document.getElementById("listaUserBX-" + i)) {

            main.removeChild(document.getElementById("listaUserBX-" + i))

        }
        if (document.getElementById("rowFilter-" + i)) {

            main.removeChild(document.getElementById("rowFilter-" + i))

        }

    }

}

function shearchUser() {

    removListUser()

    var shearch = document.getElementById("FilterName").value

    var callFunction = "we_can_go";
    var url = "../php/function.php";

    var content = document.getElementsByClassName("bx-listaUtilizadores")[0]

    $.ajax({

        type: "POST",
        crossDomain: true,
        cache: false,
        url: url,

        data: {

            filterUserPHP: callFunction,
            filterPHP: shearch
        },

        datatype: "text",

        success: function(data) {

            var utilizadores = data.split(',')


            if (data != "error") {

                for (i = 0; i < utilizadores.length - 1; i += 7) {

                    if (!document.getElementById("rowFilterUser-" + i)) {

                        var boxUtilizador = document.createElement("div")
                        boxUtilizador.id = "rowFilterUser-" + i
                        boxUtilizador.setAttribute("class", "userLista")

                        var idUser = document.createElement('input')
                        idUser.type = "hidden"
                        idUser.id = "userID-" + i
                        idUser.value = utilizadores[i]

                        var itemNome = document.createElement('Label')
                        itemNome.id = "idNome-" + i
                        itemNome.innerHTML = utilizadores[i + 1]
                        itemNome.value = utilizadores[i + 1]
                        itemNome.setAttribute("class", "itemName-box")

                        var itemEmail = document.createElement('Label')
                        itemEmail.id = "idEmail-" + i
                        itemEmail.innerHTML = utilizadores[i + 2]
                        itemEmail.value = utilizadores[i + 2]
                        itemEmail.setAttribute("class", "itemEmail-box")

                        var userName = document.createElement('input')
                        userName.type = "hidden"
                        userName.id = "userNameID-" + i
                        userName.value = utilizadores[i + 3]

                        var passW = document.createElement('input')
                        passW.type = "hidden"
                        passW.id = "passWID-" + i
                        passW.value = utilizadores[i + 4]

                        var tipo = document.createElement('input')
                        tipo.type = "hidden"
                        tipo.id = "tipoID-" + i
                        tipo.value = utilizadores[i + 5]

                        var acesso = document.createElement('input')
                        acesso.type = "hidden"
                        acesso.id = "acessoID-" + i
                        acesso.value = utilizadores[i + 6]

                        var editSpan = document.createElement('span')
                        editSpan.setAttribute("class", "itemListaIconED")

                        var call_edit_funct = 'showBoxEdit(`' + i + '`)'
                        var call_del_funct = 'showBoxInfo(`' + i + '`)'

                        var edit = document.createElement('input')
                        edit.type = "button"
                        edit.id = "editID-" + i
                        edit.setAttribute('class', 'fas fa-pencil-alt fa-2x')
                        edit.setAttribute('onclick', call_edit_funct)

                        editSpan.appendChild(edit)

                        var deletSpan = document.createElement('span')
                        deletSpan.setAttribute("class", "itemListaIconDel")

                        var delet = document.createElement('input')
                        delet.type = "button"
                        delet.id = "deletID-" + i
                        delet.setAttribute("class", "far fa-trash-alt fa-2x")
                        delet.setAttribute('onclick', call_del_funct)

                        deletSpan.appendChild(delet)

                        boxUtilizador.appendChild(idUser)
                        boxUtilizador.appendChild(itemNome)
                        boxUtilizador.appendChild(itemEmail)
                        boxUtilizador.appendChild(userName)
                        boxUtilizador.appendChild(passW)
                        boxUtilizador.appendChild(tipo)
                        boxUtilizador.appendChild(acesso)
                        boxUtilizador.appendChild(editSpan)
                        boxUtilizador.appendChild(deletSpan)

                        content.appendChild(boxUtilizador)

                    }

                }

            } else {

                alert(" error")

            }

        }

    });
}


function generateID() {

    getID_Marcacao()

    var lastID = 0;
    var values = JSON.parse(localStorage.getItem("myID"));

    var index = values.Existe;
    var empt = values.empty;

    if (index != null) {


        lastID = index

    } else {

        lastID = empt

    }

    var referencia = null;

    if (parseInt(lastID) == 0) {

        referencia = "PBMC00001"

    } else {

        if (parseInt(lastID) <= 9) {

            referencia = "PBMC0000" + lastID
        } else if (parseInt(lastID) >= 10) {

            referencia = "PBMC000" + lastID
        } else if (parseInt(lastID) >= 100) {

            referencia = "PBMC00" + lastID

        } else if (parseInt(lastID) >= 1000) {

            referencia = "PBMC0" + lastID
        } else {

            referencia = "PBMC" + lastID
        }

    }

    return referencia;

}

function getID_Marcacao() {

    var callFunction = "we_can_go"

    $.ajax({

        type: "POST",
        crossDomain: true,
        cache: false,
        url: "../php/function.php",

        data: {

            id_marcacaophp: callFunction
        },

        success: function(data) {

            localStorage.setItem("myID", data)

        }
    })


}

function showBoxData() {


    // document.getElementsByClassName('box-date-other')[0].style.display = "block"

    if (document.getElementsByClassName('box-date-other')[0].style.display != "none") {

        document.getElementsByClassName('box-date-other')[0].style.display = "none"

    } else {

        document.getElementsByClassName('box-date-other')[0].style.display = "block"
    }


}




function showBoxAddTimer() {

    document.getElementsByClassName('box-add-timer')[0].style.display = "block"

}


function timer() {

    document.getElementsByClassName('box-timers-today')[0].style.display = "block"

    var main = document.getElementsByClassName('box-list-timer-dinamic')[0] // box-list-timer-dinamic
    var callFunction = "we_can_go";
    var url = "../php/function.php";

    $.ajax({

        type: "POST",
        crossDomain: true,
        cache: false,
        url: url,

        data: {

            timerPHP: callFunction
        },

        datatype: "text",

        success: function(data) {

            var time = data.split(',')

            if (data != "error") {

                for (i = 0; i < time.length - 1; i += 3) {

                    var boxTimer = document.createElement('div')
                    boxTimer.id = "boxTimer-" + i
                    boxTimer.setAttribute("class", "bx-listTimer")

                    var date = document.createElement('Label')
                    date.id = "dateTime-" + i
                    date.innerHTML = time[i]
                    date.setAttribute("class", "itemDate-box")

                    var hora = document.createElement('Label')
                    hora.id = "horaTimer-" + i
                    hora.innerHTML = time[i + 1]
                    hora.setAttribute("class", "itemHora-box")

                    var user = document.createElement('Label')
                    user.id = "userTimer-" + i
                    user.innerHTML = time[i + 2]
                    user.setAttribute("class", "itemUser-box")

                    boxTimer.appendChild(date)
                    boxTimer.appendChild(hora)
                    boxTimer.appendChild(user)

                    main.appendChild(boxTimer)

                }

            } else {

                alert("error")
            }

        }

    })

}

function addTimer() {

    var hours = ["10:00:00", "10:30:00", "11:00:00", "11:30:00", "12:00:00", "14:00:00", "15:00:00", "15:40:00", "16:30:00", "17:00:00", "18:00:00", "19:00:00"]
    var hour = [];

    var callFunction = "we_can_go";
    var url = "../php/function.php";
    var user = "Admin"

    if (document.getElementById('check-all-times').checked == true) {

        for (i = 0; i < hours.length; i++) {

            hour.push(hours[i])
        }

    } else {

        if (document.getElementById('time-10').checked == true) {

            hour.push(hours[0])

        }
        if (document.getElementById('time-10h30').checked == true) {

            hour.push(hours[1])

        }
        if (document.getElementById('time-11').checked == true) {

            hour.push(hours[2])

        }
        if (document.getElementById('time-11h30').checked == true) {

            hour.push(hours[3])

        }
        if (document.getElementById('time-12').checked == true) {

            hour.push(hours[4])

        }
        if (document.getElementById('time-14').checked == true) {

            hour.push(hours[5])

        }
        if (document.getElementById('time-15').checked == true) {

            hour.push(hours[6])

        }
        if (document.getElementById('time-15h40').checked == true) {

            hour.push(hours[7])

        }
        if (document.getElementById('time-16h30').checked == true) {

            hour.push(hours[8])

        }
        if (document.getElementById('time-17').checked == true) {

            hour.push(hours[9])

        }
        if (document.getElementById('time-18').checked == true) {

            hour.push(hours[10])

        }
        if (document.getElementById('time-19').checked == true) {

            hour.push(hours[11])
        }

    }

    $.ajax({

        type: "POST",
        crossDomain: true,
        cache: false,
        url: url,

        data: {

            horaPHP: hour,
            userPHP: user,
            timer_addPHP: callFunction
                //localStorage.getItem('user')
        },

        datatype: "text",

        success: function(data) {

            if (data == 1) {

                document.getElementsByClassName('box-add-timer')[0].style.borderColor = "green"
                alert("Ok")
            } else if (data == 0) {

                document.getElementsByClassName('box-add-timer')[0].style.borderColor = "red"
                alert("exist")
            } else {

                document.getElementsByClassName('box-add-timer')[0].style.borderColor = "red"
                alert("error consult")
            }

        }

    });


}

function getTimeInput() {

    var callFunction = "we_can_go";
    var url = "../php/function.php";

    $.ajax({

        type: "POST",
        crossDomain: true,
        cache: false,
        url: url,

        data: {

            timerPHP: callFunction
        },

        datatype: "text",

        success: function(data) {

            var time = data.split(',')

            if (data != "error") {

                var select = document.createElement("select")
                select.id = "select-time-current"

                for (i = 0; i < time.length - 1; i += 3) {

                    var option = document.createElement("option")

                    option.id = "opt-time-" + i
                    option.innerHTML = time[i + 1];
                    option.value = time[i + 1];
                    select.appendChild(option)

                }

                document.getElementsByClassName("bx-select-time-fr-marcacao")[0].appendChild(select)
            }


        }

    })

}

function checkIn() {

    /* var callFunction = "we_can_go"

    $.ajax({

        type: "POST",
        crossDomain: true,
        cache: false,
        url: "../php/function.php",

        data: {

            lastIDphp: callFunction
        },
        datatype: "text",

        success: function(data) {

            if (data != -1) {

                var tamanho = data.length - 1;

                var numb = parseInt(data.substring(tamanho)) + 1
                var last_id = data.substring(0, tamanho) + numb

                localStorage.setItem("id_marcacao", last_id);

                document.getElementById("cd-marcacao").innerHTML = last_id

            } else {

                alert("error")

            }
        }
    }) */

    document.getElementById("cd-marcacao").innerHTML = generateID();
    document.getElementById("id-Current-date").innerHTML = currentDate();
    document.getElementById("id-Current-time").innerHTML = currentTime();
    document.getElementById("name_check").innerHTML = document.getElementById("frName-marcacao").value
    document.getElementById("phone_check").innerHTML = document.getElementById("frPhone-marcacao").value
    document.getElementById("servico_check").innerHTML = getSelectValue(document.getElementById("idServico"))

    if (validaTime() == 1) {

        document.getElementById("time_check").innerHTML = getSelectValue(document.getElementById("select-time-current"))
        document.getElementById("date_check").innerHTML = currentDate();

    } else if (validaTime() == 2) {

        document.getElementById("time_check").innerHTML = getSelectValue(document.getElementById("item-time-marcacao"))
        document.getElementById("date_check").innerHTML = document.getElementById("date-marcacao").value

    } else {

        alert("deve indicar a data ")
    }

}

function currentDate() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;

    return today
}

function currentTime() {

    var time = new Date();
    var minut = ""
    if (time.getMinutes <= 9) {

        minut = "0";
    }

    var currentTime = time.getHours() + ":" + minut + time.getMinutes() + ":" + time.getSeconds()

    return currentTime

}

function sendDatepdf() {

    var callFunction = "we_can_go";
    var url = "../php/configPdf.php";
    var name = "Honorio Silva"

    $.ajax({

        type: "POST",
        crossDomain: true,
        cache: false,
        url: url,

        data: {

            testPDF: callFunction,
            namePHP: name
        },

        datatype: "text",

        success: function(data) {


        }

    })


}

function printPDF() {

    var array = [];

    var nome = document.getElementById("frName-marcacao").value
    var cod = document.getElementById("cd-marcacao").value
    var date = ""
    var hour = ""

    switch (validaTime()) {

        case 1:
            hour = getSelectValue(document.getElementById("select-time-current"))
            date = currentDate();
            break;
        case 2:
            hour = getSelectValue(document.getElementById("item-time-marcacao"))
            date = document.getElementById("date-marcacao").value
            break;
    }

    if (nome != "" && cod != "" && date != "" && hour != "") {

        array.push(cod, name, date, hour)
    }

    if (array.length > 0) {

        return array
    }

    return -1

}

function showBox_CheckIn() {

    verificaData();

    var nome = document.getElementById("frName-marcacao").value
    var phone = document.getElementById("frPhone-marcacao").value;
    var servico = getSelectValue(document.getElementById("idServico"))


    if (nome != "" && phone != "" && servico != "") {

        if (validaTime() != -1) {

            if (localStorage.getItem("checkdate") == -1) {


                checkIn()

                document.getElementsByClassName("box-check-in-marcacao")[0].style.display = "block"
                document.getElementsByClassName("box-marcacao-form")[0].style.display = "none"

                if (document.getElementById("error-info").style.display == "block") {

                    document.getElementById("error-info").style.display = "none"

                }

            } else {

                document.getElementsByClassName("box-error-info-marcacao")[0].style.display = "block"
                document.getElementById("error-info").innerHTML = "Deve escolher outra Horario para esta data"
            }


        } else {

            errorEmptyDate()
        }

    } else {

        errorInfo();
    }

}

//dinamicPDF();

function dinamicPDF() {


    var paragrafo = document.createElement('p')

    paragrafo.innerHTML = "text simple for javascrpts tcpdf"

    document.getElementsByClassName("box-pdf")[0].innerHTML = "simple text"

    if (document.getElementsByClassName("box-pdf")[0]) {

        document.getElementsByClassName("box-pdf")[0].appendChild(paragrafo) // box-pdf
    }


}

function check_current_time() {

    if (localStorage.getItem("qtd_time") == 0) {

        var iconTime = document.getElementsByClassName("time_icon-marcacao")[0]
        iconTime.style.color = "red"
        iconTime.getElementsByTagName("Label")[0].innerHTML = "Marcações Esgotadas Para Hoje!"
        document.getElementById("select-time-current").disabled = true
        document.getElementById("number_vagas").innerHTML = "0"

    } else {

        document.getElementById("number_vagas").innerHTML = localStorage.getItem("qtd_time")
    }

}


setInterval(function() {

    verificaVagas();

    var values = JSON.parse(localStorage.getItem("qtd_time"));
    var qtada = values.qtdade;
    var erro = values.error;

    if (qtada != null) {

        document.getElementById("number_vagas").innerHTML = qtada

        if (qtada == 0) {

            document.getElementById("info_vagas").style.color = "red"
            document.getElementById("info_vagas").innerHTML = " ***Atenção, Vagas Esgotadas para Hoje***. Marcações  para os dias seguintes"

            var iconTime = document.getElementsByClassName("time_icon-marcacao")[0]
            iconTime.style.color = "red"
            document.getElementById("txt_time_inf").innerHTML = "Marcações Esgotadas Para Hoje!"
            document.getElementById("select-time-current").disabled = true
            document.getElementById("number_vagas").innerHTML = "0"

        } else {

            document.getElementById("info_vagas").style.color = "#DBA901"
            document.getElementById("info_vagas").innerHTML = "Vagas Disponíveis para Hoje. Apreça-te E Marque Logo Antes que se Esgota"

            var iconTime = document.getElementsByClassName("time_icon-marcacao")[0]
            iconTime.style.color = "#DBA901"
        }

    } else {

        document.getElementById("number_vagas").innerHTML = erro
            //  document.getElementById("info_vagas").innerHTML = " ***Atenção, Vagas Esgotadas para Hoje***. Podes Marcar para outro dia"


    }


}, 500)

function go_to_marcacao_page() {

    location.href = '/barbearia/marcacao/';

}

function verificaVagas() {

    var callFunction = "we_can_go";
    var url = "../php/function.php";

    $.ajax({

        method: "POST",
        crossDomain: true,
        cache: false,
        url: url,
        data: {

            numberTimelPHP: callFunction,
        },

        success: function(data) {

            localStorage.setItem("qtd_time", data)

        }
    })


}

function errorEmptyDate() {

    document.getElementsByClassName("box-marcacao-form")[0].style.display = "block"
    document.getElementsByClassName("box-marcacao-form")[0].style.borderColor = "red"

    document.getElementsByClassName("box-error-info-marcacao")[0].style.display = "block"
    document.getElementById("error-info").innerHTML = "*Data Invalido. Deve Indicar uma Data"

    document.getElementsByClassName("box-date-other")[0].style.display = "block"
    document.getElementById("date-marcacao").style.color = "red"



}

function removErrorInfo() {

    document.getElementsByClassName("box-marcacao-form")[0].style.borderColor = "#DBA901"

    document.getElementsByClassName("box-error-info-marcacao")[0].style.display = "none"
    document.getElementById("error-info").removeAttribute("innerHTML")

    var iconNome = document.getElementsByClassName("name_icon-marcacao")[0]
    iconNome.style.color = "#DBA901"
    iconNome.getElementsByTagName("Label")[0].innerHTML = "Nome"

    var iconPhone = document.getElementsByClassName("phone_icon-marcacao")[0]
    iconPhone.style.color = "#DBA901"
    iconPhone.getElementsByTagName("Label")[0].innerHTML = "Phone"

    var iconService = document.getElementsByClassName("service_icon-marcacao")[0]
    iconService.style.color = "#DBA901"
    iconService.getElementsByTagName("Label")[0].innerHTML = "Serviço"

    var iconTime = document.getElementsByClassName("time_icon-marcacao")[0]
    iconTime.style.color = "#DBA901"
    iconTime.getElementsByTagName("Label")[0].innerHTML = "Horas Disponiveis Hoje"
}

function errorInfo() {


    document.getElementsByClassName("box-marcacao-form")[0].style.display = "block"
    document.getElementsByClassName("box-marcacao-form")[0].style.borderColor = "red"

    document.getElementsByClassName("box-error-info-marcacao")[0].style.display = "block"
    document.getElementById("error-info").innerHTML = "Deve Preencher e Selecionar  Campos Obrigatorio (*)"

    var iconNome = document.getElementsByClassName("name_icon-marcacao")[0]
    iconNome.style.color = "red"
    iconNome.getElementsByTagName("Label")[0].innerHTML = "Nome(*)"

    var iconPhone = document.getElementsByClassName("phone_icon-marcacao")[0]
    iconPhone.style.color = "red"
    iconPhone.getElementsByTagName("Label")[0].innerHTML = "Phone(*)"

    var iconService = document.getElementsByClassName("service_icon-marcacao")[0] //name_icon-marcacao
    iconService.style.color = "red"
    iconService.getElementsByTagName("Label")[0].innerHTML = "Serviço(*)"

    var iconTime = document.getElementsByClassName("time_icon-marcacao")[0]
    iconTime.style.color = "red"
    iconTime.getElementsByTagName("Label")[0].innerHTML = "Horas Disponiveis Hoje(*)"



}

function showBox_info_marcacao_status() {

    document.getElementsByClassName("box-info-marcacao")[0].style.display = "block"
    document.getElementsByClassName("box-check-in-marcacao")[0].style.display = "none"
}

function showBoxMarcacao() {

    removErrorInfo()

    document.getElementsByClassName("box-marcacao-form")[0].style.display = "block"
    document.getElementsByClassName("box-check-in-marcacao")[0].style.display = "none"
}


function removTime() {

    var callFunction = "we_can_go";
    var url = "../php/function.php";
    var time = "";

    if (validaTime() != -1) {

        switch (validaTime()) {

            case 1:
                time = getSelectValue(document.getElementById("select-time-current")) // time today
                break;
            case 2:
                time = getSelectValue(document.getElementById("item-time-marcacao"));
                break;
        }

        $.ajax({

            type: "POST",
            crossDomain: true,
            cache: false,
            url: url,

            data: {

                timeDelPHP: callFunction,
                horaPHP: time
            },

            datatype: "text",

            success: function(data) {

                /*  if (data == 1) {

                     alert("hora Removido" + time)

                 } else {

                     alert("error")
                 } */
            }

        })

    } else {

        alert("invalid time")
    }


}

function checkAll() {

    if (document.getElementById('check-all-times').checked == true) {

        document.getElementById('time-10').checked = true
        document.getElementById('time-10h30').checked = true
        document.getElementById('time-11').checked = true
        document.getElementById('time-11h30').checked = true

        document.getElementById('time-12').checked = true
        document.getElementById('time-14').checked = true
        document.getElementById('time-15').checked = true
        document.getElementById('time-15h40').checked = true

        document.getElementById('time-16h30').checked = true
        document.getElementById('time-17').checked = true
        document.getElementById('time-18').checked = true
        document.getElementById('time-19').checked = true


    } else {

        document.getElementById('time-10').checked = false
        document.getElementById('time-10h30').checked = false
        document.getElementById('time-11').checked = false
        document.getElementById('time-11h30').checked = false
        document.getElementById('time-12').checked = false


        document.getElementById('time-14').checked = false
        document.getElementById('time-15').checked = false
        document.getElementById('time-15h40').checked = false
        document.getElementById('time-16h30').checked = false
        document.getElementById('time-17').checked = false

        document.getElementById('time-18').checked = false
        document.getElementById('time-19').checked = false

    }


}