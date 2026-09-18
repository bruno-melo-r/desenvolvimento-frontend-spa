export function validarFormulario(nome, email) {
    let valido = true;

    const campoNome = document.querySelector('#form-contato input[name="nome"]');
    const campoEmail = document.querySelector('#form-contato input[name="email"]');

    document.getElementById('erro-nome').textContent = '';
    document.getElementById('erro-email').textContent = '';
    campoNome.classList.remove('campo-invalido');
    campoNome.setAttribute('aria-invalid', 'false');
    campoEmail.classList.remove('campo-invalido');
    campoEmail.setAttribute('aria-invalid', 'false');

    if (nome.trim() === '') {
        document.getElementById('erro-nome').textContent = 'O nome não pode ficar vazio.';
        campoNome.classList.add('campo-invalido');
        campoNome.setAttribute('aria-invalid', 'true');
        valido = false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        document.getElementById('erro-email').textContent = 'Informe um e-mail em formato válido.';
        campoEmail.classList.add('campo-invalido');
        campoEmail.setAttribute('aria-invalid', 'true');
        valido = false;
    }

    return valido;
}