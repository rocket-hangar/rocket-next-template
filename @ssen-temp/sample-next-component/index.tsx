import React from 'react';

interface Props {
  label: string;
}

export function Hi({ label }: Props) {
  return (
    <span role="img" aria-label={label}>
      👋
    </span>
  );
}
