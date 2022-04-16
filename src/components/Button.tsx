import React, { ButtonHTMLAttributes } from 'react';
import ReactLoading from 'react-loading';
import * as S from '@/styles/components/Button';
import { useTheme } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  ...rest
}) => {
  const { g5 } = useTheme();
  return (
    <S.Container disabled={isLoading} {...rest}>
      {isLoading ? (
        <ReactLoading color={g5} type="spin" width={32} height={32} />
      ) : (
        children
      )}
    </S.Container>
  );
};

export default Button;
