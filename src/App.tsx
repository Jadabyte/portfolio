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
        } else {
          changeFavicon(handleDarkMode('sun'));
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
      <footer className='mb-3 md:mb-4 text-center'>
        © Thibaud Streignart / {(new Date().getFullYear())}
      </footer>
    </>
  )
}

export default App