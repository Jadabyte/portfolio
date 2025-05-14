import { useEffect, useState } from 'react';
import projects from '../data/projects/professional.json';
import ProjectCard from '../components/professional/ProjectCard';

export default function Home() {
    const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500'];
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prevColor) => (prevColor + 1) % colors.length);
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
    <>
        <h1>Thibaud Streignart - <span className={colors[colorIndex]}>Web Developer</span></h1>  
        <div className="p-8 grid gap-4 grid-cols-1 md:grid-cols-2">
        {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
        ))}
        </div>
    </>
    );
}