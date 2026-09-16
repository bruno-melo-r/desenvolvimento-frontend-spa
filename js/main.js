import { renderizarRota } from './rotas.js';
import { inicializarEventos } from './eventos.js';

window.addEventListener('hashchange', renderizarRota);
window.addEventListener('DOMContentLoaded', renderizarRota);

inicializarEventos();