import Header from '@/components/header'
import { tabData, TabItem } from '@/data/header'
import React from 'react'
import About from './about'
import Experience from './experience'
import Contact from './contact'
import Skill from './skill'
import Education from './education'
import Avatar from './avatar'

interface HomeProps {
  tabData: TabItem[]
}

function Home({ tabData }: HomeProps) {
  return (
    <div id="home" className="bg-zinc-800">
      <Header tabs={tabData} />
      <Avatar/>
      <About />
      <Skill />
      <Education />
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
