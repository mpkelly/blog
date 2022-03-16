import React from 'react';
import { CSS, styled } from '@mpkelly/ui';
import { CSSProperties } from '@stitches/react';

const StyledIcon = styled('i', {
  color: 'inherit',
});

const Icon = ({ name, style }: { name: string; style?: CSSProperties }) => {
  console.log(style);
  return (
    <StyledIcon className={'material-icons-outlined'} style={style}>
      {name}
    </StyledIcon>
  );
};

export const UserIcon = ({ style }: { style?: CSSProperties }) => (
  <Icon name={'person'} style={style} />
);

export const UsersIcon = () => <Icon name={'people'} />;

export const ChartIcon = () => <Icon name={'bar_chart'} />;

export const ListIcon = () => <Icon name={'list_alt'} />;

export const SettingsIcon = () => <Icon name={'settings'} />;

export const DiffIcon = ({ style }: { style?: CSSProperties }) => (
  <Icon name={'moving'} style={style} />
);
