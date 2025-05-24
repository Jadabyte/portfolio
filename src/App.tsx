import { useEffect } from 'react';
import './App.css'
import './components/professional/ProjectCard';
import Home from './pages/Home';

const changeFavicon = (iconURL: string) => {
  const link = document.querySelector("#favicon") as HTMLLinkElement | null;
  if(link) {
    link.href = iconURL;
  }
}

function App() {
  useEffect(() => {
      const documentTitle = document.title;

      const handleDarkMode = (icon: string) => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return (`/${icon}--light.svg`);
        } else {
          return (`/${icon}.svg`);
        }
      }

      const handleTabState = () => {
        if (document.visibilityState === "hidden") {
          changeFavicon(handleDarkMode('moon'));
          document.title = "Ready when you are";
        } else {
          changeFavicon(handleDarkMode('sun'));
          document.title = documentTitle;
        }
      };

      changeFavicon(handleDarkMode('sun'));

      document.addEventListener("visibilitychange", handleTabState);

      return () => {
        document.removeEventListener("visibilitychange", handleTabState);
      };
  }, []);

  return (
    <>
      <main className='m-3 md:m-4 p-3 rounded-md border border-black overflow-hidden'>
        <Home />
      </main>
      <footer className='mb-3 md:mb-4 pl-20 pr-20 text-center'>
        <p className='mb-2'>This site was built using Vite, React, Tailwind, and TypeScript, and deployed with Netlify</p>
        <p>© Thibaud Streignart - {(new Date().getFullYear())}</p>
      </footer>
    </>
  )
}

export default App