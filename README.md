## Synopsis

**Indium.js** is a touch gestures library written in TypeScript with multiple touches detection.

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
import { TouchScreen, Right } from '@lcluber/indiumjs';

function shipMove(touch) {
  console.log('touch',touch);
}

function shipStop(touch) {
  console.log('end',touch);
}

function shipShoot(touch) {
  console.log('shoot',touch);
}

var touchScreen = new TouchScreen('myCanvas');
touchScreen.touchStart(shipMove);
touchScreen.touchMove(shipMove);
touchScreen.touchEnd(shipStop);
touchScreen.touchCancel(shipStop);

var bottom = new Right(0.3);
bottom.touchStart(shipShoot);
touchScreen.addZone(bottom);

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

function shipShoot(touch) {
  console.log('shoot',touch);
}

var touchScreen = new Indium.TouchScreen('myCanvas');

touchScreen.touchStart(shipMove);
touchScreen.touchMove(shipMove);
touchScreen.touchEnd(shipStop);
touchScreen.touchCancel(shipStop);

var bottom = new Indium.Right(0.3);
bottom.touchStart(shipShoot);
touchScreen.addZone(bottom);

```

## API Reference

```javascript
type TZone = Top | Right | Bottom | Left;

TouchScreen.touchStart(callback: Function);
TouchScreen.touchMove(callback: Function);
TouchScreen.touchEnd(callback: Function);
TouchScreen.touchCancel(callback: Function);
touchScreen.addZone(zone: TZone);

Top.touchStart(callback: Function);
Top.touchMove(callback: Function);
Top.touchEnd(callback: Function);
Top.touchCancel(callback: Function);

Left.touchStart(callback: Function);
Left.touchMove(callback: Function);
Left.touchEnd(callback: Function);
Left.touchCancel(callback: Function);

Right.touchStart(callback: Function);
Right.touchMove(callback: Function);
Right.touchEnd(callback: Function);
Right.touchCancel(callback: Function);

Bottom.touchStart(callback: Function);
Bottom.touchMove(callback: Function);
Bottom.touchEnd(callback: Function);
Bottom.touchCancel(callback: Function);

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
