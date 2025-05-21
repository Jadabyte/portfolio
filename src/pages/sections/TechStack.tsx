import techLanguages from '../../data/professional/tech/languages.json';
import techSiteBuilders from '../../data/professional/tech/site-builders.json';
import MarqueeHeader from '../../components/ui/MarqueeHeader';

export default function TechStack() {
    return(
        <div id='tech' className='mb-20'>
            <MarqueeHeader text={"Tech Stack"} 
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" /></svg>} 
            />
            <div className="container mx-auto mt-15">
                <h3 className='text-4xl font-bold'>
                    Languages / CMS / Frameworks
                </h3>
                <div className='flex flex-wrap gap-x-15 mb-10'>
                    {techLanguages.map((tech) => (
                        <img key={tech.title} src={tech.image} alt={tech.title} className="rounded mb-4 h-[100px] md:h-[163px] w-auto" />
                    ))}
                </div>

                <h3 className='text-4xl font-bold'>
                    Site builders
                </h3>
                <div className='flex flex-wrap gap-x-15'>
                    {techSiteBuilders.map((tech) => (
                        <img key={tech.title} src={tech.image} alt={tech.title} className="rounded mb-4 h-[110px] md:h-[163px] w-auto" />
                    ))}
                </div>
            </div>
        </div>
    );
}