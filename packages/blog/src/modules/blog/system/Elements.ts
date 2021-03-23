import { Elements } from 'system/elements/Elements';

export const SystemElements: Elements = {
  text: {
    color: 'text.1',
    fontFamily: 'headings',
    fontSize: 'primary',
    textAlign: 'left',
    modifiers: {
      bold: {
        fontWeight: 'bold',
      },
      muted: {
        color: 'text.2',
      },
      small: {
        fontSize: 'sm',
      },
      label: {
        color: 'text.2',
        fontSize: 'sm',
        fontWeight: 'bold',
      },
      accent: {
        color: 'accent.1',
      },
      lg: {
        fontSize: 'lg',
      },
      xl: {
        fontSize: 'xl',
      },
      gigantic: {
        fontSize: 'gigantic',
      },
    },
  },
  paragraph: {
    color: 'text.1',
    fontFamily: 'primary',
    fontSize: 'primary',
    lineHeight: 'primary',
    modifiers: {
      muted: {
        color: 'text.2',
      },
      lg: {
        fontSize: 'lg',
      },
      xl: {
        fontSize: 'xl',
      },
    },
  },
  h1: {
    color: 'text.1',
    fontFamily: 'headings',
    fontSize: 'xl',
  },
  h3: {
    color: 'text.1',
    fontFamily: 'headings',
    fontSize: 'lg',
  },
  label: {
    backgroundColor: 'background.2',
    color: 'hsla(47deg, 100%, 50%, .9)',
    border: '1px solid',
    borderColor: 'border.2',
    borderRadius: 'round',
    paddingTop: 'sm',
    paddingBottom: 'sm',
    paddingLeft: 'md',
    paddingRight: 'md',
    fontFamily: 'headings',
    fontWeight: 'bold',
    fontSize: 'sm',
  },
  'list-item': {
    display: 'inline',
  },
  navlink: {
    textDecoration: 'none',
    color: 'accent.1',
    paddingBottom: 'sm',
    '&.link-active': {
      borderBottom: '2px solid',
      borderColor: 'accent.1',
    },
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: 'accent.2',
    },
  },
  button: {
    backgroundColor: 'accent.2',
    height: 'control.height',
    paddingLeft: 'md',
    paddingRight: 'md',
    color: 'background.1',
    borderRadius: 'sm',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(110%)',
    },
    '&:focus': {
      filter: 'brightness(90%)',
    },
    '&:active': {
      filter: 'brightness(80%)',
    },
    modifiers: {
      clear: {
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'background.2',
        },
      },
    },
  },
  icon: {
    color: 'inherit',
    fontSize: 24,
    modifiers: {
      accent: {
        color: 'accent.1',
      },
    },
  },
  thumbnail: {
    width: 'thumbnail.primary',
    height: 'thumbnail.primary',
    borderRadius: '50%',
    flexShrink: 0,
    objectFit: 'cover',
  },
  toolbaritem: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'text.2',
    cursor: 'pointer',
    borderRadius: 'sm',
    padding: 'md',
    '&:hover': {
      color: 'text.1',
      backgroundColor: 'background.3',
    },
    '&[data-selected=true]': {
      color: 'accent.1',
      backgroundColor: 'background.3',
    },
  },
  separator: {
    color: 'border.1',
    borderTop: '1px dotted',
    marginTop: 'lg',
    marginBottom: 'lg',
    height: 1,
    minHeight: 1,
    width: '100%',
  },
};
