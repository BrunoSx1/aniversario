AOS.init();

const dataDoEvento = new Date("June 28, 2023 13:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMS = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento =  Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMS);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMS ) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    
    if (distanciaAteOEvento < 0 ) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }

}, 1000)


const form = document.querySelector(".form__details__form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const idade = document.querySelector("#idade").value;
    let telefone = document.querySelector("#telefone").value.trim();

    const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;

    if (nome === "" || email === "" || idade === "" || telefone === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (!/^\d+$/.test(telefone.replace(/\D/g, ""))) {
        alert("Por favor, preencha somente números no campo de telefone.");
        return;
    }

    if (!regexTelefone.test(telefone)) {
        alert("Por favor, preencha o campo de telefone com o formato correto: (DD) XXXXX-XXXX");
        return;
    }

    alert("Seu cadastro foi enviado com sucesso, logo entraremos em contato com você por Email/Telefone.");

    form.reset();
});


