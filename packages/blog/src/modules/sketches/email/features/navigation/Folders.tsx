import React from 'react';
import { FolderItem } from './FolderItem';
import { Button } from 'elements/button/Button';
import { Toolbar, useToolbarState } from 'elements/toolbar/Toolbar';
import { Element } from 'elements/Element';
import { Column } from 'elements/flex/Column';

export const MailFolders = () => {
  const toolbar = useToolbarState({ loop: true });
  return (
    <Toolbar xs={Style} {...toolbar}>
      <Button xs={ButtonStyle}>Compose</Button>
      <Column xs={FoldersListStyle}>
        <FolderItem
          name={'Inbox'}
          icon={'inbox'}
          count={24}
          selected
          {...toolbar}
        />
        <FolderItem name={'Drafts'} icon={'drafts'} count={3} {...toolbar} />
        <FolderItem name={'Starred'} icon={'star'} {...toolbar} />
        <FolderItem name={'Important'} icon={'important'} {...toolbar} />
        <FolderItem
          name={'Sent'}
          icon={'sent'}
          count={12}
          badgeModifiers={'muted'}
          {...toolbar}
        />
        <FolderItem name={'Trash'} icon={'delete'} {...toolbar} />
        <FolderItem
          name={'Spam'}
          icon={'spam'}
          count={2}
          badgeModifiers={'muted'}
          {...toolbar}
        />
      </Column>
    </Toolbar>
  );
};

const Style: Element = {
  flexDirection: 'column',
  width: '100%',
  overflow: 'hidden',
};

const ButtonStyle: Element = {
  marginBottom: 'lg',
};

const FoldersListStyle: Element = {
  overflowY: 'auto',
  button: {
    width: '100%',
  },
};
