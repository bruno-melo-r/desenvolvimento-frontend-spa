const CHAVE_MENSAGENS = 'mensagensContato';
const CHAVE_SELECIONADOS = 'produtosSelecionados';

export function obterMensagensSalvas() {
    const dados = localStorage.getItem(CHAVE_MENSAGENS);
    return dados ? JSON.parse(dados) : [];
}

export function salvarMensagem(nome, email) {
    const mensagens = obterMensagensSalvas();
    mensagens.push({ nome, email, data: dayjs().format('DD/MM/YYYY [às] HH:mm') });
    localStorage.setItem(CHAVE_MENSAGENS, JSON.stringify(mensagens));
}

export function obterSelecionados() {
    const dados = localStorage.getItem(CHAVE_SELECIONADOS);
    return dados ? JSON.parse(dados) : [];
}

export function alternarSelecionado(nomeProduto) {
    let selecionados = obterSelecionados();
    if (selecionados.includes(nomeProduto)) {
        selecionados = selecionados.filter(nome => nome !== nomeProduto);
    } else {
        selecionados.push(nomeProduto);
    }
    localStorage.setItem(CHAVE_SELECIONADOS, JSON.stringify(selecionados));
}