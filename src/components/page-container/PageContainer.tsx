import React, { PropsWithChildren } from 'react'

// Components
import { Navigation } from 'components/navigation'

const PageContainer = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className='f-width'>
      <Navigation />
      <main className='z-10 relative'>{children}</main>
    </div>
  )
}

export default PageContainer
