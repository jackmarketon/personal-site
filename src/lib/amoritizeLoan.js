import {
  getMonthlyInterestRate,
  getAccruedInterest
} from './mathUtilities';

const amoritizeLoan = ({
  loanAmount,
  monthlyPayment,
  additionalCharges = 0,
  interestRate // APR
}) => {
  const schedule = [];
  const monthlyRate = getMonthlyInterestRate(interestRate);
  let principal = loanAmount;
  while(principal >= 0) {
    const accruedInterest = getAccruedInterest(principal, monthlyRate);
    const principalPayment = monthlyPayment - accruedInterest;
    const interestPayment = accruedInterest;
    const changes = monthlyPayment - additionalCharges - accruedInterest;
    principal -= changes;

    const datum = {
      principalPayment,
      interestPayment,
      payment: monthlyPayment,
      principal,
    };
    schedule.push(datum);
  }

  return schedule;
};

export default amoritizeLoan;