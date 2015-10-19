/* @flow */

/*:: import * as type from "../type/array-zip" */

export const zip/*:type.zip*/ = (f, xs, ys) => {
  const count = Math.min(xs.length, ys.length)
  const zs = []
  let index = 0
  while (index < xs.length && index < ys.length) {
    zs[index] = f(xs[index], ys[index])
    index = index + 1
  }
  return zs
}
