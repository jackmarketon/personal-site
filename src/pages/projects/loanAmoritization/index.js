import React, { useReducer } from 'react';
import Header from '../../../components/projectHeader';
import Body from '../../../components/body';
import TextInput from '../../../components/textInput';
import amoritize from '../../../lib/amoritizeLoan';

const initialState = {
  loanAmount: 1000,
  monthlyPayment: 50,
  interestRate: 9.99 / 100,
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'loanAmount':
      return { ...state, loanAmount: parseInt(action.payload, 10)};
    case 'monthlyPayment':
      return { ...state, monthlyPayment: parseInt(action.payload, 10)};
    case 'interestRate':
      return {...state, interestRate: parseFloat(action.payload, 10)};
    case 'submit':
      return {...state, schedule: amoritize(state)};
    default:
      throw new Error('Called dispatch but did nothing!');
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <Header pageTitle="Renting Vs Buying" />
      <Body>
        <TextInput
          type="text"
          id="loanAmount"
          label="Loan Amount"
          value={state.loanAmount}
          onChange={({ target: { value } }) => dispatch({ type: 'loanAmount', payload: value })}
        />
        <TextInput
          type="text"
          id="monthlyPayment"
          label="Monthly Payment"
          value={state.monthlyPayment}
          onChange={({ target: { value } }) => dispatch({ type: 'monthlyPayment', payload: value })}
        />
        <TextInput
          type="text"
          id="interestRate"
          label="APR"
          value={state.interestRate}
          onChange={({ target: { value } }) => dispatch({ type: 'monthinterestRatelyPayment', payload: value })}
        />
        <button type="button" onClick={() => dispatch({ type: 'submit' })}>Submit</button>
        {state.schedule && (
          <table>
            <thead>
              <tr>
                <td>Month</td>
                <td>Principal Payment</td>
                <td>Interest Payment</td>
                <td>Principal</td>
              </tr>
            </thead>
            <tbody>
              {state.schedule.map(
                ({ principalPayment, interestPayment, principal }, idx) => (
                  <tr key={principal}>
                    <td>{idx + 1}</td>
                    <td>{principalPayment}</td>
                    <td>{interestPayment}</td>
                    <td>{principal}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </Body>
    </>
  );
}