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
      const handleTabState = () => {
        if (document.visibilityState === "hidden") {
          changeFavicon("/moon.svg");
        } else {
          changeFavicon("/sun.svg");
        }
      };

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
      <footer className='mb-2 text-center'>
        © Thibaud Streignart / {(new Date().getFullYear())}
      </footer>
    </>
  )
}

export default App