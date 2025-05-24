import Button from '../components/ui/Button';
import SelectedWorks from './sections/SelectedWorks';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
import MarqueeHeader from '../components/ui/MarqueeHeader';

export default function Home() {
    return (
    <>
        <div className='pt-10 pb-20 md:pt-20 md:pb-40'>
            <div className="container mx-auto md:grid grid-cols-2 items-end">
                <div className=' text-4xl md:text-5xl text-left font-medium'>
                    Web developer
                </div>
                <div className='text-3xl md:text-4xl md:text-right text-gray-500 align-bottom font-medium'>
                    Brussels, Belgium
                </div>
            </div>
            <div className='mt-10'>
                <MarqueeHeader text='Thibaud Streignart' size='large' icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-11"><path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" /></svg>} />
            </div>
            <div className="container mx-auto md:grid grid-cols-10">
                <nav className='text-left col-span-4 mb-4'>
                    <Button text={"Selected Works"} link={"#work"}/>
                    <Button text={"Tech Stack"} link={"#tech"}/>
                    <Button text={"Get in Touch"} link={"#contact"}/>
                </nav>
                <div className="md:text-right col-start-7 col-span-4 text-[18px] font-medium">
                    <p className='mb-4'>Hey there! I'm a developer who loves making things for people. Whether building stylish websites for non-profits or finding smarter ways to streamline a small business's processes, I'm always up for trying something new - especially if it means brainstorming over a good cup of coffee.</p>
                    <p className='mb-4'>I love getting lost in new hobbies, talking about movies nonstop, falling down fantasy-shaped rabbit holes, and walking way too much when exploring a new city.</p>
                    <p>Wanna see what I've built? <a href="#work">Scroll on!</a></p>
                </div>
            </div>
        </div>
        <SelectedWorks />
        <TechStack />
        <Contact />
    </>
    );
}