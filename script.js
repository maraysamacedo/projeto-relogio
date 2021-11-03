let digitalElement = document.querySelector('.digital'); // . = class (utilizamos ponto por nos referir a uma class denominada "digital")
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() { //relogio
    let now = new Date(); //"new Date" classe que utilizamos para manipulação de data, ou seja, possui a data completa//
    let hour = now.getHours(); //função que pega a hora//
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90; // 360 (total de graus) - 60 (total de segundos em 1 min) * second (segundo que vc quer) - 90 (para inciar do ponteiro de cima)
    let mDeg = ((360 / 60) * minute) - 90; // 360 (total de graus) - 60 (total de minutos em 1 hora) * minute (minuto que vc quer) - 90 (para inciar do ponteiro de cima)
    let hDeg = ((360 / 12) * hour) +((30 / 60) * minute) - 90; // 360 (total de graus) - 60 (total de minutos em 1 hora) * minute (minuto que vc quer) - 90 (para inciar do ponteiro de cima)

    sElement.style.transform =  `rotate(${sDeg}deg)`;  //buscando o css do ponteiro com template string da variável para saber o segundo "sDeg"
    mElement.style.transform =  `rotate(${mDeg}deg)`; //buscando o css do ponteiro com template string da variável para saber o minuto "mDeg"
    hElement.style.transform = `rotate(${hDeg}deg)`; //buscando o css do ponteiro com template string da variável para saber a hora "hDeg"

}

function fixZero(time) { //o relogio analógico apresenta correspondente as casas decimais, ou seja, não apresenta conforme "00:00:00". 
    if(time < 10) { //se o horario for menor que 10 (tiver somente uma casa decimal, ex: 10:12:1)
        return '0'+time;  // retorno 0 + a casa decimal que o relogio irá acrescentar conforme hora, ex: 10:12:01
    } else { 
        return time; // se for maior, irá retornar somente o horário, ex: 10:12:14
    }
}

setInterval(updateClock, 1000); //1000 milessegundos = 1 segundo (relogio ira rodar de segundo em segundo)//
updateClock();