import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  let curTitle = ''
  if (Component.name === 'Home') {
    curTitle = 'Kamil Starmach';
  } else if (Component.name === 'About') {
    curTitle = 'About Me'
  } else {
    curTitle = Component.name
  }

  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-20">
        <PageTitle title={curTitle} />
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div >
  )
}
