document.addEventListener('DOMContentLoaded', function() {
    const botaoMensagem = document.getElementById('mensagemBtn');
    const areaMensagem = document.getElementById('mensagem');

    botaoMensagem.addEventListener('click', function() {
        areaMensagem.textContent = "Seja bem-vindo(a) ao meu portfólio! Espero que goste.";
        areaMensagem.style.display = 'block'; // Mostra a mensagem
    });
});
