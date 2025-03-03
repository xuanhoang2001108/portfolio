import { TabItem } from '@/data/header'
import Link from 'next/link'
import React, { useState } from 'react'

interface HeaderProps {
  tabs: TabItem[]
}
const Header = (props: HeaderProps) => {
  const { tabs } = props
  const [nav, setNav] = useState(false)
  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    console.log(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="sticky top-0">
      <nav className="px-4 lg:px-4 py-2.5 dark:bg-gray-800 shadow">
        <div className="flex justify-between items-center mx-20 max-w-screen-lg">
          <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold dark:text-white">
              Welcome
            </span>
          </Link>
          {tabs.map((value) => {
            return (
              <ul
                key={value.id}
                className="flex flex-col md:flex-row md:gap-8 gap-0">
                <li>
                  <Link
                    href={`#${value.path}`}
                    className="dark:text-white"
                    onClick={(e) => {
                      e.preventDefault()
                      handleScroll(value.path)
                    }}
                    aria-current="page">
                    {value.tabName}
                  </Link>
                </li>
              </ul>
            )
          })}

          <div className="md:hidden flex items-center lg:order-1">
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded={nav}
              onClick={() => setNav(!nav)}>
              <span className="sr-only">Open main menu</span>
              {nav ? <></> : <></>}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
