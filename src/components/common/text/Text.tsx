import React from 'react'

interface TextProps {
  children?: string
  className?: string
}

const Text = ({ children, className }: TextProps) => <p className={className}>{children}</p>

export default Text
