import styled from 'styled-components';

const Title = styled.h2`
  border-bottom: 3px solid ${({ theme }) => theme.color.ternary};
  color: ${({ theme }) => theme.color.ternary};
  font-family: ${({ theme }) => theme.font.fontFamily.serif};
  font-size: 2.5rem;
  margin: 2rem 0 1rem;
  padding: 0;
`;

export default Title;
