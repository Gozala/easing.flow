/* @flow */

// Port of http://package.elm-lang.org/packages/Dandandan/Easing/2.0.0

import {toRGB, rgba} from "color-structure";
import {zip} from "./array-zip";

/*:: import * as type from "../type" */

export const ease/*:type.ease*/ =(easing, interpolation, from, to, duration, progress) =>
  interpolation(from, to, easing(Math.min(progress / duration, 1)))

// Interpolation of two Floats
export const float/*:type.float*/ = (from, to, progress) =>
  from + (to - from) * progress

// Interpolation of two points in 2D

export const point2D/*:type.point2D*/ = (from, to, progress) =>
  ({
    x: float(from.x, to.x, progress),
    y: float(from.y, to.y, progress)
  })

export const point3D/*:type.point3D*/ = (from, to, progress) =>
  ({
    x: float(from.x, to.x, progress),
    y: float(from.y, to.y, progress),
    z: float(from.z, to.z, progress)
  })

export const color/*:type.color*/ = (from, to, progress) => {
  const [begin, end] = [toRGB(from), toRGB(to)]
  return rgba(Math.round(float(begin.red, end.red, progress)),
              Math.round(float(begin.green, end.green, progress)),
              Math.round(float(begin.blue, end.blue, progress)),
              float(begin.alpha, end.alpha, progress))
}

export const pair/*:type.pair*/ = interpolate =>
  ([a0, b0], [a1, b1], progress) => [
    interpolate(a0, a1, progress),
    interpolate(b0, b1, progress)
  ]

// Inverts an `Easing` function. A transition that starts fast and continues
// slow now starts slow and continues fast.
export const invert/*:type.invert*/ = easing =>
  time => 1 - easing(1 - time)

// Flips an `Easing` function. A transition that looks like `/`, now looks like
// `\`.
export const flip/*:type.flip*/ = easing =>
  time => easing(1 - time)


// Makes an Easing function using two `Easing` functions. The first half the
// first `Easing` function is used, the other half the second.
export const inOut/*:type.inOut*/ = (begin, end) =>
  time =>
    time < 0.5 ? begin(time * 2) / 2 :
    0.5 + (end((time - 0.5) * 2) / 2)

// Makes an `Easing` function go to the end first and then back to the start.
// A transition that looks like `/` now looks like `/\`.
export const retour/*:type.retour*/ = easing =>
  time =>
    time < 0.5 ? easing(time * 2) :
    easing(1 - ((time - 0.5) * 2))

//  Repeats an `Animation` infinitely
// const rotate = cycle(ease(linear, float, 0, 360), second)
export const cycle/*:type.cycle*/ = animation =>
  (duration, time) =>
    animation(1, (time / duration) - Math.floor(time / duration))


export const linear/*:type.Easing*/ = x => x

export const easeInQuad/*:type.Easing*/ = time => Math.pow(time, 2)
export const easeOutQuad/*:type.Easing*/ = invert(easeInQuad)
export const easeInOutQuad/*:type.Easing*/ = inOut(easeInQuad, easeOutQuad)

export const easeInCubic/*:type.Easing*/ = time => Math.pow(time, 3)
export const easeOutCubic/*:type.Easing*/ = invert(easeInCubic)
export const easeInOutCubic/*:type.Easing*/ = inOut(easeInCubic, easeOutCubic)

export const easeInQuart/*:type.Easing*/ = time => Math.pow(time, 4)
export const easeOutQuart/*:type.Easing*/ = invert(easeInQuad)
export const easeInOutQuart/*:type.Easing*/ = inOut(easeInQuart, easeOutQuart)

export const easeInQuint/*:type.Easing*/ = time => Math.pow(time, 5)
export const easeOutQuint/*:type.Easing*/ = invert(easeInQuint)
export const easeInOutQuint/*:type.Easing*/ = inOut(easeInQuint, easeOutQuint)

export const easeOutSine/*:type.Easing*/ = time => Math.sin(time * (Math.PI / 2))
export const easeInSine/*:type.Easing*/ = invert(easeOutSine)
export const easeInOutSine/*:type.Easing*/ = inOut(easeInSine, easeOutSine)

export const easeInExpo/*:type.Easing*/ = time => Math.pow(10 * (time - 1), 2)
export const easeOutExpo/*:type.Easing*/ = invert(easeInExpo)
export const easeInOutExpo/*:type.Easing*/ = inOut(easeInExpo, easeOutExpo)

export const easeOutCirc/*:type.Easing*/ = time =>
  Math.sqrt(Math.pow(1 - (time - 1), 2))
export const easeInCirc/*:type.Easing*/ = invert(easeOutCirc)
export const easeInOutCirc/*:type.Easing*/ = inOut(easeInCirc, easeOutCirc)

export const easeInBack/*:type.Easing*/ = time =>
  time * time * (2.70158 * time - 1.70158)
export const easeOutBack/*:type.Easing*/ = invert(easeInBack)
export const easeInOutBack/*:type.Easing*/ = inOut(easeInBack, easeOutBack)

export const easeOutBounce/*:type.Easing*/ = time => {
  const a = 7.5625
  const t2 = time - (1.5 / 2.75)
  const t3 = time - (2.25 / 2.75)
  const t4 = time - (2.65 / 2.75)

  return time < 1 / 2.75 ? a * time * time :
         time < 2 / 2.75 ? a * t2 * t2 + 0.75 :
         time < 2.5 / 2.75 ? a * t3 * t3 + 0.9375 :
         a * t4 * t4 + 0.984375
}
export const easeInBounce/*:type.Easing*/ = invert(easeOutBounce)
export const easeInOutBounce/*:type.Easing*/ = inOut(easeInBounce, easeOutBounce)

export const easeInElastic/*:type.Easing*/ = time => {
  const s  = 0.075
  const p  = 0.3
  const t = time - 1
  return -(Math.pow(2, 10 * t) * Math.sin((t - s) * (2 * Math.PI) / p))
}
export const easeOutElastic/*:type.Easing*/ = invert(easeInElastic)
export const easeInOutElastic/*:type.Easing*/ = inOut(easeInElastic, easeOutElastic)


const floats = pair(float)

// A cubic bezier function using 4 parameters: x and y position of first
// control point, and x and y position of second control point.
export const bezier/*:type.bezier*/ = (x1, y1, x2, y2) =>
  time => {
    const f = (xs, ys) => floats(xs, ys, time)
    const casteljau = points => {
      if (points.length === 1) {
        const [[x, y]] = points
        return y
      } else {
        return casteljau(zip(f, points, points.slice(1)))
      }
    }

    return casteljau([[0,0], [x1,y1], [x2,y2], [1,1]])
  }
