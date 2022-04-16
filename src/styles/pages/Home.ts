import dynamic from 'next/dynamic';

import Form from '@/components/Form';
import styled from 'styled-components';
const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export const Container = styled.main`
  width: 100vw;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  > div {
    width: 736px;
    height: 100%;
    background: ${props => props.theme.g5};
    border-radius: 4px;
    padding: 44px 64px 64px;
    border: 1px solid ${props => props.theme.g2};
    border-top: 20px solid ${props => props.theme.primary};

    > h1 {
      font-family: 'Ubuntu';
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 40px;
    }
  }
`;

export { Form, Map };
