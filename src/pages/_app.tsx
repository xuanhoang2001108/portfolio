import type { AppProps } from 'next/app'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="My Portfolio built with Next.js and TypeScript"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
