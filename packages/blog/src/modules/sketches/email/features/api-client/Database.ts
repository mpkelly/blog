import { Email, Folder } from '../email/Email';
import { Status } from 'elements/image/Avatar';

export type Database = {
  emails: Email[];
};

export type EmailQuery = {
  folder?: Folder;
  important?: boolean;
  starred?: boolean;
  search?: string;
  labels?: string[];
};

export const queryEmails = (emails: Email[], query: EmailQuery) => {
  return emails.filter((email) => {
    if (query.folder !== undefined && query.folder !== email.folder) {
      return false;
    }

    if (query.important !== undefined && query.important !== email.important) {
      return false;
    }

    if (query.starred !== undefined && query.starred !== email.starred) {
      return false;
    }

    return !(
      query.labels &&
      !email.labels.some((value) => query.labels?.includes(value))
    );
  });
};

const body = `
Hey, 

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor *incididunt* ut labore et dolore magna aliqua. Ut enim ad **minim veniam&&, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.       
![Image](https://images.unsplash.com/photo-1615540363456-ea4554b27018?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80)                      

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque id diam vel quam elementum pulvinar. Lacinia at quis risus sed vulputate odio. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Massa sed elementum tempus egestas sed. Nulla porttitor massa id neque. Massa tempor nec feugiat nisl. Amet risus nullam eget felis eget nunc lobortis mattis. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Augue mauris augue neque gravida in fermentum. Tellus cras adipiscing enim eu. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Risus pretium quam vulputate dignissim suspendisse in est ante. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Tempus quam pellentesque nec nam aliquam sem et. Senectus et netus et malesuada fames. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Orci sagittis eu volutpat odio facilisis.

Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Suspendisse faucibus interdum posuere lorem. Nunc id cursus metus aliquam eleifend. Leo vel fringilla est ullamcorper. Sed velit dignissim sodales ut eu. Non odio euismod lacinia at quis risus sed vulputate. Tempus iaculis urna id volutpat lacus laoreet. Rhoncus urna neque viverra justo nec. At in tellus integer feugiat scelerisque varius morbi enim. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Iaculis eu non diam phasellus vestibulum lorem sed. Ultrices sagittis orci a scelerisque purus semper. Non enim praesent elementum facilisis leo vel fringilla. Non odio euismod lacinia at quis. Accumsan lacus vel facilisis volutpat est. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Lorem mollis aliquam ut porttitor. Tincidunt augue interdum velit euismod in pellentesque massa placerat.

Massa ultricies mi quis hendrerit dolor magna eget est lorem. Risus pretium quam vulputate dignissim suspendisse. Lectus mauris ultrices eros in cursus turpis massa. In ornare quam viverra orci sagittis eu. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Velit dignissim sodales ut eu. Interdum varius sit amet mattis vulputate. Id ornare arcu odio ut sem nulla pharetra. Diam maecenas ultricies mi eget mauris pharetra et. Euismod elementum nisi quis eleifend. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Ut morbi tincidunt augue interdum velit euismod. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. In hac habitasse platea dictumst quisque sagittis purus sit amet. At urna condimentum mattis pellentesque id nibh. Ultrices sagittis orci a scelerisque. Tortor posuere ac ut consequat. Velit dignissim sodales ut eu sem integer.

Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Habitasse platea dictumst quisque sagittis purus sit amet. Arcu non odio euismod lacinia. Sapien nec sagittis aliquam malesuada bibendum arcu. Sed viverra ipsum nunc aliquet bibendum enim. Sagittis aliquam malesuada bibendum arcu. Vel turpis nunc eget lorem dolor sed viverra. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Fusce ut placerat orci nulla pellentesque dignissim enim.

Leo duis ut diam quam nulla porttitor massa. Etiam sit amet nisl purus in mollis nunc sed. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Blandit massa enim nec dui nunc mattis. Cras tincidunt lobortis feugiat vivamus at augue. Turpis egestas pretium aenean pharetra magna ac placerat. Quam vulputate dignissim suspendisse in. Amet aliquam id diam maecenas. Eget est lorem ipsum dolor. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Et ligula ullamcorper malesuada proin. Sed sed risus pretium quam vulputate. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Fermentum et sollicitudin ac orci phasellus egestas.`.trim();

