# Creating component systems with React JS

*By* Mike Kelly

--- 

## Table of Contents
1. [Introduction](#introduction)
2. [What makes a good library?](#paragraph1)
   1. [Accessible](#subparagraph1)
   2. [Extendable](#subparagraph1)
   3. [Themeable](#subparagraph1)
   4. [Responsive](#subparagraph1)
   5. [Support for internationalization (i18n)](#subparagraph1)
   6. [Lightweight with support for code splitting](#subparagraph1)
3. [Another paragraph](#paragraph2)

## Introduction

In this guide I am going to show you how I make component systems using React. We will be working 
with JavaScript but in practice I use TypeScript where possible. We will go through a complete 
implementation line by line and even make an application UI with our library. The full source code is be available on github. This guide will be in 
three parts as follows:

1. Overview and theory (this part)
2. Implementation
3. Using the library to build a real app

## What makes a good library?

This is open for debate but here's my take:

- Accessible (a11y)
- Extendable
- Themeable
- Responsive
- Support for internationalization (i18n) 
- Lightweight with support for code splitting

Some of the above features might sound obvious but there are still popular libraries out there are
quite hard to extend and there are also products hitting the market that are slick but lacking proper
accessibility support.

### Accessible

Building products that are usable by as many people as possible is a goal we should all aim for. Thankfully
it is now much easier to in React thanks to some brilliant base libraries like Reakit and ReachUI. We will use
Reakit in our project. Reakit implements the W3C ARIA specification and provides a set of un-styled components
with an API to support accessibility. 

### Extendable

It should be easy add new components to our library. We will make use of a factory function and some higher-order 
components that allow us to integrate third-party components in a way that makes them first-class citizens
in our library. 

### Themeable

It shouldn't just be themeable but actual trivial to create new themes. I have used countless libraries over the years
in various SDKs and I'm always surprised how hard it to change styles. Another thing that bugs me is that so many
websites and apps end up looking the same because Very Popular Component library was so hard to change. 

### Responsive

There are now lots of difference devices and screen sizes to support. Any serious component library needs
to be easily able to adapt to any of those.

### Internationalization

There are some popular libraries out there already for React which you can use alongside your component lirbary
but they add quite a bit of noise to components. Ideally our component API will support i18n properties
directly on all elements where it makes sense, including accessible attributes like `role`. Even when you are only
supporting a single language I still believe it pays to externalise text content. 

### Lightweight

We want our library to be as light as possible and also sympathetic to code splitting strategies. Things like i18n language
bundles can get quite big, as can component style files. We will use my own I18N library which supports
multiple bundles which can be dynamically imported. We will also set up our library and supporting system
in a way that makes it easy to compose out of smaller parts. We will be using the `styled` paradigm but rather
than use `styled-componets` or `emotion` we will use `goober`, a neat lightweight alternative.

## A high-level overview

TODO insert diagram

## A first look at goober

Let's take a look at styling a basic component with `goober` using its template string API. 

```JavaScript
TODO
```

This is the most basic usage along with the necessary setup code. As `goober` can be used with mutliple JSX
libraries we need to configure it for React JS. 

## Tokens, themes, elements and components

## Features & considerations

### Aliases

### Colour

Colour can be tricky when it comes to naming. Material Design defines a scale that has gained some traction
but I don't find it very intuitive. My own way is just to use numbers starting from one.

```JavaScript
// Color tokens

color: {
    "accent.1": "...",
    "accent.2": "...",
    
    "text.1": "...",
    "text.2": "...",
    
    "border.1": "...",
    "border.2": "...",
    //....
}
```

In the above, the `accent.1` would be your primary accent colour which is normal used on buttons. Then `accent.2` 
might be an alternative accent colour or simply a variant of `accent.1`, for example, `accent.1` at 50% opacity. 
You might organise these so as the number increases the frequency of the colour decreases. So `text.1` is used
more frequently that `text.2` which would be used more frequently than `text.3` and so on. For greys you might
make `gray.1` be lighter than `gray.2` and so on. 

### Variants (or rather modifiers)

Variants are variations on certain elements. Button is probably the best example as you typical
need more than one variant. The default variant should be your primary `button` which is what you would get
if you just wrote `<Button>Click me</Button>`. Then when you need, say, a danger button you would do something 
like this `<Button variant="danger">Click me</Button>` and get, say, a red `button` instead of your primary
`button`. The issue with using only a single variant name is that it can be awkward when you have a lot of 
variations. For example, sometimes you might want `<Button variant="danger.hollow"/>` and other times you
want `<Button variant="danger.solid"/>`. Then you might want a large button or a small one. I've found that using
`modifiers` is a more elegant way to support this. Modifiers are like mixins that allow you to easily combine
styles to produce your final result. They always modify the primary styles which serve as your
base styles. You would write them like `<Button modifiers="danger hollow large" />` and the element definition 
would look something like this:

```JavaScript
// Button element defintion
button: {
    fontFamily:"primary",
    borderRadius: "sm",
    height:"control.height.primary",
    border: "2px solid",
    borderColor:"accent.1",
    backgroundColor:"accent.1"
    //... lots of base poperties
    modifiers: {
        danger: {
          backgroundColor:"danger.1",
          borderColor:"danger.1"  
        },
        small: {
            height:"control.height.small"
        },
        large: {
            height:"control.height.small"
        },
        hollow: {
            backgroundColor:"transparent"
        }
    }
}

```

With the above, when you specify `<Button modifiers="danger hollow large" />` the final styles will be resolved
to:

```JavaScript 
{
    fontFamily:"primary",
    borderRadius: "sm",
    height:"control.height.large",
    border: "2px solid",
    borderColor:"danger",
    backgroundColor:"transparent"
    //... other props not shown for brevity
}
```
You can achieve the same thing with a variant name like `danger.hollow.large` and by using the JavaScript 
spread operator to avoid duplication in your element styles but modifiers allow you to store all your 
styles in inside a single object tree which is more readable. Also, modifiers give you more flexibility 
as the order of each modifier can alter the final style.

### What kind of Element API do we want?

Another considering is the element API. I've been working with React for over four years and started like this (didn't everyone?):
```JavaScript
<Button primary ml_small uppercase>Click Me</Button>
```
These boolean properties seemed like a good idea but make it hard to reason about your component. Another apporach which
I used is to do something like this

```JavaScript
<Button color={"primary"} ml={"sm"} textTransform={"uppercase"}>Click Me</Button>
```

This beats boolean properties but still has some shortcomings in my view. Here's what I don't like:
1. It adds a lot of noise to the API
2. You often want to use names which are already used by the native elements
3. You can end up with lots of duplication
4. You still can't set state properties like `focus`, `hover` etc. 
5. You need to main a list of all property names and filter them from those which get passed down to the 
   native element to avoid them appearing the DOM
6. The JSX can be harder to read with so many properties

A better approach, in my opinion, is to use a dedicated property for all of your styles like React does with `style`. I call
this `xs` or "custom style". Here's how it would look:

```JavaScript

const ButtonStyle = {
    color:"primary",
    textTransform:"",
    ml:"sm",
}

<Button xs={ButtonStyle}>Click Me</Button>

```

This is much cleaner and for complex components it makes the JSX structure much easier to read. Another benefit is that
it avoid duplication. We often render elements in a group, for example, a toolbar with many buttons, and they
all use the same margins. Using this approach we just write it like this:

```JavaScript

const ButtonStyle = {
    color:"primary",
    textTransform:"uppercase",
    marginLeft:"sm",
}

<Toolbar>
    <Button xs={ButtonStyle}>A</Button>
    <Button xs={ButtonStyle}>B</Button>
    <Button xs={ButtonStyle}>C</Button>
    //...
</Toolbar>

```
Rather than like this which doesn't scale nicely

```JavaScript
<Toolbar>
    <Button color={"primary"} marginLeft={"sm"} textTransform={"uppercase"}>A</Button>
    <Button color={"primary"} marginLeft={"sm"} textTransform={"uppercase"}>B</Button>
    <Button color={"primary"} marginLeft={"sm"} textTransform={"uppercase"}>C</Button>
    //...
</Toolbar>
```
Ok, so we can easily improve the above:

```JavaScript

const ButtonStyle = {
    color:"primary",
    textTransform:"uppercase",
    marginLeft:"sm",
}

<Toolbar>
    <Button {...ButtonStyle}>A</Button>
    <Button {...ButtonStyle}>B</Button>
    <Button {...ButtonStyle}>C</Button>
    //...
</Toolbar>
```
But it still feels cleaner not to use the spread operator. Note: in this example I set the `color` and `textTransform` but 
you should not write code like this. These kinds of properties belong in element definitions. The properties you want
to set through `xs` are normally layout properties like `margin`, `zIndex` and `position` - properties that are specific
to the component or page you are writing. That's another issue with making style properties top-level properties like this:
it encourages you to write code that's harder to maintain. 

While this version above is now quite neat, you don't always start of
like this. You might start like this, which seems innocent enough:

```JavaScript
<Toolbar>
    <Button marginLeft={"sm"}>A</Button>
    <Button marginLeft={"sm"}>B</Button>
    <Button marginLeft={"sm"}>C</Button>
    //...
</Toolbar>

```
And then later add a second property and so on. You may never move these into a single object but by using `xs` you are forced
to organise your code better from the start. 

Another benefit of using the `xs` property is that it can take complex objects like this:

```JavaScript

const ButtonStyle = {
    marginLeft:"sm",
    "&[disabled=true]": {
        opacity:.5
    }
}

```

In our system, when we encounter an object value, it will be one of two things:
1. A responsive value, for example, `{fontSize: {sm:8, md:12} }`
2. A CSS block where the key is a CSS selector like `&[disabled=true]` above.  

When we pass styles via the `xs` property they get merged with the element's styles. This allows us to override
and extend elements. We can also add modifiers to our `xs` prop value. Again, though, you should be trying to 
include as much style as possible in your element definition and not passing it as props. So, while this is possible:

```JavaScript
const ButtonStyle = {
    marginLeft:"sm",
    modifiers: {
        selected: {
            borderColor:"accent.2"
        }
    }
}

<Button modifiers={selected ? "selected" : ""}/>
```
You probably want to move the `selected` modifier styles in your element modifiers. It's still handy to do this some times
in one-off situations though. 

You might be thinking "wait, we're using `styled`, so why not do it like this:"

```JavaScript

const CustomButtom = styled(Button)`
 margin-left: ${props => props.tokens.space.sm};
 &[disabled=true] {
    opacity:.5;
 }
`
```

This solves a lot of problems but means we need to create a lot `styled(X)` elements and accessing token values this
way is ugly. Now that we have CSS Variables we could improve it:

```JavaScript

const CustomButtom = styled(Button)`
 margin-left: var(--space-sm);
 &[disabled=true] {
    opacity:.5;
 }
`
```
But I still think JavaScript objects via the `xs` prop is a better overall solution as they can be type-checked and 
are easy to compose or compute. 

Now that we know we can write nested styles and use selectors, we could write our toolbar example above like this:

```javascript
const ToolbarStyle = {
    button:{
       color:"primary",
       textTransform:"uppercase",
       marginLeft:"sm",
    }
}

<Toolbar xs={ToolbarStyle}>
    <Button>A</Button>
    <Button>B</Button>
    <Button>C</Button>
    //...
</Toolbar>
```

A general rule for writing JSX: fewer props are better. Too many properties is bad for maintenance and readability. 

### The "as" property

Both `reakit` and `goober` support the `as` prop but there are some limitations as noted in the [reakit docs](url). The `as` 
prop can be useful but it can also be overused. I've seen an increase in code like this:

```javascript
<Flex as={"main"}>
    <Flex as={"article"}>
       <Typography as={"h1"}>The title</Typopgraphy>
       <Typography as={"p"}>{content}</Typopgraphy>
    </Flex>
   <Flex as={"aside"}>
      {aside}
   </Flex>
</Flex>
```

It's normally better to have a smaller set of elements but I can't say I like the above. I prefer this instead:

```javascript
<Main>
    <Article>
       <H1>The title</H1>
       <Paragraph>{content}</Paragraph>
    </Article>
   <Aside>
      {aside}
   </Aside>
</Main>
```

They both produce semantic HTML, which is what we want, and they also output structural elements that use `display:flex`, but
the second one is just much nicer to read and requires no extra props. It requires more elements but, as you will see, creating new elements in 
library will be very cheap - a single of code.


### Providing system data with React Context.

In the simple `goober` example we hardcoded our CSS. This is fine, and can be improved easily with CSS Variables,
but we will be using JavaScript objects to hold our elements and theme tokens. We will use the React Context API
to provide access to styles and element definitions. We will wrap our apps and modules in a `SystemProvider`, a React 
`Context.Provider`, but also use a `TokenProvider` and an `ElementProvider` which will give us flexibility which can be 
very useful, as we will see later on. The `SystemProvider` will come with a `useSystem` hook that can give us access to the full
system of elements, tokens, icons and i18n bundles. By also providing a `TokenProvider` we can override tokens on
certain parts our app easily. Some of the most interesting apps, from an aesthetic point of view, mix light and dark 
styles, for example, a dark nav with a light content area. There are naive ways to support this but overriding 
the tokens only for a certain section is a much better solution. It means you can use a single token (theme variable) 
name in the light and dark section for the primary text colour and avoid names like `primary.text.dark.background` 
and having to pass a lot more props around. 

### The i18n property

We will use a higher-order component to enhance our system elements with i18n support. This will add
a single property to our element API. This property will be flexible enough to support all required
scenarios. Here's how it can be used

```javascript

const English = {
    welcome: {
       greeting:"Hello!",
       role:"Intro text",
    },
    hi: (name) => `Hi ${name}`
}

//...

// a key on our i18n bundle which by default will be set as the element's `children` 
<Text i18n={"welcome.greeting"}/>
//produces
<span>Hello!</span>


// an array can be used for multiple properties 
<Text i18n={[
   {"welcome.greeting":"children"},
   {"welcome.role":"role"}
]}/>
//produces
<span role={"Intro text"}>Hello!</span>

// args can be passeed
<Text i18n={{hi: "children", args:["Mike"]}}/>
//produces
<span>Hi Mike</span>
```

We wont write the i18n library and will use a library I created already. This library supports
hierarchical language bundles which can be lazily loaded and also supports markdown rules which you can
extend and override easily. This is required to keep the JSX clean (yes, I mention clean JSX a lot!). So, instead
of something like this, which I find quite ugly:

```javascript
<div>{t('simpleContent')}</div>
<Trans i18nKey="userMessagesUnread" count={count}>
  Hello <strong title={t('nameTitle')}>{{name}}</strong>, you have {{count}} unread message(s). 
   <Link to="/msgs">Go to messages</Link>.
</Trans>
```

We would write this:

````javascript
const English = {
   simpleContent:"Some simple content",
   userMessagesUnread:(name, count) => `Hello **${name}**, you have ${count} unread message(s).`,
   nameTitle:"The name"
}


<Row i18n="simpleContnet"/>
<Text i18n={[
   {userMessagesUnread: "children", args:["Mike", 2]},
   {nameTitle:"title"}
]}>
   <Link to="/msgs">Go to messages</Link>.
</Text>

//Produces
<span>Some simple content</span>
<span>Hello <strong title="The name">Mike</strong>, you have 2 unread message(s). <a href="/msgs">Go to messages.</a></span>

````

The JSX is cleaner but there is another benefit: we don't directly depend on a specific i18n library which needs
to be imported into every file. If we decide to replace our i18n library later we can just update
the higher-order component. 

### Icons

We will support named icons in our system. We are just going to use icon fonts rather than
SVGs, even though there are some nice benefits when using the latter. Our system will include
an icon element that can be used like so:

```javascript
<Icon name={"search"}/>
```
We will also have an `IconProvider` component that stores the icons in our system. 

### The Resolver function

This does most of the work, including:

1. Token value lookups, for example, `fontSize:"sm"` to `fontSize:12`
2. Merging of styles from props with base element styles
3. De-aliasing of properties, for example, `size:100%` to `width:100%, height:100%` 
4. Converting values, for example, `fontSize:16` to `font-size:16px`
5. Converting the final styles to valid CSS to pass to `goober`, including `@media` queries

## A complete Hello World example 