const Cilindro = require('../model/Cilindro')
const cilindro = require('../model/Cilindro')

describe('teste unitario da classe cilindro', ()=>{
    test('teste do calcular area', ()=>{
        const raio = 3, altura = 3
        const cilindro = new Cilindro(raio,altura)
        const resposta = 28.274

        expect(cilindro.calcularArea()).toBeCloseTo(resposta,3)
    })
    test('teste calcular area2', ()=>{
        const raio = 3, altura = 3
        const cilindro = new Cilindro(raio,altura)
        const resposta = 12.566 //resposta correta
        expect(cilindro.calcularArea()).toBeCloseTo(resposta,3)
    })
    test('teste calcular volume', ()=>{
        const raio = 3, altura = 3
        const cilindro = new Cilindro(raio,altura)
        const resposta = 84.823
        expect(cilindro.calcularVolume()).toBeCloseTo(resposta,3)
    })
})