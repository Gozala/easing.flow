/* @flow */

export type Zipper <x, y, z> = (x:x, y:y) => z
export type zip <x,y,z>
  = (f:Zipper<x, y, z>, xs:Array<x>, ys:Array<y>)
  => Array<z>
