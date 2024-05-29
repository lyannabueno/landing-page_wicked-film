document.querySelectorAll('.main-characters img').forEach(img => {

    img.addEventListener('click', function() {
        this.style.animation = 'bounce 0.6s cubic-bezier(0.28, 0.84, 0.42, 1)';

        this.addEventListener('animationend', function() {
            this.style.animation = '';
        }, { once: true });
    });

});

document.getElementById('first-animation').addEventListener('click', function() {
    this.style.animation = 'leftrotate 1s infinite linear';
    
    this.addEventListener('animationend', function() {
        this.style.animation = '';
    }, { once: true });
});

document.getElementById('separate-animation').addEventListener('click', function() {
    this.style.animation = 'pulse 0.5s infinite alternate';
    
    this.addEventListener('animationend', function() {
        this.style.animation = '';
    }, { once: true });
});

document.getElementById('second-animation').addEventListener('click', function() {
    this.style.animation = 'rightrotate 1s infinite linear';
    
    this.addEventListener('animationend', function() {
        this.style.animation = '';
    }, { once: true });
});

const dataDoEvento = new Date("Nov 24, 2024 00:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual; // tempo em milessegundos 

    const diasEmMs  = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteEvento / (diasEmMs));
    const horasAteEvento = Math.floor((distanciaAteEvento % (diasEmMs)) / (horaEmMs));
    const minutosAteEvento = Math.floor((distanciaAteEvento % (horaEmMs)) / (minutosEmMs));
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutosEmMs) / 1000);

    console.log(diasAteEvento);
    console.log(horasAteEvento);
    console.log(minutosAteEvento);
    console.log(segundosAteEvento);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if (distanciaAteEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('sobre-filme').innerHTML = 'Evento expirado!';
    }
}, 1000);