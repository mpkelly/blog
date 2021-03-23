import * as React from 'react';
import { Nav } from 'elements/flex/Nav';
import { ListItem } from 'elements/list/ListItem';
import { List } from 'elements/list/List';
import { Text } from 'elements/text/Text';
import { Link } from './Link';
import { ElementProps } from 'system/Element';

const ListStyle = {
  marginLeft: 'auto',
  padding: 'md',
};

const ListItemStyle = {
  marginLeft: 'lg',
};

const LinkProps = {
  activeClassName: 'link-active',
};

export const Navigation = (props: ElementProps<HTMLDivElement>) => {
  return (
    <Nav {...props}>
      <List xs={ListStyle}>
        <ListItem xs={ListItemStyle}>
          <Link to={'/home'} {...LinkProps}>
            <Text>Home</Text>
          </Link>
        </ListItem>
        <ListItem xs={ListItemStyle}>
          <Link to={'/sketches'} {...LinkProps}>
            <Text>Sketches</Text>
          </Link>
        </ListItem>
        <ListItem xs={ListItemStyle}>
          <Link to={'/projects'} {...LinkProps}>
            <Text>Projects</Text>
          </Link>
        </ListItem>
        <ListItem xs={ListItemStyle}>
          <Link to={'/about'} {...LinkProps}>
            <Text>About</Text>
          </Link>
        </ListItem>
      </List>
    </Nav>
  );
};
