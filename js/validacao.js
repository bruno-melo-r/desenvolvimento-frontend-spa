export function validarFormulario(nome, email) {
    let valido = true;

    document.getElementById('erro-nome').textContent = '';
    document.getElementById('erro-email').textContent = '';
    document.querySelector('#form-contato input[name="nome"]').classList.remove('campo-invalido');
    document.querySelector('#form-contato input[name="email"]').classList.remove('campo-invalido');

    if (nome.trim() === '') {
        document.getElementById('erro-nome').textContent = 'O nome não pode ficar vazio.';
        document.querySelector('#form-contato input[name="nome"]').classList.add('campo-invalido');
        valido = false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        document.getElementById('erro-email').textContent = 'Informe um e-mail em formato válido.';
        document.querySelector('#form-contato input[name="email"]').classList.add('campo-invalido');
        valido = false;
    }

    return valido;
}