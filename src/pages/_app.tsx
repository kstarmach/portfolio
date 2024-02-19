import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle';
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='min-h-screen flex flex-col  text-gray-800 bg-gray-100 dark:text-white dark:bg-[#111010]'>
      <div className='max-w-3xl mx-auto py-6 sm:py-16 px-4 sm:px-6 lg:px-8 sm:mt-20'>
        <div className="flex justify-between">
          <PageTitle />
        </div>
        <Navbar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
