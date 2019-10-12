import React, { useReducer } from 'react';
import Header from '../../../components/projectHeader';
import Body from '../../../components/body';
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
        <input
          type="text"
          value={state.loanAmount}
          onChange={({ target: { value } }) => dispatch({ type: 'loanAmount', payload: value })}
        />
        <input
          type="text"
          value={state.monthlyPayment}
          onChange={({  target: { value }  }) => dispatch({ type: 'pamonthlyPaymentyment', payload: value })}
        />
        <input
          type="text"
          value={state.interestRate}
          onChange={({  target: { value }  }) => dispatch({ type: 'interestRate', payload: value })}
        />
        <button type="button" onClick={() => dispatch({ type: 'submit' })}>Submit</button>
        {state.schedule && (
          <ul>
            {state.schedule.map(
              ({ principalPayment, interestPayment, principal }) => (
                <li key={principal}>
                  {principalPayment},
                  {interestPayment},
                  {principal}
                </li>
              )
            )}
          </ul>
        )}
      </Body>
    </>
  );
}