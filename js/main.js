// ==============================================
// Branding Summit Festival 2025
// JavaScript Principal
// ==============================================

// ==============================================
// 1. DADOS DO EVENTO
// ==============================================

const eventData = {
    speakers: [
        { name: 'Marcos Hiller', title: 'Organizador e Idealizador', img: 'img/marcos-hiller-300x300.jpg' },
        { name: 'Guillermo Brotons', title: 'Creative Director, Decimal', img: 'img/guillermo-brotons-300x300.jpg' },
        { name: 'Fernando Gavronski', title: 'Visual Designer, HOUSE AD', img: 'img/fernando-gavronski-300x300.jpg' },
        { name: 'Cecília Rapassi', title: 'Fundadora, Gouvêa Fashion', img: 'img/cecilia-rapassi-300x300.jpg' },
        { name: 'Wendel Albuquerque', title: 'Fundador, Repente', img: 'img/wendel-teixeira-300x300.jpg' },
        { name: 'Rosângela Martins', title: 'Gerente de Marketing', img: 'img/rosangela-martins-300x300.jpg' },
        { name: 'Alexandre Salvador', title: 'Coordenador, ESPM', img: 'img/alexandre-salvador-300x300.jpg' },
        { name: 'Rafael Rez', title: 'CMO, Web Estratégica', img: 'img/rafael-rez-300x300.jpg' },
        { name: 'Bruna Rocha', title: 'Designer, Branda Design', img: 'img/bruna-rocha-300x300.jpg' },
        { name: 'João Paulo Coelho', title: 'CEO, EZCUZÊ', img: 'img/joao-paulo-coelho-300x300.jpg' },
        { name: 'Haley Allen', title: 'Producer, Champions Design', img: 'img/haley-allen-300x300.jpg' },
        { name: 'Gabriel Lopes', title: 'CEO, Moonshot', img: 'img/gabriel-lopes-300x300.jpg' },
        { name: 'Renan Silvestre', title: 'Fundador, Deep Metrics', img: 'img/renan-silvestre-300x300.jpg' },
        { name: 'Silvia Beraldo', title: 'Especialista em Presença', img: 'img/silvia-beraldo-300x300.jpg' },
        { name: 'Fael Ferreira Borges', title: 'Estrategista de Marcas', img: 'img/fael-ferreira-300x300.jpg' },
        { name: 'Guilherme Vieira', title: 'Diretor de Criação, WINSTON', img: 'img/gui-vieira-300x300.jpg' },
        { name: 'Ligia Figueiredo', title: 'COO, Vero Brodo', img: 'img/ligia-figueiredo-300x300.jpg' },
        { name: 'Carmen Leonel', title: 'CEO, TREIDEH', img: 'img/carmen-leonel-300x300.jpg' },
        { name: 'André Luis Corrêa', title: 'Fundador, Toomorrow', img: 'img/andre-luis-300x300.jpg' },
        { name: 'Mauricio Brandt', title: 'Founder, FUTURE NATIVES', img: 'img/mauricio-brandt-300x300.jpg' },
    ],
    
    schedule: {
        segunda: {
            title: 'SEGUNDA - 20/10',
            talks: [
                { 
                    time: '19h', 
                    title: 'Boas vindas e abertura do evento com o case do novo approach de marca da Trevisan Escola de Negócios', 
                    speaker: 'Marcos Hiller', 
                    img: 'img/marcos-hiller-300x300.jpg' 
                }
            ]
        },
        terca: {
            title: 'TERÇA - 21/10',
            talks: [
                { time: '9h', title: 'Creating branded digital experiences: elevating brand presence online through interactive design and technology.', speaker: 'Guillermo Brotons', img: 'img/guillermo-brotons-300x300.jpg' },
                { time: '9h40', title: 'Marcas clássicas, territórios desconhecidos: a Premier League na Web3.', speaker: 'Fernando Gavronski', img: 'img/fernando-gavronski-300x300.jpg' },
                { time: '10h20', title: '"Marca ou Mercadoria: a moda em tempos de desintermediação"', speaker: 'Cecília Rapassi', img: 'img/cecilia-rapassi-300x300.jpg' },
                { time: '16h', title: 'Branding como gerador de valor além das grandes marcas', speaker: 'Wendel Albuquerque', img: 'img/wendel-teixeira-300x300.jpg' },
                { time: '16h40', title: 'Conquistar Corações e Mentes', speaker: 'Rosângela Martins', img: 'img/rosangela-martins-300x300.jpg' },
                { time: '17h20', title: 'Gestão de crise de imagem de marca num mundo com excesso de dados', speaker: 'Alexandre Salvador', img: 'img/alexandre-salvador-300x300.jpg' }
            ]
        },
        quarta: {
            title: 'QUARTA - 22/10',
            talks: [
                { time: '9h', title: 'Grande conteúdo constrói grandes marcas.', speaker: 'Rafael Rez', img: 'img/rafael-rez-300x300.jpg' },
                { time: '9h40', title: 'Design que orienta: escuta como ponto de partida.', speaker: 'Bruna Rocha', img: 'img/bruna-rocha-300x300.jpg' },
                { time: '10h20', title: 'Branding fora do script: como construir marcas fora do script que todo mundo faz.', speaker: 'João Paulo Coelho', img: 'img/joao-paulo-coelho-300x300.jpg' },
                { time: '16h', title: 'Recipes for Growth: How One Project Fed the Neighborhood - and A New Pipeline of Work', speaker: 'Haley Allen', img: 'img/haley-allen-300x300.jpg' },
                { time: '16h40', title: 'Navegando a Era da Complexidade: Design Emergente e Conexões Reais', speaker: 'Gabriel Lopes', img: 'img/gabriel-lopes-300x300.jpg' },
                { time: '17h20', title: 'Como medir resultados em Branding', speaker: 'Renan Silvestre', img: 'img/renan-silvestre-300x300.jpg' }
            ]
        },
        quinta: {
            title: 'QUINTA - 23/10',
            talks: [
                { time: '9h', title: 'Código GPS: Como a sua Presença Constrói o Futuro da sua Carreira', speaker: 'Silvia Beraldo', img: 'img/silvia-beraldo-300x300.jpg' },
                { time: '9h40', title: 'Brand refresh: como e quando atualizar uma marca', speaker: 'Fael Ferreira Borges', img: 'img/fael-ferreira-300x300.jpg' },
                { time: '10h20', title: 'Design & AI: uma parceria indissociável?', speaker: 'Guilherme Vieira', img: 'img/gui-vieira-300x300.jpg' },
                { time: '16h', title: 'Marcas com propósito em territórios inexplorados: não existe receita, mas existem caminhos', speaker: 'Ligia Figueiredo', img: 'img/ligia-figueiredo-300x300.jpg' },
                { time: '16h40', title: 'Quem é você na fila do pão do branding?', speaker: 'Carmen Leonel', img: 'img/carmen-leonel-300x300.jpg' },
                { time: '17h20', title: 'Como transformar negócios tradicionais em "Marcas do Amanhã"', speaker: 'André Luis Corrêa', img: 'img/andre-luis-300x300.jpg' }
            ]
        },
        sexta: {
            title: 'SEXTA - 24/10',
            talks: [
                { time: '9h', title: 'Marcas do futuro, engajamento e a busca por uma nova persuasão publicitária', speaker: 'Mauricio Brandt', img: 'img/mauricio-brandt-300x300.jpg' },
                { time: '10h', title: 'BRANDING STAND UP COMEDY', speaker: 'Um papo sobre erros, fracassos, falhas e constrangimentos do universo do branding', img: 'img/placeholder-bs.jpg' },
                { time: '11h', title: 'Encerramento', speaker: 'Marcos Hiller', img: 'img/marcos-hiller-300x300.jpg' }
            ]
        }
    },
    
    faq: [
        {
            question: 'O evento é online ou presencial?',
            answer: 'O Branding Summit Festival 2025 é 100% online e ao vivo. Você pode assistir de qualquer lugar do mundo.'
        },
        {
            question: 'Como vou receber o acesso para assistir?',
            answer: 'No dia do evento, você receberá por e-mail um link exclusivo para acessar a nossa sala de transmissão. Simples e rápido.'
        },
        {
            question: 'As palestras ficam gravadas?',
            answer: 'Depende do ingresso que você escolher! O ingresso "Festival Ao Vivo" dá direito a assistir somente às transmissões em tempo real. Já o ingresso "Festival Ao Vivo + Gravações" garante acesso por 1 ano a todas as palestras editadas, para você rever quando e quantas vezes quiser.'
        },
        {
            question: 'E se eu não puder assistir a uma palestra ao vivo?',
            answer: 'Para não perder nenhum conteúdo, recomendamos o ingresso "Festival Ao Vivo + Gravações". Com ele, mesmo que você perca alguma palestra ao vivo, poderá assisti-la depois com toda a tranquilidade.'
        },
        {
            question: 'O pagamento é seguro?',
            answer: 'Sim! Todos os pagamentos são processados pela Sympla, a maior e mais segura plataforma de eventos do Brasil.'
        },
        {
            question: 'Receberei certificado?',
            answer: 'Sim! Todos os participantes que acompanharem o evento receberão um certificado digital de participação ao final da semana.'
        }
    ]
};

