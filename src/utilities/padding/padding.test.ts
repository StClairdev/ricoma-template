import { getPaddingClass } from './padding'

/**
 * TODO: Refactor test methods to be more DRY.
 */
describe('Test Padding Utils', () => {
  test('getPaddingClass returns `p-${padding.all}`', () => {
    const className = getPaddingClass({ all: 1 })
    expect(className).toBe('p-1')
  })

  test('getPaddingClass returns `pt-${padding.xAxis}`', () => {
    const className = getPaddingClass({ xAxis: 1 })
    expect(className).toBe('px-1')
  })

  test('getPaddingClass returns `pt-${padding.yAxis}`', () => {
    const className = getPaddingClass({ yAxis: 1 })
    expect(className).toBe('py-1')
  })

  test('getPaddingClass returns `pt-${padding.left}`', () => {
    const className = getPaddingClass({ left: 1 })
    expect(className).toBe('pl-1')
  })

  test('getPaddingClass returns `pt-${padding.top}`', () => {
    const className = getPaddingClass({ top: 1 })
    expect(className).toBe('pt-1')
  })

  test('getPaddingClass returns `pt-${padding.bottom}`', () => {
    const className = getPaddingClass({ bottom: 1 })
    expect(className).toBe('pb-1')
  })

  test('getPaddingClass returns `pt-${padding.right}`', () => {
    const className = getPaddingClass({ right: 1 })
    expect(className).toBe('pr-1')
  })

  test('getPaddingClass returns `pt-${padding.left}`', () => {
    const className = getPaddingClass({ left: 1 })
    expect(className).toBe('pl-1')
  })

  test('getPaddingClass returns `pt-${padding.all}` only', () => {
    const className = getPaddingClass({ all: 1, yAxis: 1, left: 1, bottom: 1, top: 2, right: 2 })
    expect(className).toBe('p-1')
  })

  test('getPaddingClass returns `pt-${padding.yAxis}` only', () => {
    const className = getPaddingClass({ yAxis: 1, left: 1, top: 2, bottom: 3 })
    expect(className).toBe('py-1 pt-2 pb-3')
  })

  test('getPaddingClass returns `px-${padding.xAxis}` only', () => {
    const className = getPaddingClass({ xAxis: 1, bottom: 1, left: 4, right: 5 })
    expect(className).toBe('px-1 pl-4 pr-5')
  })
})
