import React from 'react';
import { Article } from 'elements/flex/Article';
import { Main } from 'elements/flex/Main';
import { Element } from 'system/Element';
import { Email } from './Email';
import { Body } from './Body';
import { Header } from './Header';
import { Editor } from '../compose/Editor';

type Props = {
  email: Email;
};

const Style = {
  flex: 1,
  overflow: 'hidden',
  height: '100%',
};

const ArticleStyle: Element = {
  padding: 'lg',
  flex: '1 1 0',
  minHeight: 0,
  overflowY: 'auto',
};

const EditorStyle = {
  width: '100%',
  flex: '1 0 0',
};

export const Detail = (props: Props) => {
  const { email } = props;
  return (
    <Main xs={Style}>
      <Header email={email} />
      <Article xs={ArticleStyle}>
        <Body body={email.body} />
      </Article>
      <Editor xs={EditorStyle} />
    </Main>
  );
};
