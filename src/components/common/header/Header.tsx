import React, { PropsWithChildren } from 'react'

interface HeaderProps {
  Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
}

const Header = ({ children, Tag }: PropsWithChildren<HeaderProps>) => {
  return <Tag>{children}</Tag>
}

export default Header
