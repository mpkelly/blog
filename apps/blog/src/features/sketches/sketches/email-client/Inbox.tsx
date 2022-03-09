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
        subject={'Language games'}
        preview={'Are we playing the same language game?'}
        sender={'Ludwig Wittgenstein'}
        time={'7th June 1953'}
        profileUrl={
          'https://cdn.britannica.com/79/194479-050-22266BF3/Ludwig-Wittgenstein.jpg?w=100&h=75&c=crop'
        }
      />

      <Separator />
      <InboxItem
        subject={'The essence of liberalism'}
        preview={'The doctrine of liberalism is an attempt'}
        sender={'Bertrand Russell'}
        time={'12 April 1945'}
        profileUrl={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJF35ahcXljNF2i6oMCV02bHH1tjt0SG_bhziv2tqOxTJqY1A51Co3Osa_Gg12IwvsqU&usqp=CAU'
        }
        selected
      />
      <Separator />
      <InboxItem
        subject={'On Hell'}
        preview={"It's other people!"}
        sender={'Jean-Paul Satre'}
        time={'3rd May 1943'}
        attachments
        profileUrl={
          'https://upload.wikimedia.org/wikipedia/commons/e/ef/Sartre_1967_crop.jpg'
        }
      />
      <Separator />
      <InboxItem
        subject={'Do I exist?'}
        preview={'Please reply to confirm'}
        sender={'Descartes'}
        time={'1st December 1637'}
        profileUrl={
          'https://philosophybreak.com/static/04308915e98267fc517a682b643b6e79/e88ff/descartes.webp'
        }
        attachments
      />
      <Separator />

      <InboxItem
        subject={'Re: Book sales?'}
        preview={'it fell dead-born from the press'}
        sender={'David Hume'}
        time={'12th March 1739'}
        profileUrl={
          'https://cdn.britannica.com/08/131908-050-404073CE/David-Hume-oil-canvas-Allan-Ramsay-Scottish-1766.jpg'
        }
        profilesProps={{ backgroundSize: 40 }}
      />
      <Separator />
      <InboxItem
        subject={'Re:gift ideas'}
        preview={'Send me a small pot of cheese'}
        sender={'Epicuris'}
        time={'8th August 341BC'}
        profileUrl={
          'https://upload.wikimedia.org/wikipedia/commons/d/d8/Epicuris_%28346%3F-270_BC%29_Wellcome_M0005617.jpg'
        }
      />
      <Separator />
      <InboxItem
        subject={'What I know'}
        preview={'All I know is that I know nothing'}
        sender={'Socrates'}
        time={'Ages ago'}
        profileUrl={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Socrate_du_Louvre.jpg/800px-Socrate_du_Louvre.jpg'
        }
      />

      <Separator />
      <InboxItem
        subject={'Re: Email'}
        preview={"You can't read the same email twice"}
        sender={'Heraclitus'}
        time={'unknown 475BC'}
        profileUrl={
          'https://images.gr-assets.com/authors/1453816020p8/77989.jpg'
        }
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
