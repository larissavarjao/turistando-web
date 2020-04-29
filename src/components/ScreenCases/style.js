import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 400;
  color: ${(props) => props.theme.gray};
  max-width: 350px;
`;

export const Image = styled.svg`
  width: 150px;
  height: 150px;
`;
