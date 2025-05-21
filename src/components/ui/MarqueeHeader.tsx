import type { ReactNode } from 'react';

type MarqueeHeaderProps = {
    text: string,
    icon: ReactNode
}

export default function MarqueeHeader({text, icon}: MarqueeHeaderProps){
    return(
        <>
        <div className=' bg-black h-px rounded container mx-auto'></div>
        
        <div className="marquee-wrapper pt-5 pb-5">
            <div className="marquee flex">
                {[...Array(10)].map((_, i) => (
                <div key={`a-${i}`} className="flex items-center mr-4">
                    <span className="mr-3">{icon}</span>
                    <span className="text-5xl whitespace-nowrap font-medium">{text}</span>
                </div>
                ))}
                {[...Array(10)].map((_, i) => (
                <div key={`b-${i}`} className="flex items-center mr-4">
                    <span className="mr-3">{icon}</span>
                    <span className="text-5xl whitespace-nowrap font-medium">{text}</span>
                </div>
                ))}
            </div>
        </div>

        <div className=' bg-black h-px rounded container mx-auto mb-10'></div>
        </>
    );
}