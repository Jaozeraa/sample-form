import React, { TextareaHTMLAttributes } from 'react';
import { useField } from 'formik';

import * as S from '../styles/components/Textarea';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
  name: string;
}

const Textarea: React.FC<TextareaProps> = ({ title, name, ...rest }) => {
  const [field] = useField(name);

  return (
    <S.Container>
      <label>{title}</label>
      <textarea {...field} {...rest} />
    </S.Container>
  );
};

export default Textarea;
