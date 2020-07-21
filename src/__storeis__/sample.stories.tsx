import { Hi } from '@ssen-temp/sample-next-component';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

storiesOf('Hi', module).add('with-label', () => {
  return <Hi label="Hello World!" />;
});
