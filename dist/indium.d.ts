/** MIT License
* 
* Copyright (c) 2016 Ludovic CLUBER 
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

export interface IGesture {
    maxDuration: number;
    minDuration: number;
    maxMovement: number;
    callback: Function;
    trigger: Function;
}
export interface IGestures {
    touchStart: IGesture;
    touchMove: IGesture;
    touchEnd: IGesture;
    touchCancel: IGesture;
    tap: IGesture;
    doubleTap: IGesture;
    press: IGesture;
    swipe: IGesture;
}



export declare class Listeners {
    gestures: IGestures;
    ongoingTouches: TouchHandler[];
    constructor(htmlElement: THTMLElements, gestures: IGestures);
    handleStart(event: TouchEvent): void;
    handleMove(event: TouchEvent): void;
    handleEnd(event: TouchEvent): void;
    handleCancel(event: TouchEvent): void;
    private getOngoingTouchId;
}

export declare class TouchHandler {
    identifier: number;
    startTime: number;
    endTime: number;
    totalTime: number;
    startPosition: Vector2;
    lastPosition: Vector2;
    direction: Vector2;
    squaredDistance: number;
    constructor(identifier: number, pageX: number, pageY: number);
    update(touchInit: TouchInit): TouchHandler;
    private setDirection;
    private setDistance;
    end(): void;
}
export declare type THTMLElements = HTMLElement | HTMLCanvasElement;
