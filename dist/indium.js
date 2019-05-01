/** MIT License
* 
* Copyright (c) 2013 Ludovic CLUBER 
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
* http://indiumjs.lcluber.com
*/

import { Dom } from '@lcluber/weejs';

class TouchStart {
    constructor(callback) {
        this.maxDuration = 300;
        this.minDuration = 30;
        this.maxMovement = 30;
        this.callback = callback;
    }
    trigger(touchHandler) {
        this.callback(touchHandler);
    }
}

class TouchMove {
    constructor(callback) {
        this.maxDuration = 300;
        this.minDuration = 30;
        this.maxMovement = 30;
        this.callback = callback;
    }
    trigger(touchHandler) {
        this.callback(touchHandler);
    }
}

class TouchEnd {
    constructor(callback) {
        this.maxDuration = 300;
        this.minDuration = 30;
        this.maxMovement = 30;
        this.callback = callback;
    }
    trigger(touchHandler) {
        this.callback(touchHandler);
    }
}

class TouchCancel {
    constructor(callback) {
        this.maxDuration = 300;
        this.minDuration = 30;
        this.maxMovement = 30;
        this.callback = callback;
    }
    trigger(touchHandler) {
        this.callback(touchHandler);
    }
}

class Tap {
    constructor(callback) {
        this.maxDuration = 300;
        this.minDuration = 30;
        this.maxMovement = 30;
        this.callback = callback;
    }
    trigger(touchHandler) {
        this.callback(touchHandler);
    }
}

class DoubleTap {
    constructor(callback) {
        this.maxDuration = 750;
        this.minDuration = 100;
        this.maxMovement = 30;
        this.callback = callback;
    }
    trigger(touchHandler) {
        this.callback(touchHandler);
    }
}

class Press {
    constructor(callback) {
        this.maxDuration = 0;
        this.minDuration = 750;
        this.maxMovement = 0;
        this.callback = callback;
    }
    trigger(touchHandler) {
        this.callback(touchHandler);
    }
}

/** MIT License
* 
* Copyright (c) 2011 Ludovic CLUBER 
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
* http://type6js.lcluber.com
*/

class Utils {
    static round(x, decimals) {
        decimals = Math.pow(10, decimals);
        return Math.round(x * decimals) / decimals;
    }
    static floor(x, decimals) {
        decimals = Math.pow(10, decimals);
        return Math.floor(x * decimals) / decimals;
    }
    static ceil(x, decimals) {
        decimals = Math.pow(10, decimals);
        return Math.ceil(x * decimals) / decimals;
    }
    static trunc(x, decimals) {
        decimals = Math.pow(10, decimals);
        let v = +x * decimals;
        if (!isFinite(v)) {
            return v;
        }
        return ((v - v % 1) / decimals) || (v < 0 ? -0 : v === 0 ? v : 0);
    }
    static roundToNearest(x, nearest) {
        return Math.round(x / nearest) * nearest;
    }
    static mix(x, y, ratio) {
        return (1 - ratio) * x + ratio * y;
    }
    static sign(x) {
        return x ? x < 0 ? -1 : 1 : 0;
    }
    static opposite(x) {
        return -x;
    }
    static clamp(x, min, max) {
        return Math.min(Math.max(x, min), max);
    }
    static normalize(x, min, max) {
        return (x - min) / (max - min);
    }
    static lerp(normal, min, max) {
        return (max - min) * normal + min;
    }
    static map(x, sourceMin, sourceMax, destMin, destMax) {
        return this.lerp(this.normalize(x, sourceMin, sourceMax), destMin, destMax);
    }
    static isEven(x) {
        return !(x & 1);
    }
    static isOdd(x) {
        return x & 1;
    }
    static isOrigin(x) {
        return (x === 0) ? true : false;
    }
    static isPositive(x) {
        return x >= 0 ? true : false;
    }
    static isNegative(x) {
        return x < 0 ? true : false;
    }
    static validate(x) {
        return isNaN(x) ? 0.0 : x;
    }
}

