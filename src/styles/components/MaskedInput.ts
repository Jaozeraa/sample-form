import InputMask from 'react-input-mask';
import styled, { css } from 'styled-components';

interface ContainerProps {
  shouldMarginHorizontal?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  > label {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    opacity: 0.8;
    margin-bottom: 8px;
  }

  & + div {
    ${props =>
      !props.shouldMarginHorizontal &&
      css`
        margin-top: 24px;
      `}
  }
`;

export const Input = styled(InputMask)`
  height: 48px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.g2};
  padding: 16px;

  &:focus {
    border-color: ${props => props.theme.primary};
  }

  &::placeholder {
    color: ${props => props.theme.g2};
  }
`;
