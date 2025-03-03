import React from 'react'

function About() {
  return (
    <div id="about" className="h-600 text-white">
      about
    </div>
  )
}

export default About

export async function getStaticProps() {
  return {
    props: { title: 'My Portfolio' }
  }
}
