import type { ReactNode } from 'react';

type MarqueeHeaderProps = {
    text: string,
    icon: ReactNode,
    size: string
}

export default function MarqueeHeader({text, icon, size = 'small'}: MarqueeHeaderProps){
    const textSize = size === 'small' ? 'text-4xl md:text-5xl' : ' text-6xl md:text-7xl';
    const fontWeight = size === 'small' ? 'font-medium' : 'font-semibold';

    return(
        <>
        <div className=' bg-black h-px rounded container mx-auto'></div>
        
        <div className="marquee-wrapper pt-5 pb-5">
            <div className="marquee flex">
                {[...Array(10)].map((_, i) => (
                <div key={`a-${i}`} className="flex items-center mr-4">
                    <span className="mr-3">{icon}</span>
                    <span className={`${textSize} whitespace-nowrap ${fontWeight}`}>{text}</span>
                </div>
                ))}
                {[...Array(10)].map((_, i) => (
                <div key={`b-${i}`} className="flex items-center mr-4">
                    <span className="mr-3">{icon}</span>
                    <span className={`${textSize} whitespace-nowrap ${fontWeight}`}>{text}</span>
                </div>
                ))}
            </div>
        </div>

        <div className=' bg-black h-px rounded container mx-auto mb-10'></div>
        </>
    );
}