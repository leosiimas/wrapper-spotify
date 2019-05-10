/* eslint-disable no-undef */
// Describe serve para descrever os testes de uma certa funcao, metodo, arquivo
// e separar os metodos

// Context seprar os casos que vamos ter


// eslint-disable-next-line func-names
describe('Main', () => {
  describe('Method A', () => {
    context('Case 1', () => {
      it('should happen blablabla', () => {
        // Espera que aconteca
        // Entra de dados / metodo sum(2,2)
        // Espera retornar(4) => true | (3) => false => broken test
        throw new Error('just an error');
      });
    });
    context.skip('Case 2', () => {
      it('should happen bla', () => {
        // Espera que aconteca
        // Entra de dados / metodo sum(2,2)
        // Espera retornar(4) => true | (3) => false => broken test
        throw new Error('just an error');
      });
      it('should happen blabla', () => {
        // Espera que aconteca
        // Entra de dados / metodo sum(2,2)
        // Espera retornar(4) => true | (3) => false => broken test
      });
    });
  });

  describe('Method B', () => {

  });
});
