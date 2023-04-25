import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-20">
        <PageTitle />
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div >
  )
}
