import styled from 'styled-components';

export const Container = styled.div`
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

  > textarea {
    height: 160px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.g2};
    padding: 16px;
    resize: none;

    &:focus {
      border-color: ${props => props.theme.primary};
    }

    &::placeholder {
      color: ${props => props.theme.g2};
    }
  }

  div + & {
    margin-top: 24px;
  }
`;
