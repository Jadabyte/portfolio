import tech from '../../data/professional/tech.json';
import MarqueeHeader from '../../components/ui/MarqueeHeader';

export default function TechStack() {
    return(
        <div id='tech' className='mb-20'>
            <MarqueeHeader text={"Tech Stack"} 
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" /></svg>} 
            />
            <div className="container mx-auto flex flex-wrap">
                {tech.map((tech) => (
                    <img key={tech.title} src={tech.image} alt={tech.title} className="rounded mb-4" />
                ))}
            </div>
        </div>
    );
}