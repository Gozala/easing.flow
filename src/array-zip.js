/* @flow */

export const zip = /*::<x, y, z>*/
  ( combine/*:(x:x, y:y) => z*/
  , xs/*:Array<x>*/
  , ys/*:Array<y>*/
  )/*:Array<z>*/ => {
    const count = Math.min(xs.length, ys.length)
    const zs = []
    let index = 0
    while (index < count) {
      zs[index] = combine(xs[index], ys[index])
      index = index + 1
    }
    return zs
  }