class Trigonometry {
    static init() {
        Trigonometry.createRoundedPis();
        Trigonometry.createFactorialArray();
    }
    static createRoundedPis() {
        let decimals = 2;
        this.pi = Utils.round(Math.PI, decimals);
        this.twopi = Utils.round(Math.PI * 2, decimals);
        this.halfpi = Utils.round(Math.PI * 0.5, decimals);
    }
    static createFactorialArray() {
        let maxSin = this.sineLoops[this.sineLoops.length - 1] * 3;
        let maxCos = this.cosineLoops[this.cosineLoops.length - 1] * 2;
        for (let i = 1, f = 1; i <= Math.max(maxSin, maxCos); i++) {
            f *= this.factorial(i);
            this.factorialArray.push(f);
        }
    }
    static factorial(i) {
        return i > 1 ? (i - 1) : 1;
    }
    static setSinePrecision(value) {
        if (value < this.sineLoops.length) {
            this.sineDecimals = value;
            return value;
        }
        this.sineDecimals = 2;
        return 2;
    }
    static setCosinePrecision(value) {
        if (value < Trigonometry.cosineLoops.length) {
            this.cosineDecimals = value;
            return value;
        }
        this.cosineDecimals = 2;
        return 2;
    }
    static setArctanPrecision(value) {
        if (value < Trigonometry.arctanLoops.length) {
            this.cosineDecimals = value;
            return value;
        }
        this.arctanDecimals = 2;
        return 2;
    }
    static degreeToRadian(degree) {
        return degree * this.pi / 180;
    }
    static radianToDegree(radian) {
        return radian * 180 / this.pi;
    }
    static normalizeRadian(angle) {
        if (angle > this.pi || angle < -this.pi) {
            return angle - this.twopi * Math.floor((angle + this.pi) / this.twopi);
        }
        return angle;
    }
    static sine(angle) {
        angle = this.normalizeRadian(angle);
        if (Trigonometry.sineDecimals <= 2 && (angle < 0.28 && angle > -0.28)) {
            return angle;
        }
        else {
            return this.taylorSerie(3, Trigonometry.sineLoops[this.sineDecimals], angle, angle, true);
        }
    }
    static cosine(angle) {
        angle = this.normalizeRadian(angle);
        var squaredAngle = angle * angle;
        if (this.cosineDecimals <= 2 && (angle <= 0.5 && angle >= -0.5)) {
            return 1 - (squaredAngle * 0.5);
        }
        else {
            return this.taylorSerie(2, Trigonometry.cosineLoops[this.cosineDecimals], 1, angle, true);
        }
    }
    static arctan2(x, y) {
        let angle = y / x;
        if (x > 0) {
            return this.arctan(angle);
        }
        else if (x < 0) {
            if (y < 0) {
                return this.arctan(angle) - this.pi;
            }
            else {
                return this.arctan(angle) + this.pi;
            }
        }
        else {
            if (y < 0) {
                return -this.halfpi;
            }
            else if (y > 0) {
                return this.halfpi;
            }
            else {
                return false;
            }
        }
    }
    static arctan2Vector2(vector2) {
        return this.arctan2(vector2.x, vector2.y);
    }
    static arctan(angle) {
        let loops = Trigonometry.arctanLoops[this.arctanDecimals];
        if (angle < 1 && angle > -1) {
            return this.taylorSerie(3, loops, angle, angle, false);
        }
        else {
            if (angle >= 1) {
                angle = 1 / angle;
                return -(this.taylorSerie(3, loops, angle, angle, false) - this.halfpi);
            }
            else {
                angle = -1 / angle;
                return this.taylorSerie(3, loops, angle, angle, false) - this.halfpi;
            }
        }
    }
    static sineEquation(amplitude, period, shiftX, shiftY) {
        return amplitude * this.sine(period + shiftX) + shiftY;
    }
    static cosineEquation(amplitude, period, shiftX, shiftY) {
        return amplitude * this.cosine(period + shiftX) + shiftY;
    }
    static arctanEquation(amplitude, period, shiftX, shiftY) {
        return amplitude * this.arctan(period + shiftX) + shiftY;
    }
    static taylorSerie(start, max, x, angle, needFactorial) {
        let squaredAngle = angle * angle;
        let result = x;
        let denominator = 0;
        let sign = -1;
        for (let i = 0; start <= max; start += 2, i++) {
            x *= squaredAngle;
            denominator = needFactorial ? this.factorialArray[start] : start;
            result += x / denominator * sign;
            sign = Utils.opposite(sign);
        }
        return result;
    }
}
Trigonometry.sineLoops = [
    9,
    11,
    13,
    15,
    17,
    18,
    19,
    21,
    23
];
Trigonometry.cosineLoops = [
    6,
    8,
    10,
    12,
    14,
    16,
    18,
    20,
    22
];
Trigonometry.arctanLoops = [
    17,
    19,
    21,
    23,
    25,
    27,
    29,
    31,
    33
];
Trigonometry.sineDecimals = 2;
Trigonometry.cosineDecimals = 2;
Trigonometry.arctanDecimals = 2;
Trigonometry.factorialArray = [];
Trigonometry.init();

