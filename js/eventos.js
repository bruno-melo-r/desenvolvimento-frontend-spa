import { app } from './rotas.js';
import { validarFormulario } from './validacao.js';
import { salvarMensagem, alternarSelecionado, obterMensagensSalvas } from './storage.js';

export function inicializarEventos() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuNav = document.getElementById('menu-nav');

    document.addEventListener('click', function (evento) {
        const link = evento.target.closest('nav a');
        if (link) {
            evento.preventDefault();
            window.location.hash = link.getAttribute('href');
        }
    });

    menuToggle.addEventListener('click', function () {
        menuNav.classList.toggle('aberto');
        const expandido = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !expandido);
    });

    app.addEventListener('submit', function (evento) {
        if (evento.target.id === 'form-contato') {
            evento.preventDefault();
            const dados = new FormData(evento.target);
            const nome = dados.get('nome');
            const email = dados.get('email');
            if (!validarFormulario(nome, email)) return;
            salvarMensagem(nome, email);
            document.getElementById('status-envio').textContent =
                `Obrigado, ${nome}! Sua mensagem foi recebida. (Total: ${obterMensagensSalvas().length})`;
            evento.target.reset();
        }
    });

    app.addEventListener('click', function (evento) {
        const card = evento.target.closest('.card');
        if (card) {
            card.classList.toggle('selecionado');
            alternarSelecionado(card.querySelector('h3').textContent);
            const pressionado = card.getAttribute('aria-pressed') === 'true';
            card.setAttribute('aria-pressed', !pressionado);
        }
    });

    app.addEventListener('input', function (evento) {
        if (evento.target.name === 'email' && evento.target.closest('#form-contato')) {
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (regexEmail.test(evento.target.value)) {
                evento.target.classList.remove('campo-invalido');
                evento.target.setAttribute('aria-invalid', 'false');
               document.getElementById('erro-email').textContent = '';
            }
        }
    });
}