import React from 'react';
import { Article } from 'elements/flex/Article';
import { Main } from 'elements/flex/Main';
import { Element } from 'elements/Element';
import { Body } from './Body';
import { Header } from './Header';
import { Editor } from '../compose/Editor';
import { useEmailState } from './EmailState';

export const Detail = () => {
  const { emails, selected } = useEmailState();
  const email = emails.read()[selected];
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
