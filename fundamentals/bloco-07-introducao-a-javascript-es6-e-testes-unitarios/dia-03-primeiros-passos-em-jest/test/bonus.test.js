const searchEmployee = require('../scripts/bonus');

describe('Exercicio Bonus - Função searchEmployee', () => {
    it('Se existe um função chamada searchEmployee', () => {
        expect(typeof searchEmployee).toBe('function');
    });

    it('Se o ID informado não existe no Banco de Dados', () => {
        expect(searchEmployee('4678-3', 'firstName')).toBe('ID não identificada');
    });

    it('Se a Informação informada não existe no Banco de Dados', () => {
        expect(searchEmployee('4678-2', 'Oloko')).toBe('Informação indisponível');
    });
});