import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';

import * as S from '../styles/components/MaskedInput';

interface MaskedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
  mask: string | (string | RegExp)[];
  shouldMarginHorizontal?: boolean;
  containerStyle?: React.CSSProperties;
}

const MaskedInput: React.FC<MaskedInputProps> = ({
  shouldMarginHorizontal = false,
  title,
  name,
  mask,
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
      <S.Input {...field} mask={mask} id={name} type="text" {...rest} />
    </S.Container>
  );
};

export default MaskedInput;