class Bezier {
    static quadratic(p0, p1, p2, t) {
        let oneMinusT = 1 - t;
        return Math.pow(oneMinusT, 2) * p0 +
            oneMinusT * 2 * t * p1 +
            t * t * p2;
    }
    static cubic(p0, p1, p2, p3, t) {
        let oneMinusT = 1 - t;
        let tByT = t * t;
        return Math.pow(oneMinusT, 3) * p0 +
            Math.pow(oneMinusT, 2) * 3 * t * p1 +
            oneMinusT * 3 * tByT * p2 +
            tByT * t * p3;
    }
}

class Vector2 {
    constructor(x, y) {
        this._x = 0.0;
        this._y = 0.0;
        this.x = x || 0.0;
        this.y = y || 0.0;
    }
    set x(x) {
        this._x = Utils.validate(x);
    }
    get x() {
        return this._x;
    }
    set y(y) {
        this._y = Utils.validate(y);
    }
    get y() {
        return this._y;
    }
    isOrigin() {
        return (Utils.isOrigin(this.x) && Utils.isOrigin(this.y)) ? true : false;
    }
    isNotOrigin() {
        return (!Utils.isOrigin(this.x) || !Utils.isOrigin(this.y)) ? true : false;
    }
    isPositive() {
        return (Utils.isPositive(this.x) && Utils.isPositive(this.y)) ? true : false;
    }
    isNegative() {
        return (Utils.isNegative(this.x) && Utils.isNegative(this.y)) ? true : false;
    }
    fromArray(array, offset) {
        if (offset === undefined) {
            offset = 0;
        }
        this.x = array[offset];
        this.y = array[offset + 1];
        return this;
    }
    toArray() {
        return [this.x, this.y];
    }
    toString() {
        return '(x = ' + this.x + ';y = ' + this.y + ')';
    }
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    copy(vector2) {
        this.x = vector2.x;
        this.y = vector2.y;
        return this;
    }
    origin() {
        this.x = 0.0;
        this.y = 0.0;
        return this;
    }
    setAngle(angle) {
        if (Utils.validate(angle)) {
            let length = this.getMagnitude();
            this.x = Trigonometry.cosine(angle) * length;
            this.y = Trigonometry.sine(angle) * length;
        }
        return this;
    }
    getAngle() {
        return Math.atan2(this.y, this.x);
    }
    getMagnitude() {
        return Math.sqrt(this.getSquaredMagnitude());
    }
    getSquaredMagnitude() {
        return this.x * this.x + this.y * this.y;
    }
    getDistance(vector2) {
        this.subtract(vector2);
        let magnitude = this.getMagnitude();
        this.add(vector2);
        return magnitude;
    }
    getSquaredDistance(vector2) {
        this.subtract(vector2);
        let squaredMagnitude = this.getSquaredMagnitude();
        this.add(vector2);
        return squaredMagnitude;
    }
    quadraticBezier(p0, p1, p2, t) {
        this.x = Bezier.quadratic(p0.x, p1.x, p2.x, t);
        this.y = Bezier.quadratic(p0.y, p1.y, p2.y, t);
        return this;
    }
    cubicBezier(p0, p1, p2, p3, t) {
        this.x = Bezier.cubic(p0.x, p1.x, p2.x, p3.x, t);
        this.y = Bezier.cubic(p0.y, p1.y, p2.y, p3.y, t);
        return this;
    }
    add(vector2) {
        this.x += vector2.x;
        this.y += vector2.y;
        return this;
    }
    addScalar(scalar) {
        this.x += scalar;
        this.y += scalar;
        return this;
    }
    addScaledVector(vector2, scalar) {
        this.x += vector2.x * scalar;
        this.y += vector2.y * scalar;
        return this;
    }
    addVectors(v1, v2) {
        this.x = v1.x + v2.x;
        this.y = v1.y + v2.y;
        return this;
    }
    subtract(vector2) {
        this.x -= vector2.x;
        this.y -= vector2.y;
        return this;
    }
    subtractScalar(scalar) {
        this.x -= scalar;
        this.y -= scalar;
        return this;
    }
    subtractScaledVector(vector2, scalar) {
        this.x -= vector2.x * scalar;
        this.y -= vector2.y * scalar;
        return this;
    }
    subtractVectors(v1, v2) {
        this.x = v1.x - v2.x;
        this.y = v1.y - v2.y;
        return this;
    }
    scale(value) {
        this.x *= value;
        this.y *= value;
        return this;
    }
    scaleVector(v1, value) {
        this.x = v1.x * value;
        this.y = v1.y * value;
        return this;
    }
    multiply(vector2) {
        this.x *= vector2.x;
        this.y *= vector2.y;
        return this;
    }
    multiplyScaledVector(vector2, scalar) {
        this.x *= vector2.x * scalar;
        this.y *= vector2.y * scalar;
        return this;
    }
    multiplyVectors(v1, v2) {
        this.x = v1.x * v2.x;
        this.y = v1.y * v2.y;
        return this;
    }
    divide(vector2) {
        this.x /= vector2.x;
        this.y /= vector2.y;
        return this;
    }
    divideScaledVector(vector2, scalar) {
        this.x /= vector2.x * scalar;
        this.y /= vector2.y * scalar;
        return this;
    }
    divideVectors(v1, v2) {
        this.x = v1.x / v2.x;
        this.y = v1.y / v2.y;
        return this;
    }
    halve() {
        this.x *= 0.5;
        this.y *= 0.5;
        return this;
    }
    max(vector2) {
        this.x = Math.max(this.x, vector2.x);
        this.y = Math.max(this.y, vector2.y);
        return this;
    }
    min(vector2) {
        this.x = Math.min(this.x, vector2.x);
        this.y = Math.min(this.y, vector2.y);
        return this;
    }
    maxScalar(scalar) {
        this.x = Math.max(this.x, scalar);
        this.y = Math.max(this.y, scalar);
        return this;
    }
    minScalar(scalar) {
        this.x = Math.min(this.x, scalar);
        this.y = Math.min(this.y, scalar);
        return this;
    }
    maxAxis() {
        return (this.y > this.x) ? 'y' : 'x';
    }
    minAxis() {
        return (this.y < this.x) ? 'y' : 'x';
    }
    setOppositeAxis(axis, value) {
        if (axis === 'y') {
            this.x = value;
        }
        else {
            this.y = value;
        }
        return this;
    }
    normalize() {
        let length = this.getMagnitude();
        if (length && length != 1) {
            this.scale(1 / length);
        }
        return this;
    }
    normalizeVector(v) {
        this.copy(v);
        return this.normalize();
    }
    absolute() {
        this.x = Math.abs(this.x);
        this.y = Math.abs(this.y);
        return this;
    }
    absoluteVector(v) {
        this.x = Math.abs(v.x);
        this.y = Math.abs(v.y);
        return this;
    }
    opposite() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }
    oppositeVector(v) {
        this.x = -v.x;
        this.y = -v.y;
        return this;
    }
    clamp(rectangle) {
        this.x = Utils.clamp(this.x, rectangle.topLeftCorner.x, rectangle.bottomRightCorner.x);
        this.y = Utils.clamp(this.y, rectangle.topLeftCorner.y, rectangle.bottomRightCorner.y);
        return this;
    }
    lerp(normal, min, max) {
        this.x = Utils.lerp(normal, min.x, max.x);
        this.y = Utils.lerp(normal, min.y, max.y);
        return this;
    }
    dotProduct(vector2) {
        return this.x * vector2.x + this.y * vector2.y;
    }
}