export const Emails: Email[] = [
  {
    id: '1',
    from: {
      name: 'John Smith',
      email: 'jsmith@gmail.com',
      profilePic: 'https://uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
      status: Status.Online,
    },
    to: ['Jane Jones <jjones@gmail.com>'],
    subject: "Photos from last weekend's gig",
    body,
    attachments: [
      { name: 'image 1.jpg' },
      { name: 'image 2.jpg' },
      { name: 'image 3.jpg' },
    ],
    date: 'Just now',
    folder: Folder.Inbox,
    starred: false,
    important: false,
    labels: [],
  },
  {
    id: '2',
    from: {
      name: 'Dave Jones',
      email: 'dave_jones@yahoo.com',
      profilePic:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BNTk2OGU4NzktODhhOC00Nzc2LWIyNzYtOWViMjljZGFiNTMxXkEyXkFqcGdeQXVyMTE1NTQwOTk@._V1_UY256_CR12,0,172,256_AL_.jpg',
      status: Status.Busy,
    },
    to: ['Jane Jones <jjones@gmail.com>'],
    subject: "The joy of 'x' podcast",
    body,
    attachments: [],
    date: '2 hours ago',
    folder: Folder.Inbox,
    starred: false,
    important: false,
    labels: [],
  },
  {
    id: '3',
    from: { name: 'Coursera ', email: 'courses@coursera.com>' },
    fromProfilePic: '',
    to: ['Jane Jones <jjones@gmail.com>'],
    subject: 'Neurotechnology and Freedom',
    body,
    attachments: [{ name: 'stuff.pdf' }],
    date: '18 hours ago',
    folder: Folder.Inbox,
    starred: false,
    important: false,
    labels: [],
  },
  {
    id: '4',
    from: {
      name: 'Sarah Brookes',
      email: 'iamsarahb@webmail.com',
      profilePic: 'https://randomuser.me/api/portraits/women/47.jpg',
      status: Status.Offline,
    },
    to: ['Jane Jones <jjones@gmail.com>'],
    subject: 'FAO designers & developers',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    attachments: [],
    date: '20 hours ago',
    folder: Folder.Inbox,
    starred: false,
    important: false,
    labels: [],
  },
  {
    id: '5',
    from: {
      name: 'Tony Jacobs',
      email: 'tony@prologic.com',
    },
    to: ['Jane Jones <jjones@gmail.com>'],
    subject: "An offer you can't refuse",
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    attachments: [{ name: 'image.png' }],
    date: '8 days ago',
    folder: Folder.Inbox,
    starred: false,
    important: false,
    labels: [],
  },

  {
    id: '6',
    from: {
      name: 'Francis Lindor',
      email: 'franiscool@hotmail.com',
      profilePic: 'https://uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
    },
    to: ['Jane Jones <jjones@gmail.com>'],
    subject: 'App update',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    attachments: [],
    date: '10 days ago',
    folder: Folder.Inbox,
    starred: false,
    important: false,
    labels: [],
  },
  {
    id: '7',
    from: {
      name: 'Francis Lindor',
      email: 'franiscool@hotmail.com',
      profilePic:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BNTk2OGU4NzktODhhOC00Nzc2LWIyNzYtOWViMjljZGFiNTMxXkEyXkFqcGdeQXVyMTE1NTQwOTk@._V1_UY256_CR12,0,172,256_AL_.jpg',
    },
    to: ['Jane Jones <jjones@gmail.com>'],
    subject: "Hey, what's up!?",
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    attachments: [],
    date: '12/01/2021',
    folder: Folder.Inbox,
    starred: false,
    important: false,
  },
  {
    id: '8',
    from: {
      name: 'Francis Lindor',
      email: 'franiscool@hotmail.com',
      profilePic:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    },
    to: ['Jane Jones <jjones@gmail.com>'],
    subject: "Hey, what's up!?",
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    attachments: [],
    date: '12/01/2021',
    folder: Folder.Inbox,
    starred: false,
    important: false,
    labels: [],
  },
  {
    id: '9',
    from: {
      name: 'Francis Lindor',
      email: 'franiscool@hotmail.com',
      profilePic: 'https://randomuser.me/api/portraits/women/47.jpg',
      status: Status.Away,
    },
    to: ['Jane Jones <jjones@gmail.com>'],
    subject: 'Demo',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    attachments: [],
    date: '12/01/2021',
    labels: [],
  },
  {
    id: '10',
    from: {
      name: 'Francis Lindor',
      email: 'franiscool@hotmail.com',
      profilePic: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    },
    to: ['Jane Jones <jjones@gmail.com>'],
    subject: 'Question regarding latest build',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    attachments: [],
    date: '12/01/2021',
    folder: Folder.Inbox,
    starred: false,
    important: false,
    labels: [],
  },
] as Email[];

export const MemoryDB: Database = {
  emails: Emails,
};