// ==============================================
// 2. ALPINE.JS DATA
// ==============================================

document.addEventListener('alpine:init', () => {
    Alpine.data('pageData', () => ({
        mobileMenuOpen: false,
        openFaq: null,
        speakers: eventData.speakers,
        schedule: eventData.schedule,
        faq: eventData.faq
    }));
});

// ==============================================
// 3. RENDERIZAÇÃO DINÂMICA
// ==============================================

function renderSpeakers() {
    const container = document.getElementById('speakers-grid');
    if (!container) return;
    
    const parent = container.parentElement;
    container.remove();
    
    eventData.speakers.forEach(speaker => {
        const speakerDiv = document.createElement('div');
        speakerDiv.className = 'group text-center speaker-card';
        speakerDiv.innerHTML = `
            <div class="relative aspect-square rounded-full overflow-hidden border-2 border-transparent group-hover:border-brand-green transition-all duration-300">
                <img src="${speaker.img}" 
                     alt="${speaker.name}" 
                     class="w-full h-full object-cover" 
                     loading="lazy">
                <div class="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500 speaker-overlay"></div>
            </div>
            <h3 class="mt-4 font-bold text-lg">${speaker.name}</h3>
            <p class="text-sm text-gray-400">${speaker.title}</p>
        `;
        parent.appendChild(speakerDiv);
    });
}

