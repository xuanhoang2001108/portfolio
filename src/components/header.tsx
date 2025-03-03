import { TabItem } from '@/data/header'
import Link from 'next/link'

interface HeaderProps {
  tabs: TabItem[]
}

const Header = ({ tabs }: HeaderProps) => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="sticky top-0">
      <nav className="flex justify-center items-center w-full p-4">
        {tabs.map((value) => (
          <ul key={value.id} className="mx-16">
            <li>
              <Link
                href={`#${value.path}`}
                className="dark:text-white text-gray-900 hover:text-blue-500 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  handleScroll(value.path)
                }}
                aria-current="page">
                {value.tabName}
              </Link>
            </li>
          </ul>
        ))}
      </nav>
    </header>
  )
}

export default Header
