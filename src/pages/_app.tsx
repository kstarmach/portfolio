import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-3xl mx-auto py-6 sm:py-16 px-4 sm:px-6 lg:px-8 sm:mt-20">
      <PageTitle />
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
