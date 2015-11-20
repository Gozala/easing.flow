# eased

Yet another library for creating simple animations with easing functions. Things that make it stand out from alternatives is a pure functional API & type safety via [flow][] static type checker.


Library is a direct port of a wonderful [Easing][Easing Elm] library for an exciting [Elm][] programing language (that is worth checking out). It is designed around the idea of: **Easing** functions interpolate a value over time. Where value can be a value of any type, including numbers, points and colors. In fact you can easily introduce your own value to the mix!

You can find graphical examples of easing functions on [easings.net][].


```js
import {ease, easeInCubic, easeInOutQuad, float} from "eased"

const second = 1000

const sampleAnimation = currentTime =>
    ease(easeInCubic, float, 0, 10, second, currentTime)

// Transition from blue to red using custom `Easing` function
const customAnimation = currentTime =
    ease(x => Math.pow(x, 2.4), color, blue, red, second, currentTime)

// Animate between 0 and 5 with the easeInOutQuad Easing
const animation1 = currentTime =>
  ease(easeInOutQuad, float, 0, 5, second, currentTime)

// Animation with bezier curve
const bezierAnimation = currentTime =>
  ease(bezier(0.65, 0.06, 0.99, 0), float, 0, 5, second, currentTime)

// Create your own Interpolation functions
const vec = (from, to, progress) =>
  add(from, scale(sub(to, from), progress))

// Use your Easing and Interpolation functions
const vec3movement = currentTime =>
  ease(easeInQuad, vec, (vec3 0 0 0),
       (vec3 10 10 10), (3 * second), currentTime)
```

If you happen to type check your JS code with [flow][] you can take further advantage of this library:

```js
import type {Time, Float, Color, Interpolation} from "eased/type"
import {ease, easeInCubic, easeInOutQuad, float} from "eased"

const second = 1000

type $sampleAnimation = (currentTime:Time) => Float
const sampleAnimation:$sampleAnimation = currentTime =>
    ease(easeInCubic, float, 0, 10, second, currentTime)

// Transition from blue to red using custom `Easing` function
type $customAnimation = (currentTime:Time) => Color
const customAnimation:$customAnimation = currentTime =
    ease(x => Math.pow(x, 2.4), color, blue, red, second, currentTime)

// Animate between 0 and 5 with the easeInOutQuad Easing
type $animation1 = (currentTime:Time) => Float
const animation1:$animation1 = currentTime =>
  ease(easeInOutQuad, float, 0, 5, second, currentTime)

// Animation with bezier curve
type $bezierAnimation = (currentTime:Time) => Float
const bezierAnimation:$bezierAnimation = currentTime =>
  ease(bezier(0.65, 0.06, 0.99, 0), float, 0, 5, second, currentTime)

// Create your own Interpolation functions
type $vec = Interpolation<Vec3>
const vec:$vec = (from, to, progress) =>
  add(from, scale(sub(to, from), progress))

// Use your Easing and Interpolation functions
type $vec3movement = (currentTime:Time) => Vec3
const vec3movement = currentTime =>
  ease(easeInQuad, vec, (vec3 0 0 0),
       (vec3 10 10 10), (3 * second), currentTime)
```

[Elm]:http://elm-lang.org
[flow]:http://flowtype.org
[Easing]:http://package.elm-lang.org/packages/Dandandan/Easing/2.0.0
[easings.net]:http://easings.net
