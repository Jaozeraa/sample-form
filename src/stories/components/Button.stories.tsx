import React from 'react';

import Button from '../../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => <Button>Read More</Button>;

export const Loading = () => <Button isLoading>Read More</Button>;
