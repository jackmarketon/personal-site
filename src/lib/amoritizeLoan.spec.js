import amoritizeLoan from './amoritizeLoan';

describe('Amoritize Loan', () => {
  let result = {};
  beforeEach(() => {
    result = amoritizeLoan({
      loanAmount: 1000,
      monthlyPayment: 50,
      interestRate: 9.999 / 100
    });
  });
  it('should return an array', () => {
    expect(result.length).toBe(22);
  });
  describe('result items', () => {
    let datum = {};
    beforeAll(() => {
      ([datum] = result);
    });
    it('should contain a principal payment', () => {
      expect(datum.principalPayment).toBe(41.6675);
    });
    it('should contain an interest payment', () => {
      expect(Math.floor(datum.interestPayment)).toBe(8);
    });
    it('should contain the new principal', () => {
      expect(Math.floor(datum.principal)).toBe(958);
    });
  });
});