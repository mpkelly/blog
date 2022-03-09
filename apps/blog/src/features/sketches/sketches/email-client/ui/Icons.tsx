import React from 'react';
import {
  Mail24Regular,
  MailInbox24Regular,
  Drafts24Regular,
  Star24Regular,
  Send24Regular,
  Chat24Regular,
  CalendarLtr24Regular,
  TaskListLtr24Regular,
  Delete24Regular,
  Attach24Regular,
  FluentIconsProps,
  Search16Regular,
  Filter16Regular,
  TextBold24Regular,
  TextItalic24Regular,
  TextStrikethroughS24Regular,
  TextAlignLeft24Regular,
  TextAlignRight24Regular,
  TextAlignCenter24Regular,
  TextAlignJustify24Regular,
  Settings24Regular,
  Image24Regular,
  Link24Regular,
  Document24Regular,
  SignOut24Regular,
  Games24Regular,
} from '@fluentui/react-icons';
import { styled } from '@mpkelly/ui';

const createIcon = (icon: React.FC<FluentIconsProps>) => {
  return styled(icon, {
    color: 'inherit',
    defaultProps: {
      size: 48,
    },
  });
};

export const EmailIcon = createIcon(Mail24Regular);

export const InboxIcon = createIcon(MailInbox24Regular);

export const DraftsIcon = createIcon(Drafts24Regular);

export const StarIcon = createIcon(Star24Regular);

export const TrashIcon = createIcon(Delete24Regular);

export const SendIcon = createIcon(Send24Regular);

export const ChatIcon = styled(Chat24Regular);

export const CalendarIcon = styled(CalendarLtr24Regular);

export const TasksIcon = styled(TaskListLtr24Regular);

export const GamesIcon = styled(Games24Regular);

export const AttachIcon = styled(Attach24Regular);

export const SearchIcon = styled(Search16Regular);

export const FilterIcon = styled(Filter16Regular);

export const BoldIcon = styled(TextBold24Regular);

export const ItalicIcon = styled(TextItalic24Regular);

export const StrikethroughIcon = styled(TextStrikethroughS24Regular);

export const AlignLeftIcon = styled(TextAlignLeft24Regular);
export const AlignRightIcon = styled(TextAlignRight24Regular);
export const AlignCenterIcon = styled(TextAlignCenter24Regular);
export const AlignJustifyIcon = styled(TextAlignJustify24Regular);

export const SettingsIcon = styled(Settings24Regular);

export const DocumentIcon = styled(Document24Regular);
export const LinkIcon = styled(Link24Regular);
export const ImageIcon = styled(Image24Regular);

export const SignOutIcon = styled(SignOut24Regular);