class Swipe {
    constructor(callback) {
        this.maxDuration = 750;
        this.minDuration = 30;
        this.maxMovement = 0;
        this.absoluteDirection = new Vector2();
        this.callback = callback;
    }
    trigger(touchHandler) {
        this.callback(touchHandler);
    }
    getDirection(direction) {
        this.absoluteDirection.absoluteVector(direction);
        return this.absoluteDirection.x >= this.absoluteDirection.y ? (this.absoluteDirection.x > 0 ? 'Left' : 'Right') : (this.absoluteDirection.y > 0 ? 'Up' : 'Down');
    }
}

class Zone {
    constructor() {
        this.gestures = {};
    }
    touchStart(callback) {
        this.gestures.touchStart = new TouchStart(callback);
    }
    touchMove(callback) {
        this.gestures.touchMove = new TouchMove(callback);
    }
    touchEnd(callback) {
        this.gestures.touchEnd = new TouchEnd(callback);
    }
    touchCancel(callback) {
        this.gestures.touchCancel = new TouchCancel(callback);
    }
    tap(callback) {
        this.gestures.tap = new Tap(callback);
    }
    doubleTap(callback) {
        this.gestures.doubleTap = new DoubleTap(callback);
    }
    press(callback) {
        this.gestures.press = new Press(callback);
    }
    swipe(callback) {
        this.gestures.swipe = new Swipe(callback);
    }
}

