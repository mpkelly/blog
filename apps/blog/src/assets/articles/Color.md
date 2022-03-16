## Colour in design

Whether you're a designer or a developer you will know that naming colours can be very tricky on non-trivial projects. Things start out ok:

```TypeScript
const theme = {
  primaryText: '...',
  background: '...',
  primary: '...'
}

```

But it doesn't take look long for things to get out of hand. For example, many apps have multiple background colours, and they are generally more interesting for it. A common example is navigation: an app might have light content but a dark navigation section. How should we name these additional colours in our design tools and application themes? One common approach is use a prefix:

```TypeScript
const theme = {
  primaryText: '...',
  background: '...',
  primary: '...',
  
  //Nav
  navPrimaryText: '...',
  navBackground: '...',
}

```

This works and in a design tool it might be your own option. However, it has some limitations which we will see later. 

A second approach is to use a huge palette that has lots of scales which might follow the Material Design naming conventions


