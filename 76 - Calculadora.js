function criarCalculadora(){

    return{
        btnNum: document.querySelectorAll('.btn-num'),
        btnClear: document.querySelector('.btn-clear'),
        btnDel: document.querySelector('.btn-del'),
        btnEqual: document.querySelector('.btn-eq'),
        display: document.querySelector('.display'),


        ligar(){
            this.iniciaEventos();
        },

        
        showDisplay(valorClicado){
            this.display.value += valorClicado
        },

        clearDisplay(){
            this.display.value = ' ';
        },

        deleteOne(){
            const newDisplay = this.display.value.slice(0, -1);
            this.display.value = newDisplay;
        },

        equalDisplay(){

        },
        
        iniciaEventos(){
            this.btnNum.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const valorClicado = e.target.textContent;
                    this.showDisplay(valorClicado);
                })
            })

            this.btnClear.addEventListener('click', (e) => {
                this.clearDisplay();
            })

            this.btnDel.addEventListener('click', (e) => {
                this.deleteOne();
            })

            this.btnEqual.addEventListener('click', (e) => {
                this.deleteOne();
            })

        }
    }
}

const calculadora = criarCalculadora();
calculadora.ligar();