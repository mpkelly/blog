import { fetch } from '../api-client/Fetch';
import { Email, Folder } from './Email';

import { atom, useAtom } from 'jotai';
import { EmailQuery, MemoryDB, queryEmails } from '../api-client/Database';

const DefaultQuery: EmailQuery = {
  folder: Folder.Inbox,
};

const State = atom({
  emails: fetch<Email[]>(queryEmails(MemoryDB.emails, DefaultQuery), 2),
  selected: 0,
});

export const useEmailState = () => {
  const [state, setState] = useAtom(State);

  const handleFetchEmails = (query = DefaultQuery) =>
    setState((state) => ({
      ...state,
      emails: fetch<Email[]>(queryEmails(MemoryDB.emails, query), 2),
    }));

  const handleSelect = (selected: number) => {
    setState((state) => ({ ...state, selected }));
  };
  return { ...state, handleSelect, handleFetchEmails };
};
