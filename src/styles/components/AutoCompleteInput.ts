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

  fieldset {
    border: 1px solid ${props => props.theme.g2} !important;

    &:focus {
      border-color: ${props => props.theme.primary} !important;
    }

    &::placeholder {
      color: ${props => props.theme.g2} !important;
    }
  }
`;
