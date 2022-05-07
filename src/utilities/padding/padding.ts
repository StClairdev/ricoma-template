import { Padding } from '.'

const getPaddingClass = (padding: Padding) => {
  let paddingClass = ''
  if (padding.all !== undefined) {
    paddingClass = ` p-${padding.all}`
    return paddingClass.trim()
  }
  if (padding?.xAxis !== undefined) {
    paddingClass = padding.xAxis ? ` px-${padding.xAxis}` : ''
  }
  if (padding?.yAxis !== undefined) {
    paddingClass += padding.yAxis ? ` py-${padding.yAxis}` : ''
  }
  // TODO: Refactor conditionals to be more DRY.
  if (padding.xAxis === undefined && padding.top) {
    paddingClass += padding.top ? ` pt-${padding.top}` : ''
  }
  if (padding.xAxis === undefined && padding.bottom) {
    paddingClass += padding.bottom ? ` pb-${padding.bottom}` : ''
  }
  if (padding.yAxis === undefined && padding.left) {
    paddingClass += padding.left ? ` pl-${padding.left}` : ''
  }
  if (padding.yAxis === undefined && padding.right) {
    paddingClass += padding.right ? ` pr-${padding.right}` : ''
  }
  return paddingClass.trim()
}

export { getPaddingClass }
