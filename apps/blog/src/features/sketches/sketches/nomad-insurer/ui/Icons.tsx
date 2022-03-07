import { Icon, Info, FileText } from 'react-feather';
import { styled } from '@mpkelly/ui';

const createIcon = (icon: Icon) => {
  return styled(icon, {
    color: 'inherit',
    defaultProps: {
      size: 24,
    },
  });
};

export const InfoIcon = createIcon(Info);

export const DocumentIcon = createIcon(FileText);
