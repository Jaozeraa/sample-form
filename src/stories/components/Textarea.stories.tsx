import React from 'react';
import { Formik } from 'formik';
import { action } from '@storybook/addon-actions';

import Textarea from '../../components/Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
};

export const Default = () => (
  <Formik initialValues={{}} onSubmit={action('onSubmit')}>
    <Textarea title="Message" name="message" placeholder="Type your message" />
  </Formik>
);
