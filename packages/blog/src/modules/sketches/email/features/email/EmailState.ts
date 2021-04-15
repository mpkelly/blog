import { fetch } from '../api-client/Fetch';
import { Email, ExampleEmails } from './Email';

import { atom, useAtom } from 'jotai';

const State = atom({
  emails: fetch<Email[]>(ExampleEmails, 2),
  selected: 0,
});

export const useEmailState = () => {
  const [state, setState] = useAtom(State);

  const handleFetchEmails = () =>
    setState((state) => ({
      ...state,
      emails: fetch<Email[]>(ExampleEmails, 2),
    }));

  const handleSelect = (selected: number) => {
    setState((state) => ({ ...state, selected }));
  };
  return { ...state, handleSelect, handleFetchEmails };
};
