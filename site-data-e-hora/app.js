function timeDate() {
    var date = new Date();

    var day = document.getElementById('day');
    var hora = document.getElementById('hora');
    var minuto = document.getElementById('minuto');
    var segundos = document.getElementById('segundos');
    switch (date.getDay()) {
        case 0:
            day.innerHTML = `Hoje é Domingo`;
            hora.innerHTML = `<p><span>${date.getHours()}</span></p> <span id="textHours">Horas</span>`;
            minuto.innerHTML = `<p><span>${date.getMinutes()}</span></p> <span id="textMinutes">Minutos</span>`;
            segundos.innerHTML = `<p><span>${date.getSeconds()}</span></p> <span id="textSeconds">Segundos</span>`;
            break;
        case 1:
            day.innerHTML = `Hoje é Segunda`;
            hora.innerHTML = `<p><span>${date.getHours()}</span></p> <span id="textHours">Horas</span>`;
            minuto.innerHTML = `<p><span>${date.getMinutes()}</span></p> <span id="textMinutes">Minutos</span>`;
            segundos.innerHTML = `<p><span>${date.getSeconds()}</span></p> <span id="textSeconds">Segundos</span>`;
            break;
        case 2:
            day.innerHTML = `Hoje é Terça`;
            hora.innerHTML = `<p><span>${date.getHours()}</span></p> <span id="textHours">Horas</span>`;
            minuto.innerHTML = `<p><span>${date.getMinutes()}</span></p> <span id="textMinutes">Minutos</span>`;
            segundos.innerHTML = `<p><span>${date.getSeconds()}</span></p> <span id="textSeconds">Segundos</span>`;
            break;
        case 3:
            day.innerHTML = `Hoje é Quarta`;
            hora.innerHTML = `<p><span>${date.getHours()}</span></p> <span id="textHours">Horas</span>`;
            minuto.innerHTML = `<p><span>${date.getMinutes()}</span></p> <span id="textMinutes">Minutos</span>`;
            segundos.innerHTML = `<p><span>${date.getSeconds()}</span></p> <span id="textSeconds">Segundos</span>`;
            break;
        case 4:
            day.innerHTML = `Hoje é Quinta`;
            hora.innerHTML = `<p><span>${date.getHours()}</span></p> <span id="textHours">Horas</span>`;
            minuto.innerHTML = `<p><span>${date.getMinutes()}</span></p> <span id="textMinutes">Minutos</span>`;
            segundos.innerHTML = `<p><span>${date.getSeconds()}</span></p> <span id="textSeconds">Segundos</span>`;
            break;
        case 5:
            day.innerHTML = `Hoje é Sexta`;
            hora.innerHTML = `<p><span>${date.getHours()}</span></p> <span id="textHours">Horas</span>`;
            minuto.innerHTML = `<p><span>${date.getMinutes()}</span></p> <span id="textMinutes">Minutos</span>`;
            segundos.innerHTML = `<p><span>${date.getSeconds()}</span></p> <span id="textSeconds">Segundos</span>`;
            break;
        case 6:
            day.innerHTML = `Hoje é Sábado`;
            hora.innerHTML = `<p><span>${date.getHours()}</span></p> <span id="textHours">Horas</span>`;
            minuto.innerHTML = `<p><span>${date.getMinutes()}</span></p> <span id="textMinutes">Minutos</span>`;
            segundos.innerHTML = `<p><span>${date.getSeconds()}</span></p> <span id="textSeconds">Segundos</span>`;
            break;
    }
    setInterval(timeDate, 1000);
}
