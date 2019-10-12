export const getMonthlyInterestRate = (apr) => apr / 12;
export const getAccruedInterest = (total, interestRate) => total * interestRate;
 