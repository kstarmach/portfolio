import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle';
import Footer from '@/components/Footer'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname, query } = router;

  // Function to determine the title based on the current path
  const getPageTitle = () => {
    switch (pathname) {
      case '/about':
        return 'About me';
      case '/projects':
        return 'Projects';
      default:
        if (pathname.startsWith('/projects/') && query.pid) {
          // For project pages, return the project name
          const projectId = query.pid as string;

          // You may need to format projectName as needed
          return projectId;
        }
        return 'Kamil Starmach'; // Default title
    }
  };

  return (
    <div className='min-h-screen flex flex-col  text-gray-800 bg-gray-100 dark:text-white dark:bg-[#111010]'>
      <div className='max-w-4xl mx-auto py-6 sm:py-16 px-4 sm:px-6 lg:px-8 sm:mt-20'>
        <PageTitle title={getPageTitle()} />
        <Navbar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
