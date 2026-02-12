class Cilindro{
    constructor(raio,altura){
        this.raio = raio
        this.altura = altura
    }

    calcularArea(){
        // Area da base =  π . r²
        let area = 0.0
        area = Math.PI * this.raio * this.raio
        return area
    }

    calcularVolume(){
        // Area da base =  π . r²
        // Volume = Ab . h
        let volume = 0.0
        volume = this.calcularArea() * this.altura
        return volume
    }
}

module.exports = Cilindro