class TouchHandler {
    constructor(identifier, pageX, pageY) {
        this.identifier = identifier;
        this.startTime = +new Date();
        this.startPosition = new Vector2(pageX, pageY);
        this.lastPosition = new Vector2(pageX, pageY);
        this.direction = new Vector2();
        this.squaredDistance = 0;
    }
    update(touchInit) {
        this.lastPosition = new Vector2(touchInit.pageX, touchInit.pageY);
        this.setDirection();
        this.setDistance();
        return this;
    }
    setDirection() {
        this.direction.subtractVectors(this.lastPosition, this.startPosition);
    }
    setDistance() {
        this.squaredDistance = this.lastPosition.getSquaredDistance(this.startPosition);
    }
    end() {
        this.endTime = +new Date();
        this.totalTime = this.endTime - this.startTime;
    }
}

class Listeners {
    constructor(htmlElement, gestures) {
        this.gestures = gestures;
        htmlElement.addEventListener("touchstart", this.handleStart.bind(this), false);
        htmlElement.addEventListener("touchend", this.handleEnd.bind(this), false);
        htmlElement.addEventListener("touchcancel", this.handleCancel.bind(this), false);
        htmlElement.addEventListener("touchmove", this.handleMove.bind(this), false);
        this.ongoingTouches = [];
    }
    handleStart(event) {
        let touches = event.changedTouches;
        for (let i = 0; i < touches.length; i++) {
            let touch = touches[i];
            let touchHandler = new TouchHandler(touch.identifier, touch.pageX, touch.pageY);
            this.ongoingTouches.push(touchHandler);
            this.gestures.touchStart.trigger(touchHandler);
        }
    }
    handleMove(event) {
        let touches = event.changedTouches;
        for (let i = 0; i < touches.length; i++) {
            let touch = touches[i];
            let index = this.getOngoingTouchId(touch.identifier);
            if (index !== null) {
                this.ongoingTouches[index].update(touch);
                this.gestures.touchMove.trigger(this.ongoingTouches[index]);
            }
        }
    }
    handleEnd(event) {
        let touches = event.changedTouches;
        for (let i = 0; i < touches.length; i++) {
            let touch = touches[i];
            let index = this.getOngoingTouchId(touch.identifier);
            if (index !== null) {
                this.ongoingTouches[index].end();
                this.gestures.touchEnd.trigger(this.ongoingTouches[index]);
                this.ongoingTouches.splice(index, 1);
            }
        }
    }
    handleCancel(event) {
        event.preventDefault();
        let touches = event.changedTouches;
        for (let i = 0; i < touches.length; i++) {
            let touch = touches[i];
            let index = this.getOngoingTouchId(touch.identifier);
            if (index !== null) {
                this.gestures.touchCancel.trigger(this.ongoingTouches[index]);
                this.ongoingTouches.splice(index, 1);
            }
        }
    }
    getOngoingTouchId(id) {
        for (let i = 0; i < this.ongoingTouches.length; i++) {
            if (this.ongoingTouches[i].identifier === id) {
                return i;
            }
        }
        return null;
    }
}

class Screen extends Zone {
    constructor(htmlElementId) {
        super();
        this.htmlElement = Dom.findById(htmlElementId);
        this.listeners = new Listeners(this.htmlElement, this.gestures);
    }
}

export { Screen };
