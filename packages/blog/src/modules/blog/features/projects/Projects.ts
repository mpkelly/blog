export type Project = {
  name: string;
  githubUrl: string;
  homepageUrl?: string;
  description: string;
  pattern: string;
};

export const Projects: Project[] = [
  {
    name: 'react-with-i18n',
    description: `Tiny but powerful I18N library for React. It's been designed to work with your existing component library rather than provide special I18N Text components. It supports markdown, inhertiance and code-splitting and is only 1.5kb gzipped. `,
    githubUrl: 'https://github.com/mpkelly/react-with-i18n',
    pattern: 'url(images/Taieri.svg)',
  },
  {
    name: 'journal',
    description: `A wiki with customisable interface. User can register scripts and CSS to export and modify editor content. It's available as a PWA or Chrome extension. It's only alpha for now and I am not actively developing it. `,
    githubUrl: 'https://github.com/mpkelly/journal',
    homepageUrl: 'mpkelly.github.io/journal',
    pattern: 'url(images/Whangaehu.svg)',
  },
  {
    name: 'react-editor-kit',
    description: `A set of plugins for composing editors quickly. It's based on the slate editor framework. I am no longer actively developing this project as it was too much work for one person.`,
    githubUrl: 'https://github.com/mpkelly/react-editor-kit',
    homepageUrl: 'https://mpkelly.github.io/react-editor-kit/',
    pattern: 'url(images/Thur.svg)',
  },
  {
    name: 'react-tree',
    description: `A drag & drop tree component that implements W3C's ARIA specification. Supports drag & drop but also cut, copy and paste as well as keyboard navigation.`,
    githubUrl: 'https://github.com/mpkelly/react-tree',
    homepageUrl:
      'https://codesandbox.io/s/fervent-wave-u7psb?file=/src/App.tsx',
    pattern: 'url(images/Mataura.svg)',
  },
];
