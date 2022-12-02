// Fecha en la que terminará el temporizador
var countDownDate = new Date("Feb 22, 2023 23:59:59").getTime();

// Cada 1 segundo, se actualiza el tiempo
var x = setInterval(function() {

    let web_lang = sessionStorage.getItem('app-lang');

    // Obtenemos la fecha de hoy
    var now = new Date().getTime();

    // Se calcula la diferencia entre la fecha límmite y el ahora
    var distance = countDownDate - now;

    // Calculador de tiempo para: días, horas, minutos y segundos
    var months = Math.floor(distance / (1000*60*60*24*30.5));
    var month_days = Math.floor(months / (1000 * 60 * 60 * 24));
    var days = Math.floor(month_days / (1000*60*60*24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Imprimimos los resultados en sus divs correspondientes
    // Si el dato es igual a 1, el texto se mostrará en singular EJ: 1 Segundo
    if(web_lang == "es"){
        document.getElementById('idioma_es').classList.add('selected-lang');
        document.getElementById('idioma_en').classList.remove('selected-lang');
        if(months !== 1){
            document.getElementById("meses_restantes").innerHTML = months + " meses";
        } else {
            document.getElementById("meses_restantes").innerHTML = months + " mes";
        }
        if(days !== 1){
            document.getElementById("dias_restantes").innerHTML = days + " días";
        } else {
            document.getElementById("dias_restantes").innerHTML = days + " día";
        }
        if(hours !== 1){
            document.getElementById("horas_restantes").innerHTML =  hours + " horas";
        } else {
            document.getElementById("horas_restantes").innerHTML =  hours  + " hora";
        }
        if(minutes !== 1){
            document.getElementById("minutos_restantes").innerHTML = minutes + " minutos";
        } else {
            document.getElementById("minutos_restantes").innerHTML = minutes + " minuto";
        }
        if(seconds !== 1){
            document.getElementById("segundos_restantes").innerHTML = seconds + " segundos";
        } else {
            document.getElementById("segundos_restantes").innerHTML = seconds + " segundo";
        }
        if (distance <= 0) {
            clearInterval(x);
            document.getElementById("meses_restantes").classList.add('display-none');
            document.getElementById("dias_restantes").classList.add('display-none');
            document.getElementById("horas_restantes").classList.add('display-none');
            document.getElementById("minutos_restantes").classList.add('display-none');
            document.getElementById("segundos_restantes").classList.add('display-none');
            document.getElementById("timer_finished").classList.remove('display-none');
            document.getElementById("timer_finished").innerHTML = "¡Servidor Abierto!";
        }
    } else {
        document.getElementById('idioma_es').classList.remove('selected-lang');
        document.getElementById('idioma_en').classList.add('selected-lang');
        if(months !== 1){
            document.getElementById("meses_restantes").innerHTML = months + " months";
        } else {
            document.getElementById("meses_restantes").innerHTML = months + " month";
        }
        if(days !== 1){
            document.getElementById("dias_restantes").innerHTML = days + " days";
        } else {
            document.getElementById("dias_restantes").innerHTML = days + " day";
        }
        if(hours !== 1){
            document.getElementById("horas_restantes").innerHTML =  hours + " hours";
        } else {
            document.getElementById("horas_restantes").innerHTML =  hours  + " hour";
        }
        if(minutes !== 1){
            document.getElementById("minutos_restantes").innerHTML = minutes + " minutes";
        } else {
            document.getElementById("minutos_restantes").innerHTML = minutes + " minute";
        }
        if(seconds !== 1){
            document.getElementById("segundos_restantes").innerHTML = seconds + " seconds";
        } else {
            document.getElementById("segundos_restantes").innerHTML = seconds + " second";
        }
        if (distance <= 0) {
            clearInterval(x);
            document.getElementById("meses_restantes").classList.add('display-none');
            document.getElementById("dias_restantes").classList.add('display-none');
            document.getElementById("horas_restantes").classList.add('display-none');
            document.getElementById("minutos_restantes").classList.add('display-none');
            document.getElementById("segundos_restantes").classList.add('display-none');
            document.getElementById("timer_finished").classList.remove('display-none');
            document.getElementById("timer_finished").innerHTML = "¡Server On!";
        }
    }

    // Si termina la cuenta, mostramos el siguiente texto
    if (distance <= 0) {
        clearInterval(x);
        
    }
}, 1000);