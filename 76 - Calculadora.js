function criarCalculadora(){

    return{
        btnNum: document.querySelectorAll('.btn-num'),
        display: document.querySelector('.display'),


        ligar(){
            this.iniciaEventos();
        },

        
        showDisplay(valorClicado){
            this.display.value += valorClicado
        },
        
        iniciaEventos(){
            this.btnNum.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const valorClicado = e.target.textContent;
                    this.showDisplay(valorClicado);
                })
            })
        }
    }
}

const calculadora = criarCalculadora();
calculadora.ligar();