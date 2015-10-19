/* @flow */

import type {Color, Float} from "color-structure/type";

export {Color, Float} from "color-structure/type";

export type Time = number

// Type alias for Easing functions.
export type Easing = (x:Float) => Float

// An interpolation of two values using a Float value.
export type Interpolation <a> = (from:a, to:a, value:Float) => a

// An `Animation` is a function that returns a value given a duration and the current time.
export type Animation <a> = (duration:Time, time:Time) => a

export type ease <a> = (easing:Easing, interpolation:Interpolation<a>,
                        from:a, to:a, duration:Time, progress:Time) => a

export type float = (from:Float, to:Float, progress:Float) => Float


type Point2D = {x: Float, y:Float}
export type point2D = (from:Point2D, to:Point2D, progress:Float) => Point2D


type Point3D = {x: Float, y:Float, z:Float}
export type  point3D = (from:Point3D, to:Point3D, progress:Float) => Point3D

export type color = (from:Color, to:Color, progress:Float) => Color


export type pair <a> = (interpolate:Interpolation<a>) => Interpolation<[a,a]>

// Inverts an `Easing` function. A transition that starts fast and continues
// slow now starts slow and continues fast.
export type invert = (easing:Easing) => Easing

// Flips an `Easing` function. A transition that looks like `/`, now looks like
// `\`.
export type flip = (easing:Easing) => Easing

// Makes an Easing function using two `Easing` functions. The first half the
// first `Easing` function is used, the other half the second.
export type inOut = (begin:Easing, end:Easing) => Easing

// Makes an `Easing` function go to the end first and then back to the start.
// A transition that looks like `/` now looks like `/\`.
export type retour = (easing:Easing) => Easing

//  Repeats an `Animation` infinitely
// const rotate = cycle(ease(linear, float, 0, 360), second)
export type cycle <a> = (animation:Animation<a>) => Animation<a>

export type bezier = (x1:Float, y1:Float, x2:Float, y2:Float) => Easing
