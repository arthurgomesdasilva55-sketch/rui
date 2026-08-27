/* =========================================
   CONTADOR DE AMIZADE
   ========================================= */

/*
   MUDE ESTA DATA!

   Coloque aqui o dia em que vocês começaram
   a amizade.

   Exemplo:
   15 de março de 2022
*/

const dataAmizade = new Date("2026-08-07T00:00:00");


function atualizarContador() {

    const agora = new Date();

    let anos = agora.getFullYear() - dataAmizade.getFullYear();

    let meses = agora.getMonth() - dataAmizade.getMonth();

    let dias = agora.getDate() - dataAmizade.getDate();


    if (dias < 0) {

        meses--;

        const ultimoMes = new Date(
            agora.getFullYear(),
            agora.getMonth(),
            0
        );

        dias += ultimoMes.getDate();
    }


    if (meses < 0) {
        anos--;
        meses += 12;
    }


    const diferenca = agora - dataAmizade;


    const totalSegundos =
        Math.floor(diferenca / 1000);

    const horas =
        Math.floor(totalSegundos / 3600) % 24;

    const minutos =
        Math.floor(totalSegundos / 60) % 60;

    const segundos =
        totalSegundos % 60;


    document.getElementById("years").textContent = anos;

    document.getElementById("months").textContent = meses;

    document.getElementById("days").textContent = dias;

    document.getElementById("hours").textContent = horas;

    document.getElementById("minutes").textContent = minutos;

    document.getElementById("seconds").textContent = segundos;
}


atualizarContador();

setInterval(atualizarContador, 1000);


/* =========================================
   BOTÃO DE MÚSICA
   ========================================= */

const musica = document.getElementById("musica");

const musicButton = document.getElementById("musicButton");


musicButton.addEventListener("click", () => {

    if (!musica.src) {

        alert(
            "Primeiro coloque o arquivo da música como 'musica.mp3' na pasta do site."
        );

        return;
    }


    if (musica.paused) {

        musica.play();

        musicButton.innerHTML =
            "⏸️ Pausar música";

    } else {

        musica.pause();

        musicButton.innerHTML =
            "🎵 Tocar nossa música";
    }

});