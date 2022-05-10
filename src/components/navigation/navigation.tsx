import React, { MouseEvent, useState } from 'react'
import { default as NavigationItems } from 'resources/top-navigation.json'
import { Container, Icon, IconTypes, Text } from 'components'
import { useMatch, useResolvedPath, useNavigate } from 'react-router-dom'

// Assets
import Logo from 'assets/Logo.png'
import LogoMobileMenu from 'assets/LogoMobileMenu.svg'

interface NavLinkProps {
  iconsDisabled?: boolean
  mobileStyleDisabled?: boolean
}

interface NavConfig extends NavLinkProps {
  font?: string
  className?: string
}

interface CustomLinkProps extends NavLinkProps {
  name: string
  path: string
  icon?: string
  font?: string
  className?: string
}

const CustomLink = ({
  name,
  path,
  icon,
  font,
  className,
  iconsDisabled,
  mobileStyleDisabled,
}: CustomLinkProps) => {
  const resolved = useResolvedPath(path)
  const match = useMatch({ path: resolved.pathname, end: true })
  const activeClass = match ? ' rounded-md bg-cyan_blue' : ''
  const mobileClass = `${activeClass} py-5 px-7 text-left`
  const navigate = useNavigate()
  const onClick = () => navigate(path)

  return (
    <button
      onClick={onClick}
      className={`font-${font}${!mobileStyleDisabled && mobileClass} ${className}`}
    >
      {!iconsDisabled && <Icon type={icon as IconTypes} className='h-5 w-5 inline pr-6' />}
      {name}
    </button>
  )
}

const Navigation = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false)

  const onHamburgerNavClick = (e: MouseEvent<HTMLImageElement>) => {
    setToggleMobileNav(!toggleMobileNav)
  }

  const renderNavItems = ({ font, className, iconsDisabled, mobileStyleDisabled }: NavConfig) =>
    NavigationItems.sort((a, b) => a.rank - b.rank).map(({ rank, ...props }) => (
      <CustomLink
        {...props}
        mobileStyleDisabled={mobileStyleDisabled}
        className={className}
        font={font}
        iconsDisabled={iconsDisabled}
        key={rank}
      />
    ))

  return (
    <div className='relative z-20 bg-tangaroa h-17 f-width text-white px-7 py-5 overflow-visible'>
      <Container classes='max-w-screen-xl'>
        <div className='flex flex-row justify-items-center'>
          <img src={Logo} className='mr-auto' />
          <nav className='flex flex-row justify-between w-81 invisible md:visible'>
            {renderNavItems({ font: 'Montserrat', iconsDisabled: true, mobileStyleDisabled: true })}
          </nav>
          <Icon type='Cart' className='ml-auto mr-7' />
          <Icon
            type='HamburgerNav'
            className='ml-auto md:hidden'
            onClick={onHamburgerNavClick}
          />
        </div>
      </Container>
      {toggleMobileNav && (
        <nav className='border-white border shadow-1cust absolute right-0 top-0 w-81 min-h-screen visible md:invisible none bg-tangaroa p-2.5'>
          <div className='flex'>
            <div className='align-middle'>
              <img src={LogoMobileMenu} className='m-6 inline' />
              <Text className='mt-8 inline'>Distributor Portal</Text>
            </div>
            <Icon type='Close' className='ml-auto' onClick={onHamburgerNavClick} />
          </div>
          {renderNavItems({ className: 'w-54' })}
        </nav>
      )}
    </div>
  )
}

export default Navigation
