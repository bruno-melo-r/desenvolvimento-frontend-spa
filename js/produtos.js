import { obterSelecionados } from './storage.js';

export const produtos = [
    { id: 1, nome: 'Teclado Mecânico', preco: 250 },
    { id: 2, nome: 'Mouse Gamer', preco: 120 },
    { id: 3, nome: 'Monitor 24"', preco: 800 }
];

export function gerarHtmlProdutos(lista) {
    return lista.map(produto => `
        <div class="card" role="button" tabindex="0" aria-pressed="false" data-id="${produto.id}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
        </div>
    `).join('');
}

export function restaurarSelecionados() {
    const selecionados = obterSelecionados();
    document.querySelectorAll('#lista-produtos .card').forEach(card => {
        const nomeProduto = card.querySelector('h3').textContent;
        if (selecionados.includes(nomeProduto)) {
            card.classList.add('selecionado');
            card.setAttribute('aria-pressed', 'true');
        }
    });
}