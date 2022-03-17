// const header = document.querySelector('.cabecalho');
// const secoes = document.querySelectorAll('.secao');


// function fixaCabecalho() {
//     if (window.scrollY > 0) {
//         header.classList.add('cabecalho-fixo');
//     } else {
//         header.classList.remove('cabecalho-fixo');
//     }
// }

// window.addEventListener('scroll', () => {
//     fixaCabecalho();
// });

const secaoInicio = document.querySelector('#inicio');

function deslocaInicio() {
    if (window.scrollY == 0) {
        secaoInicio.classList.add('secao-desloc');
    } else {
        secaoInicio.classList.remove('secao-desloc');
    }
}

window.addEventListener('scroll', () => {
    deslocaInicio();
})