import { obterSelecionados } from './storage.js';

export const produtos = [
    { nome: 'Teclado Mecânico', preco: 250 },
    { nome: 'Mouse Gamer', preco: 120 },
    { nome: 'Monitor 24"', preco: 800 }
];

export function gerarHtmlProdutos(lista) {
    return lista.map(produto => `
        <div class="card">
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
        }
    });
}