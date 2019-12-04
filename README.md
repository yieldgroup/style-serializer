## 🥰 StyleSerializer

<a href="https://github.com/yieldgroup/style-serializer/actions"><img alt="Build Status" src="https://github.com/yieldgroup/style-serializer/workflows/Build/badge.svg?color=green" /></a><img src="https://img.shields.io/david/yieldgroup/style-serializer.svg" /> <a href="https://david-dm.org/yieldgroup/style-serializer?type=dev"><img src="https://img.shields.io/david/dev/yieldgroup/style-serializer.svg" /></a><img src="https://api.dependabot.com/badges/status?host=github&repo=yieldgroup/style-serializer" />

StyleSerializer is a tiny library with just two functions: `cssStringToObject` and `cssObjectToString`. The first, `cssStringToObject`, makes it easy to convert strings like `"border-top: 1px solid red; width: 100px;"` into a JavScript object literal like `{borderTop: "1px solid red", width: "100px" }`. You can reverse the process with `cssObjectToString`.

## 📦 Getting Started

### Installation

StyleSerializer is distributed using the Universal Module Definition (UMD) pattern, so it will work in browsers as well as server-side. Add it to your project with

```
yarn add style-serializer
```

### Using `import`

If you're using Webpack or a similar tool that supports `import`, you can import the individual methods:

```js
import { cssStringToObject, cssObjectToString } from "style-serializer";
```

or import the default object, which is just a wrapper around the two methods:

```js
import StyleSerializer from "style-serializer";

// then call the method you like
StyleSerializer.cssStringToObject(yourString);
StyleSerializer.cssObjectToString(yourObject);
```

### Using in a browser

Some users may need to use this outside of build tools like Webpack. If you'd like a global variable, you can load the `build/index.js` via script tag and access the methods from `window.StyleSerializer`.

```html
<script src="style-serializer/build/index.js"></script>
<script>
  window.StyleSerializer.cssStringToObject(yourString);
</script>
```

## ⭐️ Documentation

It's really simple!

### `cssStringToObject`

```js
cssStringToObject("border-top: 1px solid red; width: 100px;")
// returns an object literal
{
  borderTop: "1px solid red",
  width: "100px"
}
```

You can skip camel-case conversion and keep the hyphens in property names with `{ useCamelCase: false }` as the second argument:

```js
cssStringToObject("border-top: 1px solid red; width: 100px;", { useCamelCase: false })
// returns an object literal with hyphenated property names
{
  "border-top": "1px solid red",
  width: "100px"
}
```

### `cssObjectToString`

```js
cssObjectToString({
  border: "1px solid red",
  width: "100px"
});
// returns a string
"border: 1px solid red; width: 100px;"
```

## 💎 Credits

This was built by the team at <a href="https://yieldgroup.co">Yield Group</a>. We help mid-market companies build data-driven growth engines.

This project used [@hogdef's JS lib boilerplate](https://github.com/hodgef/js-library-boilerplate-basic) to handle initial setup. It's really nice, check it out.

This project is licenced under the MIT License, see LICENSE for more details. Copyright (c) 2019 Yield Group
