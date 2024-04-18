class controleIluminacao {
    static instance;
    observers = []

    room = false;
    kitchen = false;
    quarto = false;
    banheiro = false;
    porao= false;
    garagem= false;

    toggle(convenient){
        if(convenient == 'room'){
            this.room = !this.room
        } else if(convenient == 'kitchen'){
            this.kitchen = !this.kitchen
        } else if(convenient == 'quarto') { 
            this.quarto = !this.quarto;
        } else if(convenient == 'banheiro') {
            this.banheiro = !this.banheiro;
        } else if(convenient == 'porao') { 
            this.porao = !this.porao;
        } else if(convenient == 'garagem') { 
            this.garagem = !this.garagem;
        }

        this.executar()
    }

    getState(convenient){
        if(convenient =='room'){
            return this.room
        } else if(convenient == 'kitchen') {
            return this.kitchen
        } else if(convenient == 'quarto') { 
            return this.quarto;
        }else if(convenient == 'banheiro') { 
            return this.banheiro;
        }else if(convenient == 'porao') { 
            return this.porao;
        }else if(convenient == 'garagem') { 
            return this.garagem;
        }
    }

    inscrever(funcao){
        this.observers.push(funcao)
    }

    executar(){
        console.log(this.observers)
        this.observers.forEach((funcao)=>{
            funcao()
        })
    }

}

controleIluminacao.instance = new controleIluminacao()