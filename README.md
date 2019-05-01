## Synopsis

[Indium.js](http://indiumjs.lcluber.com) is a touch gestures library written in TypeScript with multiple touches detection.

## Motivation

The purpose of this library is to provide a simple and easy way to add touch gestures to your app.

## Installation

### NPM

```bash
$ npm install @lcluber/indiumjs
```

### Yarn

```bash
$ yarn add @lcluber/indiumjs
```

## Demo

See a basic example **[here](http://vortalcombat.roostrjs.com)**.

## Usage

### ES6

```html
<canvas id="myCanvas"></canvas>
```

```javascript
import { Screen } from '@lcluber/indiumjs';

function shipMove(touch) {
  console.log('touch',touch);
}

function shipStop(touch) {
  console.log('end',touch);
}

var touchScreen = new Screen('myCanvas');
touchScreen.touchStart(shipMove);
touchScreen.touchMove(shipMove);
touchScreen.touchEnd(shipStop);
touchScreen.touchCancel(shipStop);

```

### IIFE

```html
<script src="node-modules/@lcluber/indiumjs/dist/indium.iife.min.js"></script>

<canvas id="myCanvas"></canvas>
```

```javascript
function shipMove(touch) {
  console.log('touch',touch);
}

function shipStop(touch) {
  console.log('end',touch);
}

var touchScreen = new Indium.Screen('myCanvas');
touchScreen.touchStart(shipMove);
touchScreen.touchMove(shipMove);
touchScreen.touchEnd(shipStop);
touchScreen.touchCancel(shipStop);
```

## API Reference

```javascript

Screen.touchStart(callback: Function);
Screen.touchMove(callback: Function);
Screen.touchEnd(callback: Function);
Screen.touchCancel(callback: Function);

```

## Tests

No tests to run yet

## Contributors

There is still a lot of work to do on this project and I would be glad to get all the help you can provide.
To contribute you can clone the project on **[GitHub](https://github.com/LCluber/Indium.js)** and see  **NOTICE.md** for detailed installation walkthrough of the project.

## License

MIT License

Copyright (c) 2016 Ludovic CLUBER

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
