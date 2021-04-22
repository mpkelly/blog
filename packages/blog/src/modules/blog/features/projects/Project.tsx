import * as React from 'react';
import { Column } from 'elements/flex/Column';
import { Project as ProjectModel } from './Projects';
import { ElementProps } from 'elements/Element';
import { H3 } from 'elements/text/Headings';
import { Paragraph } from 'elements/text/Paragraph';
import { Row } from 'elements/flex/Row';
import { Link } from 'elements/link/Link';
import { Icon } from 'elements/icon/Icon';
import { Article } from 'elements/flex/Article';

type Props = {
  project: ProjectModel;
  modifiers?: string;
} & ElementProps<any>;

export const Project = (props: Props) => {
  const { project, modifiers = '' } = props;
  const {
    name,
    description,
    pattern: backgroundImage,
    githubUrl,
    homepageUrl,
  } = project;
  return (
    <Article xs={Style} modifiers={modifiers}>
      <Column xs={{ ...GraphicStyle, backgroundImage }} />
      <Column xs={DetailStyle} data-project-detail>
        <H3 xs={TitleStyle}>{name}</H3>
        <Paragraph modifiers={'muted'}>{description}</Paragraph>
        <Row xs={LinksStyle}>
          <Link href={homepageUrl} {...LinkProps}>
            <Icon name={'home'} />
          </Link>
          <Link href={githubUrl} {...LinkProps}>
            <Icon name={'github'} />
          </Link>
        </Row>
      </Column>
    </Article>
  );
};

const Style = {
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
  marginTop: 'xxl',
  marginBottom: 'xxl',
  modifiers: {
    reverse: {
      '[data-project-detail]': {
        marginLeft: 0,
        marginRight: 'xl',
        order: -1,
      },
    },
  },
};

const DetailStyle = {
  maxWidth: 400,
};

const TitleStyle = {
  fontFamily: 'monospace',
  marginBottom: 'md',
};

const LinksStyle = {
  marginTop: 'md',
};

const IconStyle = {
  marginRight: 'md',
  color: 'text.2',
};

const LinkProps = {
  xs: IconStyle,
  target: '_blank',
};

const GraphicStyle = {
  width: 400,
  height: 240,
  backgroundSize: '100%',
  flexShrink: 0,
};
