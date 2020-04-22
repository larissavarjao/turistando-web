import styled from 'styled-components';

export const Icon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 24px;
`;

export const SmallErrorMessage = styled.span`
  color: ${(props) => props.theme.errorColor};
  font-size: 12px;
`;

export const SpanErrorMessage = styled.span`
  text-align: center;
`;

export const MessageContainer = styled.div`
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MessageTitle = styled.h3`
  margin: 0 0 12px 0;
`;
