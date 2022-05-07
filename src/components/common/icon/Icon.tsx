import React, { MouseEventHandler } from 'react'
import { IconTypes } from './types'
import * as Icons from './icons'

interface IconProps {
  type: IconTypes
  className?: string
  onClick?: MouseEventHandler<HTMLImageElement>
}

const Icon = ({ type, className, onClick }: IconProps) => {
  const IconImport = Icons[type]
  return <img src={IconImport} className={className} onClick={onClick} />
}

export default Icon
