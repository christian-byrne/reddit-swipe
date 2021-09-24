# Swipe Away Reddit Chrome Extension

My first Chrome extension.

### Reason for Making

I was using a custom block list with uBlock Origin (TODO add link) and injectable JS with (TODO add link) extension that I was using to customize my reddit experience. So I decided to package it all into an extension to see what making an extension would be like and to see if I could improve the performance of those processes

### Development Process

<details>
    <summary>Click to Expand</summary>

**1 - Writing DOM JS Functions**

I created a new, empty chrome user directory and then started Chrome from terminal with `--user-dir` option -- so that I could test on a browser with no customizations or extensions already present.

Then I started by just writing JavaScript in the chrome DevTools console while on Reddit. Writing functions one by one and copying them to a text editor once they were working.

This is a really fun way to code because you can execute every line and constantly test things by referencing variables you previously defined. Then you can just refresh the page and paste in all the saved code you have so far. In the short term, you can just use 1-character identifiers to save time. You can just type a variable's name and see what it references, and test out its different methods. 

And then there are a bunch of added features in DevTools which are very helpful, like `getEventListeners`. Not to mention all the other features/tabs that let you deconstruct a DOM element and see every single thing about it and the interfaces it inhertis from, as well as abreakdown of its lexical scopes and scope chain, and so on. 

Whenever I use DevTools and I need to change the window to an iframe (e.g., to change the speed of an embedded video whose player doesnt have speed options -- AKA the video lectures from my university), I notice that some of my extensions have their own iframe which sits below the main window. So this is how I assume an extension will work to a certain extent. But it will also somehow have the ability to send messages or interact with the DOM of the main window, which an iframe normally does not have. So maybe there is some shared limbo context that maintains the security of iframes but also allows extensions to have read/write permissions. I guess Google would not even necessarily have the power to give extension devs access to servers from a separate origin.  

**2 - CSS of Added Elements**

The CSS properties of the added elements were also easy to test using Chrome DevTools. I would just write the function that added the element without any style properties set, then do all the CSS in DevTools so I could test interactively what values to set. It is nice because you can scroll through the options list (which almost all CSS properties have) and see each option applied to the element as you scroll. It's kind of a crutch, becasue you never really need to learn how the main CSS properties work if you always do this. 

The property/value key/value set that I arrived upon would go into objects in the functions that created new elements.

I also used the inspect `Ctrl+Shift+C` tool to find reference elements that I could query in order to find what the appropriate dimensions and font sizes were -- since many page elements on reddit were auto-sized, I couldn't rely on a grid or fixed CSS definitions. E.g, the height of each post/entry on old Reddit is based on the thumbnail -- which has padding and margins based on whether it is a default text post or a post with a picture/thumbnail. So, to get the height of the post object, I had to use `window.getComputedStyle` with some conditions and then do the math manually to determine the CSS values to use. Like this:

```javascript
let style = {
  paddingTop: `${window.getComputedStyle(this.main).height * .33}`,
};
```

I always create generalized functions that allow me to easily create elements and then stylize them with a style map object. That is always one of the first things to get refactored anyway. Like this:

```javascript
styleElement = (el, styleProps) => {
  for (const [property, value] of Object.entries(styleProps)) {
    el.style[property] = value;
  }
};

addHideText = () => {
  let txt = document.createElement("div");
  this.styleElement(txt, { height: "100%", lineHeight: "33%" });
};
```

I had to calculate fixed sizing before creating sub-elements for all the posts. 

I used a gradient with fixed attachment and no-repeat attributes so that I could have a gradient spanning across all the appended elements on the page -- which was the cleanest way to visually indicating separation as with tables in a an Excel worksheet (compared with standard methods of using alternating colors or borders).

```javascript
...
    background: "linear-gradient(to bottom, #f64f59, #c471ed, #12c2e9)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
...
```

I found the gradient colors by just browsing the submissions of a gradient challenge on CodePen.




**3 - Element Classes**

I created a Class template for posts, so that I only had to calculate the post's properties, lookup its children/attributes, and create its appeneded elements one time. I did the same for the whole page.

I made most values overridable by an `options` argument in the constructors -- using `Object.assign()` on a default options object then on the instance itself, like how I see most people do it. This is something I always do even though most of the time it doesn't end up being used because my projects are small and quickly abandoned. It just makes it easier to add customization options later on -- and easier to add features for user customization overrides. On the other hand, it is bad for type safety. I am using Java in my programming classes at univeristy this semester, and have been using TypeScript for side projects, so I am learning why it is not good practice. But for now I still like the idea of it. 

**4 - Element Zapper and Minifier**

I just converted my uBlock static filter list to a JS array using vim search and replace, then added a function which collected all the elements from the queries and removed them. I used the element remove function that I found a long time ago which is apparently the fastest way to recursively remove DOM nodes.

The raw ublock static filter list can be [found here](./ublock-filters.txt).

**5 - Packaging as Extension**

I followed the [offical Chrome tutorial](https://developer.chrome.com/docs/extensions/mv3/getstarted/) for making a Chrome Extension. 

https://developer.chrome.com/docs/extensions/mv3/devguide/



**6 - Creating Chrome Extension Manifest**


**7 - Testing on Different Devices**

https://developer.chrome.com/docs/extensions/mv3/content_scripts/

https://developer.chrome.com/docs/extensions/mv3/content_scripts/#functionality

**8 - Publishing to Chrome Webstore**

https://developer.chrome.com/docs/extensions/mv3/hosting/


</details>

Sep 24, 2021
