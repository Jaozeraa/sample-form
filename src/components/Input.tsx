import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';

import * as S from '../styles/components/Input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
  shouldMarginHorizontal?: boolean;
  containerStyle?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({
  shouldMarginHorizontal = false,
  title,
  name,
  containerStyle,
  ...rest
}) => {
  const [field] = useField(name);

  return (
    <S.Container
      shouldMarginHorizontal={shouldMarginHorizontal}
      style={containerStyle}
    >
      <label>{title}</label>
      <input {...field} type="text" {...rest} />
    </S.Container>
  );
};

export default Input;
