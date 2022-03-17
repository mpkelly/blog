import { styled } from '@mpkelly/ui';
import ReactMarkdown from 'react-markdown';

export const Markdown = styled(ReactMarkdown, {
  lineHeight: '$paragraph',
  pre: {
    bg: 'lightgray', // darkPalette['bg-1'],
    // color: darkPalette['text-1'],
    p: '$lg',
    whiteSpace: 'pre-wrap',
  },
});
