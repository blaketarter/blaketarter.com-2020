export const debounce = <A extends any[], B extends any>(
  fn: (...a: A) => B,
) => {
  let frame: number

  return (...params: A) => {
    if (frame) {
      cancelAnimationFrame(frame)
    }

    frame = requestAnimationFrame(() => {
      fn(...params)
    })
  }
}
