## How to organise colour in your websites and apps

I always had a hard time naming colour variables in my themes on the apps I've made in the past. It starts off simple enough with variable names like `primary-text-color`, `muted-text-color` etc but quickly gets tricky once you have different background colours for, say, an alert box component or on your navigation panel. If your content is on a light background but your navigation is using a dark background, then what do you call the text colour used on the navigation panel? If you poke around github you will find people use names like `light-text-color` and `dark-text-color` etc and then choose one based on the background colour, but two colours is often not enough to achieve good contrast against all of your background colours. 

### What the Material Design spec says

If you read the [colour guidelines section of the Material Design spec](https://material.io/design/color/the-color-system.html#color-theme-creation) then you will see they talk about "on colours". Imagine you're working for an eco-friendly company whose primary colour is a clichéd green. They use this green on the navigation section but the main content is on a light background. On the navigation, the main text colour is whitish but on the content it is dark. Following the Material Design guidelines we would call the main text colour on the content `primary-text-color` and then call the main text colour on the navigation `primary-text-on-primary-color` which is the primary text when used on top of the theme's primary colour. This gives us a consistent way to name our colours, but it still suffers from problems.

The problem with creating with "on colours" like `primary-text-on-primary-color`, `primary-text-on-danger-color` etc is mostly related to maintenance. As a general rule, the more names you have the harder maintenance will be because you will need to apply these names across various parts of your site to override default styles.

Typically, an app will contain components like this:

```css

.alert-box {
  padding: var(--space-2);
}

.alert-box.danger {
  color: var(--primary-text-on-danger-color);
  background-color: var(--danger-color);
}

.alert-box.info {
  color: var(--primary-text-on-info-color);
  background-color: var(--info-color);
}

.button {
  padding: var(--space-1) var(--space-2);
  cursor: pointer;
}

.button.danger {
  color: var(--primary-text-on-danger-color);
  background-color: var(--danger-color);
}

// and so on ...

```
You would then use these colours in your site like so:

```html

<div class='alert-box info'>
  ⓘ Remember to enable your notifications
</div>

<button class='button danger'>
  Delete me
</button>

```

### A theme should have more than one palette

Your app's themes normally only contain a single *flat* colour palette but for non-trivial apps you actually have *several* palettes or "colour contexts". In my opinion, it's better to see each context as a palette in its own right and stick to the smallest number of colour names as possible. This is conceptually simpler, scales much better and allows you to reuse components more easily.

Here's how it might look using CSS variables:

```css

/** our main theme styles **/
:root {
  --primary-text-color: black;
  --background-color: white;
 
  /** other colours and styles omitted for brevity **/
}

/** apply global styles **/
body {
  color: var(--primary-text-color);
  background: var(--background-color);
}

.dark-palette {
  --primary-text-color: white;
  --background-color: black;
}

.info-palette {
  --primary-text-color: white;
  --background-color: blue;
}

.danger-palette {
  --primary-text-color: white;
  --background-color: red;
}

/** key benefit: we don't need any component-level colour variants below **/

.button {
  color: var(--primary-text-color);
  background-color: var(--background-color);
}

.button:hover {
  filter: brightness(120%);
}

.button:active {
  filter: brightness(80%);
}

// and so on...

```

We would then use this theme like so:

```html

<button class='button info-palette'>
  Click me
</button>

```

This looks similar to our first version but our `button` component CSS is much simpler and the `info-palette` is now easy to reuse. If we also want an `info-alert` component we can add one with only this:

```html

<style>
.alert-box {
  padding: var(--space-2);
}
</style>

<div class='alert-box info-palette'>
  ⓘ Remember to enable your notifications
</div>
```

Need a danger alert? You already have one:

```html
<div class='alert-box danger-palette'>
  ⚠ We will be offline for maintenance at 22.45 local time.
</div>
```

What we've done here is lifted specific (concrete) colours out of our components and made each palette a reusable piece of style logic. This allows us to plug-in the colours at whatever level we like in our codebase. Imagine your web app is made up of sections and the designer wants to really emphasise a certain section. They decide to make it use the info colour palette. All you need to do is this:

```html
<section class='info-palette'>
  /** lots of content here **/
</section>

```

When the product owner says "This should be more of a warning than an info". You just need to do this:

```html
<section class='warning-palette'>
  /** lots of content here **/
</section>

```

### In Summary

To recap, the general features of this pattern are:

1. See your theme as containing a collection of colour palettes instead of a single colour palette, and extract those palettes into reusable chunks. Here I am using CSS variables, but you can do this with the many CSS-in-JS libraries too.
2. When the `background-color` changes you generally need a new palette.
3. Only reference variables in your components and never specific colours like blue, orange etc.

The benefits of this approach are:

1. The cost of maintenance is lower.
2. Code reuse is much easier - just drop your components anywhere and they reflect the active palette.
3. It's conceptually simpler - you don't need complex colour names when the context changes (see notes)
4. Creating a dark theme is easier because there are fewer colours in fewer places that need to be redefined. 

### Notes

I've kept the colours to a minimum above for the sake of brevity. In a non-trivial app, you would need more variables. This would be a good starting point:

```css

:root {
  /** default text color which gets inherited from body **/
  --primary-text-color: ...,

    /** used for non-primary text **/
  --muted-text-color: ...,
 
  /** default background for content **/
  --background-color: ...,
 
  /** brand colour that's often used on backgrounds e.g. the nav background **/
  --primary-color: ...,

  /** optional but common: can be used for action buttons and active, input borders etc **/
  --accent-color: ...,
 
  /** used for dividers and input borders **/
  --divider-color:...,
}

```
You don't need to redefine all of these in each palette as most palettes won't need all of them. Typically, the `primary-text-color` and `background-color` would be required but the others depend on context.

Some websites go crazy with colour (see Amazon's product page, for example) so you would need more variables than what's above, but the multi-palette approach can still be used.

Final word: I've used info and danger contexts above, but you can create palettes for anything, including form inputs, selected nav items and active links. 
