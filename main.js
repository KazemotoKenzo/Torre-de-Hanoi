class Hanoi {
    constructor(n, list = [[],[],[]], posicao = 0, prox = 0, direcao = 0, win = [], contador = 0){
        this.posicao = posicao;
        this.direcao = direcao;
        this.prox = prox;
        this.list = list;
        this.win = win;
        this.contador = contador;
        for(let i = 0; i < n; i++){
            list[0].push(i+1);
            win.push(i+1);
        }
    }

    array(){
        return this.list;
    }

    position(x){
        x = x % 3;
        if(x < 0){
            x += 3;
        }
        return x;
    }

    paridade(){
        this.direcao = this.list[0].length % 2 == 0 ? 1 : -1;
        this.prox += this.direcao;
        this.prox = this.position(this.prox);
    }

    mover(){
        let x = this.posicao;
        let y = this.prox;

        if(this.vazio(x)){
            console.log("Espaço vazio");
        } else if(!this.vazio(y) && this.maior(x,y)){
            console.log("Não pode mover para uma casa menor");
        } else{
            this.list[y].unshift(this.list[x][0]);
            this.list[x].shift();
            this.contador += 1;
            console.log(this.list,"Quantidade de movimentos: ", this.contador);
        
            this.posicao = y;
            this.prox = this.position(this.prox + this.direcao);
        }
    }

    vazio(x){
        return this.list[x].length == 0;
    }

    maior(x,y){
        return this.list[x][0] > this.list[y][0];
    }
    
    vencer(){
        return this.win.length == this.list[2].length;
    }

    jogar() {
        while (!this.vencer()) {
            this.paridade();
            this.mover();
            console.log(this.array());
        }
        console.log("Você venceu!");
    }
}

const hanoi = new Hanoi(3);
console.log(hanoi.array());
hanoi.paridade();
hanoi.jogar();