import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
export const Primary = () => <Button backgroundColor="#ff0" label="Button" />;
export const Secondary = () => <Button backgroundColor="#ff0" label="😄👍😍💯" />;
export const Tertiary = () => <Button backgroundColor="#ff0" label="📚📕📈🤓" />;