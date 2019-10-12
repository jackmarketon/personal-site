import {
  getMonthlyInterestRate,
  getAccruedInterest
} from './mathUtilities';

describe('Math Functions', () => {
  it('should get monthly interest', () => {
    expect(getMonthlyInterestRate(12)).toBe(1);
    expect(getMonthlyInterestRate(9.99)).toBe(.8325);
  })
  it('should get accrued interest', () => {
    expect(getAccruedInterest(100, 0.20)).toBe(20);
    expect(getAccruedInterest(100, 0.8325)).toBe(83.25);
    expect(getAccruedInterest(150, 0.199)).toBe(29.85);
  })
})