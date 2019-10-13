import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
`;

const Label = styled.label`
  font-size: 16px;
`;

const Input = styled.input`
  outline: none;
`;

const ErrorText = styled.span`
  color: red;
`;

const HelpText = styled.span`
  font-size: 12px;
`;

const TextInput = ({
  value,
  label,
  id,
  placeholder,
  type,
  onChange,
  helpText,
  errorText = false,
}) => (
  <InputWrapper key={id}>
    <Label htmlFor={id} error={!!errorText}>{label}</Label>
    <Input
      id={id}
      type={type}
      value={value}
      error={!!errorText}
      onChange={onChange}
      placeholder={placeholder}
    />
    {errorText && (<ErrorText>{errorText}</ErrorText>)}
    {helpText && (<HelpText>{helpText}</HelpText>)}
  </InputWrapper>
);

export default TextInput;