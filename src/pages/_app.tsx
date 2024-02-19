import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from "react";
import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle';
import { FaMoon, FaSun } from "react-icons/fa";
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    let local_theme = localStorage.getItem('theme');
    if (local_theme) {
      setTheme(local_theme);
    }
  }, []);

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem("theme", "dark");
    } else {
      setTheme('light');
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <div className={` min-h-screen flex flex-col  ${theme === 'light' ? 'text-gray-800 bg-gray-100 ' : 'text-white bg-[#111010]'}`}>
      <div className='max-w-3xl mx-auto py-6 sm:py-16 px-4 sm:px-6 lg:px-8 sm:mt-20'>

        <div className="flex justify-between">
          <PageTitle />
          <button onClick={handleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
        <Navbar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
