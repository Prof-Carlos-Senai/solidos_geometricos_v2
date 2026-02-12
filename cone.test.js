const Cone = require('../model/Cone')

describe('Teste unitário da classe cilindro', ()=>{
    test('teste do calcular área', ()=>{
        const raio = 2, altura = 2
        const cone = new Cone(raio,altura)
        const resposta = 12.566

        expect(cone.calcularArea()).toBeCloseTo(resposta,3)
    })
    test('teste do calcular volume', ()=>{
        const raio = 2, altura = 2
        const cone = new Cone(raio,altura)
        const resposta = 8.378
        expect(cone.calcularVolume()).toBeCloseTo(resposta,3)
    })
})