import Footer from '@/components/Footer'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gray-100 min-h-screen flex flex-col'>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  )
}
