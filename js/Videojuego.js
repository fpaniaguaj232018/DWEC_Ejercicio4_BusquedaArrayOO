class Videojuego {
    constructor(titulo, genero, numJugadores, edadMinima){
        this.titulo = titulo;
        this.genero = genero;
        this.numJugadores = numJugadores;
        this.edadMinima = edadMinima;
    }

    mostrar(){
        console.log(this.titulo);
        console.log(this.genero);
        console.log(this.numJugadores);
        console.log(this.edadMinima);
    }
}