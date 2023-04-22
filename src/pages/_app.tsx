import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Project } from './types';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { pid } = router.query

  const [project, setProject] = useState<Project>();


  let curTitle = ''



  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch(`http://localhost:3000/api/projects/${pid}`);
      const projectData = await res.json();
      setProject(projectData);
    };

    if (pid) {
      fetchProject();
    }
  }, [pid]);



  if (Component.name === 'Home') {
    curTitle = 'Kamil Starmach';
  } else if (Component.name === 'About') {
    curTitle = 'About Me'
  } else if (Component.name === 'Project') {
    if (project) {
      curTitle = project.title;
    }
  }
  else {
    curTitle = Component.name
  }

  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-20">
        <PageTitle title={curTitle} />
        <Navbar active={Component.name} />
        <Component {...pageProps} />
      </div>
    </div >
  )
}
