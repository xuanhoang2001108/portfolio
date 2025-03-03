import Header from '@/components/header'
import { tabData, TabItem } from '@/data/header'
import React from 'react'
import About from './about'
import Experience from './experience'
import Contact from './contact'

interface HomeProps {
  tabData: TabItem[]
}

function Home({ tabData }: HomeProps) {
  return (
    <div className="min-h-screen bg-gray-600">
      <Header tabs={tabData} />
      <About />
      <Experience />
      <Contact />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: { tabData }
  }
}
