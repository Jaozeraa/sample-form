import { Form } from 'formik';
import styled from 'styled-components';

import Button from '@/components/Button';
import Input from '@/components/Input';
import MaskedInput from '@/components/MaskedInput';
import Textarea from '@/components/Textarea';

export const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > footer {
    margin-top: 40px;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
`;

export { Input, MaskedInput, Textarea, Button };
