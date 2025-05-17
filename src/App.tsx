import './App.css'
import './components/professional/ProjectCard';
import Home from './pages/Home';

function App() {
  return (
    <>
      <main className='m-2 rounded-md border border-black overflow-hidden'>
        <Home />
      </main>
      <footer className='mb-2 text-center'>
        © Thibaud Streignart / {(new Date().getFullYear())}
      </footer>
    </>
  )
}

export default App