function renderSchedule() {
    const container = document.getElementById('schedule-container');
    if (!container) return;
    
    Object.values(eventData.schedule).forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.innerHTML = `
            <h4 class="text-2xl font-bold brand-green border-b-2 border-brand-green/30 pb-2 mb-6">${day.title}</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${day.talks.map(talk => `
                    <div class="glass-card rounded-2xl p-6 h-full flex flex-col">
                        <p class="font-bold text-lg">${talk.time}</p>
                        <p class="text-white mt-2 flex-grow">${talk.title}</p>
                        <div class="flex items-center mt-4 pt-4 border-t border-white/10">
                            <img src="${talk.img}" alt="${talk.speaker}" class="w-16 h-16 rounded-full mr-4" loading="lazy">
                            <p class="text-gray-400 text-sm">${talk.speaker}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(dayDiv);
    });
}

function renderFAQ() {
    const container = document.getElementById('faq-container');
    if (!container) return;
    
    eventData.faq.forEach((item, index) => {
        const faqDiv = document.createElement('div');
        faqDiv.className = 'glass-card rounded-2xl';
        faqDiv.innerHTML = `
            <button @click="openFaq = openFaq === ${index + 1} ? null : ${index + 1}" 
                    class="w-full flex justify-between items-center p-6 text-left">
                <span class="text-xl font-medium">${item.question}</span>
                <span class="text-2xl brand-green transform transition-transform" 
                      :class="{'rotate-45': openFaq === ${index + 1}}">+</span>
            </button>
            <div x-show="openFaq === ${index + 1}" 
                 x-collapse.duration.500ms 
                 class="px-6 pb-6 text-gray-300">
                <p>${item.answer}</p>
            </div>
        `;
        container.appendChild(faqDiv);
    });
}

// ==============================================
// 4. INICIALIZAÇÃO
// ==============================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });
    
    // Renderizar conteúdo dinâmico
    renderSpeakers();
    renderSchedule();
    renderFAQ();
    
    // Lazy loading para imagens
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Smooth scroll para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Performance: Debounce para scroll
    let scrollTimer;
    window.addEventListener('scroll', () => {
        if (scrollTimer) {
            window.cancelAnimationFrame(scrollTimer);
        }
        scrollTimer = window.requestAnimationFrame(() => {
            // Ações de scroll aqui se necessário
        });
    });
});

// ==============================================
// 5. UTILIDADES
// ==============================================

// Função para formatar datas
function formatDate(date) {
    const options = { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    };
    return new Date(date).toLocaleDateString('pt-BR', options);
}

// Função para verificar se está em dispositivo móvel
function isMobile() {
    return window.innerWidth < 768;
}

// Função para verificar suporte a WebP
function supportsWebP() {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('image/webp') === 0;
}

// Console message
console.log('%cBranding Summit Festival 2025', 'color: #39ff14; font-size: 20px; font-weight: bold;');
console.log('%cO Movimento começa aqui! 🚀', 'color: #9333ea; font-size: 14px;');