document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;


    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero){
            ocultaConteudoHeader();
        }else{
            exibeConteudoHeader();
        }
    })

   function exibeConteudoHeader(){
        const header = document.querySelector('.header');
        header.classList.remove('header--is-hidden');
   }

    function ocultaConteudoHeader(){
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}

    for(let i = 0 ; i < buttons.length; i++){
       
        buttons[i].addEventListener('click', function(botao){ 
            const abaAlvo = botao.target.dataset.tabButton; 
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    for(let i = 0 ; i < questions.length ; i++){
        questions[i].addEventListener('click', abreOuFechaFaq);

    }

})

    function abreOuFechaFaq(question){
        const classe = 'faq__questions__item--is-open';
        const realQuestionFaq = question.target.parentNode; 

        realQuestionFaq.classList.toggle(classe);
}

    function removeBotaoAtivo(){
        const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0 ; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

    function escondeTodasAbas(){
        const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0 ; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }

}




/* 
const buttons = document.querySelectorAll('[data-tab-button]');

const botoes = ["populares","em_breve","star_plus"];
    for(let i = 0; i < botoes.length; i++){
        i+1 = --> i = 1;
        i=1 --> i+1 = i = 2;
        i=2 --> i+1 = i = 3;
        i=3 --> parou!;

        botoes[i] = 1,2,3
    }

    */