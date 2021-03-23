import * as React from 'react';
import { Element } from 'system/Element';
import { Article } from 'elements/flex/Article';
import { Column } from 'elements/flex/Column';
import { H3 } from 'elements/text/Headings';
import { Button } from 'elements/button/Button';
import { Link as NavLink } from '../navigation/Link';
import { Icon } from 'elements/icon/Icon';
import { Sketch as SketchModel } from './Sketches';
import { Link } from 'elements/link/Link';
import { Row } from 'elements/flex/Row';
import { Label } from 'elements/label/Label';
import { Text } from 'elements/text/Text';
import { styled } from 'goober';

type Props = {
  xs?: Element;
  modifiers?: 'reverse';
} & SketchModel;

const Style: Element = {
  flexDirection: 'row',
  alignItems: 'stretch',
  width: '100%',
  modifiers: {
    reverse: {
      '[data-sketch-detail]': {
        marginLeft: 0,
        marginRight: 'xl',
        order: -1,
      },
    },
  },
};

const ImageContainerStyle: Element = {
  position: 'relative',
  borderRadius: 'md',
  width: '100%',
  overflow: 'hidden',
  height: 340,
  flex: '.6 0 0',
  backgroundSize: '350%',
  border: '1px solid',
  borderColor: 'border.1',
  color: 'text.1',
};

const DetailsStyle = {
  marginLeft: 'xxl',
  flex: '.4 0 0',
};

const TitleStyle = {
  margin: 0,
};

const LabelsStyle: Element = {
  flexWrap: 'wrap',
  '*': {
    marginRight: 'md',
    marginTop: 'md',
  },
};

const DetailsRow = {
  alignItems: 'center',
  width: '100%',
};

const LinksStyle = {
  marginTop: 'md',
  marginLeft: 'auto',
};

const IconStyle = {
  marginRight: 'md',
  color: 'text.2',
};

const ButtonStyle = {
  marginTop: 'auto',
};

const ButtonIconStyle = {
  marginLeft: 'md',
};

const LinkProps = {
  xs: IconStyle,
  target: '_blank',
};

export const Sketch = (props: Props) => {
  const {
    title,
    description,
    path,
    tags,
    previewUrl,
    dribbleUrl,
    githubUrl,
    xs = {},
    modifiers,
  } = props;
  const backgroundImage = `url("${previewUrl}")`;
  return (
    <Article key={title} xs={{ ...Style, ...xs }} modifiers={modifiers}>
      <PreviewImage xs={{ ...ImageContainerStyle, backgroundImage }} />
      <Column data-sketch-detail xs={DetailsStyle}>
        <H3 xs={TitleStyle}>{title}</H3>
        {description}
        <Row xs={DetailsRow}>
          <Row xs={LabelsStyle}>
            {tags.map((tag) => (
              <Label key={tag}>{tag}</Label>
            ))}
          </Row>
          <Row xs={LinksStyle}>
            <Link href={dribbleUrl} {...LinkProps}>
              <Icon name={'dribble'} />
            </Link>
            <Link href={githubUrl} {...LinkProps}>
              <Icon name={'github'} />
            </Link>
          </Row>
        </Row>
        <NavLink to={path} xs={ButtonStyle}>
          <Button modifiers={'clear'}>
            <Text modifiers={'accent'}>Take a look</Text>
            <Icon
              name={'right_arrow'}
              modifiers={'accent'}
              xs={ButtonIconStyle}
            />
          </Button>
        </NavLink>
      </Column>
    </Article>
  );
};

const PreviewImage = styled(Column)`
  @keyframes zoom {
    from {
      background-size: 350%;
    }
    to {
      background-size: 100%;
    }
  }
  &:hover {
    animation: zoom 1s normal forwards ease-in-out;
  }
`;
