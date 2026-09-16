import { produtos, gerarHtmlProdutos, restaurarSelecionados } from './produtos.js';
import { obterMensagensSalvas } from './storage.js';

export const app = document.getElementById('app');

export const rotas = {
    home: '<h1>Início</h1><p>Bem-vindo à aplicação.</p>',
    sobre: '<h1>Sobre</h1><p>Esta é uma Single Page Application.</p>',
    contato: () => `
        <h1>Contato</h1>
        <p>Você já enviou ${obterMensagensSalvas().length} mensagem(ns) anteriormente.</p>
        <form id="form-contato" novalidate>
            <input type="text" name="nome" placeholder="Seu nome">
            <span class="erro" id="erro-nome"></span>
            <input type="email" name="email" placeholder="Seu e-mail">
            <span class="erro" id="erro-email"></span>
            <button type="submit">Enviar</button>
        </form>
        <p id="status-envio"></p>
    `,
    produtos: () => `<h1>Produtos</h1><div id="lista-produtos">${gerarHtmlProdutos(produtos)}</div>`
};

export function renderizarRota() {
    const rotaAtual = window.location.hash.replace('#', '') || 'home';
    const conteudo = rotas[rotaAtual];
    app.innerHTML = typeof conteudo === 'function'
        ? conteudo()
        : (conteudo || '<h1>404</h1><p>Página não encontrada.</p>');

    if (rotaAtual === 'produtos') {
        restaurarSelecionados();
    }
}