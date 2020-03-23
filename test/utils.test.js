const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });

        test('inicio nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio( -5, 20))
                .toBe(-1);
        });

        test('fim menor que inicio', () => {
            expect(gerarNumeroAleatorio( 10, 5))
                .toBe(-1);
        });

        test('número entre', () => {
            let num = gerarNumeroAleatorio( 10,13 )
            expect( num ).toBeGreaterThanOrEqual(10)
            expect( num ).toBeLessThanOrEqual(13)
        });
    });



    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });

        test('cumprimento errado', () => {
            expect(acharCaracter( 10, 'abcde', 'c'))
                .toBe('comprimento fornecido diferente do comprimento real');
        });

        test('achar caracter na palavra', () => {
            expect(acharCaracter( 7, 'coração', 'ç'))
                .toBe(4);
        });

        test('não achar caracter na palavra', () => {
            expect(acharCaracter( 7, 'coração', 'd'))
                .toBe('o caracter não está presente na cadeia');
        });
    });
});