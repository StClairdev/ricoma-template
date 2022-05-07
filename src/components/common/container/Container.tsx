import React, { PropsWithChildren } from 'react'

// Utilities
import { BgColor } from 'utilities/colors'
import { getPaddingClass, Padding } from 'utilities/padding'

interface ContainerProps {
  backgroundColor?: BgColor
  classes?: string
  padding?: Padding
  fullWidth?: boolean
}

const Container = ({
  backgroundColor,
  children,
  classes,
  fullWidth = false,
  padding,
}: PropsWithChildren<ContainerProps>) => {
  // Classes
  const fullWidthClass = fullWidth ? 'w-full' : ''
  const paddingClass = padding ? getPaddingClass(padding) : ''
  const elementClasses = `container mx-auto ${classes ?? ''} ${paddingClass} ${
    backgroundColor ?? ''
  } ${fullWidthClass}`
    .trim()

  return <div className={elementClasses}>{children}</div>
}

export default Container
