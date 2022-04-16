import React from 'react';
import { Formik } from 'formik';
import { action } from '@storybook/addon-actions';

import MaskedInput from '../../components/MaskedInput';

export default {
  title: 'Components/MaskedInput',
  component: MaskedInput,
};

export const Default = () => (
  <Formik initialValues={{}} onSubmit={action('onSubmit')}>
    <MaskedInput
      title="Phone number"
      name="phone"
      placeholder="Type your phone"
      mask="(99) 99999-9999"
    />
  </Formik>
);

export const CPF = () => (
  <Formik initialValues={{}} onSubmit={action('onSubmit')}>
    <MaskedInput
      title="CPF"
      name="cpf"
      placeholder="Type your CPF"
      mask="999.999.999-99"
    />
  </Formik>
);
