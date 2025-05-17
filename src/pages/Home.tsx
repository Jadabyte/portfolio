import Button from '../components/ui/Button';
import SelectedWorks from './sections/SelectedWorks';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';

export default function Home() {
    return (
    <>
        <div className='pt-40 pb-40'>
            <div className="container mx-auto grid grid-cols-2 items-end">
                <div className='text-5xl text-left'>
                    Web developer
                </div>
                <div className='text-4xl text-right text-gray-500 align-bottom'>
                    Brussels, Belgium
                </div>
            </div>
            <div className='mt-6 mb-6'>
                <div className=' bg-black h-px rounded container mx-auto'></div>
                <h1 className='flex pt-3 pb-3 marquee'>
                    {[...Array(10)].map((_, i) => (
                        <span key={i} aria-hidden={i !== 0} className='whitespace-nowrap pr-4 text-7xl'>/ Thibaud Streignart</span>
                    ))}
                </h1>
                <div className=' bg-black h-px rounded container mx-auto'></div>
            </div>
            <div className="container mx-auto grid grid-cols-10">
                <nav className='text-left col-span-3'>
                    <Button text={"Selected Works"} link={"#work"}/>
                    <Button text={"Tech Stack"} link={"#tech"}/>
                    <Button text={"Links"} link={"#contact"}/>
                </nav>
                <div className="text-right col-start-7 col-span-4 text-[20px]">
                    <p className='pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        </div>
        <SelectedWorks />
        <TechStack />
        <Contact />
    </>
    );
}