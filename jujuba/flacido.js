let veicula ={
    marca: "nissa",
    modelo: "kicks",
    ano:2002,

    ligar: function(){
        console.log("O carro ligou ");

    },
    mostrarInfo: function(){
         console.log("marca ${this.marca}, /nmodelos ${this.mpdelo}")

    }


};
carro.ligar()
carro.mostrarInfo