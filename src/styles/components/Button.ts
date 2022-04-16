import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 48px;
  border: 0;
  border-radius: 4px;
  transition: 0.2s;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.g5};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  padding: 0 32px;

  &:hover {
    background: ${props => shade(0.2, props.theme.primary)};
  }
`;
