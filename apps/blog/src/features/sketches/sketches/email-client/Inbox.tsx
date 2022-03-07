import React from 'react';
import { Column, Row, Text, styled } from '@mpkelly/ui';
import { InboxItem } from './InboxItem';
import { FilterIcon, SearchIcon } from './ui/Icons';

const Root = styled(Column, {
  p: '$lg',
  gap: '$sm',
  borderRight: '1px solid $neutral-2',
  width: 290,
  overflow: 'auto',
});

const Search = styled(Row, {
  borderRadius: '$md',
  alignItems: 'center',
  p: '$md',
  bg: '$neutral-2',
  color: '$text-2',
  gap: '$lg',
  mb: '$md',
});

const SearchHint = styled(Text);
const Filter = styled(FilterIcon, { color: '$text-1', ml: 'auto' });

export const Separator = styled(Row, {
  height: 1,
  width: '100%',
  borderTop: '1px solid $neutral-3',
});

export const Inbox = () => {
  return (
    <Root>
      <Search>
        <SearchIcon />
        <SearchHint>Search inbox</SearchHint>
        <Filter />
      </Search>
      <InboxItem
        subject={'An example of a subject'}
        preview={'What about this for an example?'}
        sender={'Mike Kelly'}
        time={'just now'}
        attachments
      />
      <Separator />
      <InboxItem
        subject={'The essence of liberalism'}
        preview={'The doctrine of liberalism is an attempt'}
        sender={'Bertrand Russell'}
        time={'1954'}
        profileUrl={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJF35ahcXljNF2i6oMCV02bHH1tjt0SG_bhziv2tqOxTJqY1A51Co3Osa_Gg12IwvsqU&usqp=CAU'
        }
        selected
      />
      <Separator />
      <InboxItem
        subject={'Philosophical investigations'}
        preview={'Are we playing the same language game?'}
        sender={'Ludwig Wittgenstein'}
        time={'1953'}
        profileUrl={
          'https://cdn.britannica.com/79/194479-050-22266BF3/Ludwig-Wittgenstein.jpg?w=100&h=75&c=crop'
        }
      />
      <Separator />
      <InboxItem
        subject={"I'm sure I exist"}
        preview={'I email, therefore I am!'}
        sender={'Descartes'}
        time={'390 years ago'}
        attachments
      />
      <Separator />
      <InboxItem
        subject={'What I know'}
        preview={'All I know is tha I know nothing'}
        sender={'Socrates'}
        time={'just now'}
      />
      <Separator />
      <InboxItem
        subject={'An example of a subject'}
        preview={'Long and more hat about this for an example?'}
        sender={'Mike Kelly'}
        time={'just now'}
      />
      <Separator />
      <InboxItem
        subject={"I'm sure I exist"}
        preview={'I think, therefore I am!'}
        sender={'Descartes'}
        time={'390 years ago'}
      />
      <Separator />
      <InboxItem
        subject={'What I know'}
        preview={'All I know is tha I know nothing'}
        sender={'Socrates'}
        time={'just now'}
      />
      <Separator />
      <InboxItem
        subject={'An example of a subject'}
        preview={'Long and more hat about this for an example?'}
        sender={'Mike Kelly'}
        time={'just now'}
      />
      <Separator />
      <InboxItem
        subject={"I'm sure I exist"}
        preview={'I think, therefore I am!'}
        sender={'Descartes'}
        time={'390 years ago'}
      />
      <Separator />
      <InboxItem
        subject={'What I know'}
        preview={'All I know is tha I know nothing'}
        sender={'Socrates'}
        time={'just now'}
      />
      <Separator />
    </Root>
  );
};
