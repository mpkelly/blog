import { Elements } from 'system/elements/Elements';

export const SystemElements: Elements = {
  text: {
    color: 'text.1',
    fontFamily: 'primary',
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
      xxl: {
        fontSize: 'xxl',
      },
    },
  },
  paragraph: {
    color: 'text.1',
    fontFamily: 'primary',
    fontSize: 'primary',
  },
  h1: {
    color: 'text.1',
    fontFamily: 'primary',
    fontSize: 'xl',
  },
  textarea: {
    color: 'text.1',
    fontFamily: 'primary',
    fontSize: 'primary',
    lineHeight: 'primary',
    backgroundColor: 'background.2',
    width: '100%',
    padding: 'md',
    border: 'none',
    borderRadius: 'sm',
  },
  button: {
    backgroundColor: 'accent.1',
    height: 'control.height',
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
          color: 'text.1',
          backgroundColor: 'background.3',
        },
      },
      text: {
        color: 'text.2',
      },
    },
  },
  markdown: {
    fontFamily: 'primary',
    fontSize: 'primary',
    p: {
      color: 'text.1',
      lineHeight: 'primary',
    },
    h1: {
      color: 'text.1',
      fontFamily: 'primary',
      fontSize: 'xl',
    },
    img: {
      maxWidth: '100%',
      margin: '16px 0',
    },
  },
  icon: {
    color: 'inherit',
    fontSize: 24,
    modifiers: {
      small: {
        fontSize: '18px !important',
      },
      accent: {
        color: 'accent.1',
      },
      logo: {
        color: 'accent.1',
        fontSize: '32px !important',
        padding: 'sm',
      },
    },
  },
  input: {
    height: 'control.height',
    border: '2px solid',
    borderColor: 'border.1',
    borderRadius: 'sm',
    color: 'text.1',
    outline: 'none',
    backgroundColor: 'transparent',
    '&:focus': {
      borderColor: 'accent.1',
    },
    '&:hover': {
      borderColor: 'accent.1',
    },
  },
  thumbnail: {
    width: 'thumbnail.primary',
    height: 'thumbnail.primary',
    borderRadius: '50%',
    flexShrink: 0,
    objectFit: 'cover',
  },
  avatar: {
    width: 'thumbnail.primary',
    height: 'thumbnail.primary',
    borderRadius: '50%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'accent.1',
    flex: 'none',
    span: {
      fontSize: 'lg',
    },
    '[data-status]': {
      position: 'absolute',
      borderRadius: '50%',
      width: 12,
      height: 12,
      flex: 'none',
      border: '2px solid',
      borderColor: 'background.2',
      right: -2,
      bottom: -2,
    },
    '[data-status="0"]': {
      backgroundColor: 'success',
    },
    '[data-status="1"]': {
      backgroundColor: 'warning',
    },
    '[data-status="2"]': {
      backgroundColor: 'danger',
    },
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
  popoverdisclosure: {
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
  },
  popoverarrow: {
    svg: {
      fill: 'background.3',
    },
  },
  popover: {
    padding: 'md',
    backgroundColor: 'background.3',
    borderRadius: 'sm',
  },
  separator: {
    backgroundColor: 'border.1',
    marginLeft: 'md',
    marginRight: 'md',
    height: 16,
    width: 1,
    modifiers: {
      horizontal: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 'md',
        marginBottom: 'md',
        height: 1,
        minHeight: 1,
        width: '100%',
      },
    },
  },
  badge: {
    color: 'background.1',
    borderRadius: 'round',
    padding: 'xs',
    backgroundColor: 'warning',
    fontSize: 'xs',
    fontFamily: 'primary',
    fontWeight: 'bold',
    lineHeight: 1,
    minWidth: 'badge.width',
    modifiers: {
      muted: {
        backgroundColor: 'background.3',
        color: 'text.1',
      },
    },
  },
};
