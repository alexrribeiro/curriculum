const secaoInicio = document.querySelector('#inicio');

function deslocaInicio() {
    if (window.scrollY == 0) {
        secaoInicio.classList.add('secao-desloc');
    } else {
        secaoInicio.classList.remove('secao-desloc');
    }
}

const botaoTopo = document.querySelector('.botao-topo');

function voltarParaOTopo() {
    if (window.scrollY >= 560) {
        botaoTopo.classList.add('show');
    }
    else {
        botaoTopo.classList.remove('show');
    }
}

const sections = document.querySelectorAll('main section[id]');

function ativarMenuSecaoAtual() {
    const checkpoint = window.scrollY + (window.innerHeight / 8) * 4;
    
    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        // if (checkpointStart && checkpointEnd) {
        //     document
        //         .querySelector('nav ul li a[href*=' + sectionId + ']')
        //         .classList.add('active');
        // } else {
        //     document
        //         .querySelector('nav ul li a[href*=' + sectionId + ']')
        //         .classList.remove('active');
        // }
    }
}

window.addEventListener('scroll', () => {
    deslocaInicio();
    voltarParaOTopo();
    ativarMenuSecaoAtual();
})