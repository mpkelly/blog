import { styled } from '@mpkelly/ui';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  children: string;
};

export const Root = styled(ReactMarkdown, {
  lineHeight: '$paragraph',
  code: {
    fontSize: 'smaller',
    mx: '$sm',
  },
  pre: {
    whiteSpace: 'pre-wrap',
    overflow: 'hidden',
    fontSize: '$sm',
    div: {
      border: 'none !important',
      boxShadow: 'none !important',
      whiteSpace: 'pre',
      overflow: 'hidden',
    },
  },
});

export const Markdown = (props: Props) => {
  const { children } = props;
  return (
    <Root
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={dark}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {children}
    </Root>
  );
};
