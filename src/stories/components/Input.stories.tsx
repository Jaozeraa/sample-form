import React from 'react';
import { Formik } from 'formik';
import { action } from '@storybook/addon-actions';

import Input from '../../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Default = () => (
  <Formik initialValues={{}} onSubmit={action('onSubmit')}>
    <Input title="E-mail" name="email" placeholder="Type your e-mail" />
  </Formik>
);
