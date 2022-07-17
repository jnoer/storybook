import React from 'react';
import { styled } from '@stitches/react';

const StyledButton = styled('button', {
  backgroundColor: 'orange',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'hotpink',
  },
});

export const Button = ({ primary, ...props }) => {
  return (
      <StyledButton type="button">
        <span>My Button</span>
      </StyledButton>);
};