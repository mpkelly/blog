import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';
import { createJsxElement } from '../../Element';

export const Markdown = createJsxElement<HTMLDivElement, ReactMarkdownProps>(
  //TODO fix type
  ReactMarkdown as any,
  'markdown'
);
