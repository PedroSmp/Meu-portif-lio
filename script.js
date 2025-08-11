// Scroll suave para as seções ao clicar nos botões do menu
function scrollToSection(btnId, sectionId) {
    const btn = document.getElementById(btnId);
    const section = document.getElementById(sectionId);
    if (btn && section) {
        btn.addEventListener('click', function() {
            section.scrollIntoView({ behavior: 'smooth' });
        });
    }
}


// Botão para voltar ao topo
const btnTopo = document.getElementById('btn-topo');
if (btnTopo) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            btnTopo.style.display = 'block';
        } else {
            btnTopo.style.display = 'none';
        }
    });
    btnTopo.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Modo escuro (padrão e landing)
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggleBtn = document.getElementById('modo');
    const modoLanding = document.querySelector('.modo-escuro-');

    // Função para aplicar o tema salvo
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }
    applySavedTheme();

    // Alterna modo escuro pelo botão padrão
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    }
    // Alterna modo escuro pelo botão landing
    if (modoLanding) {
        modoLanding.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    }
});