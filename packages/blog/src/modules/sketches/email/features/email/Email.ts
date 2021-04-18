import { Status } from 'elements/image/Avatar';

export type Email = {
  id: string;
  to: string[];
  from: { name: string; email: string; status?: Status; profilePic?: string };
  subject: string; //markdown
  body: string; //markdown
  attachments: Attachment[];
  date: string;
  folder: Folder;
  starred: boolean;
  important: boolean;
  labels: string[];
};

export enum Folder {
  Inbox = 1,
  Draft = 2,
  Sent = 3,
  Trash = 4,
  Spam = 5,
}

export type Attachment = {
  name: string;
};
