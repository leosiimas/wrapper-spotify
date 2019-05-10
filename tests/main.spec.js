// eslint-disable-next-line prefer-destructuring
const expect = require('chai').expect;
// eslint-disable-next-line no-undef
describe('Main', () => {
  let arr;

  // Roda uma vez antes do bloco
  // eslint-disable-next-line no-undef
  before(() => {
  });

  // Roda uma vez depois do bloco
  // eslint-disable-next-line no-undef
  after(() => {
  });

  // Roda todas as vezes antes de um bloco
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // Roda todas as vezes depois de um bloco
  // eslint-disable-next-line no-undef
  afterEach(() => {
  });

  // eslint-disable-next-line no-undef
  it('should be an array', () => {
    expect(arr).to.be.a('array');
  });

  // eslint-disable-next-line no-undef
  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  // eslint-disable-next-line no-undef
  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop(4);
    expect(arr).to.have.lengthOf(2);
  });

  // eslint-disable-next-line no-undef
  it('should remove 3 when use pop in the array', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });
});
