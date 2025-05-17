export default function MarqueeHeader({text, icon}){
    return(
        <>
        <div className=' bg-black h-px rounded container mx-auto'></div>
        <h2 className='flex pt-3 pb-3 marquee'>
            {[...Array(10)].map((_, i) => (
                <div key={i + 'wrapper'} className="flex align-middle justify-center">
                    <span className="flex items-center mr-4" key={i + 'icon'}>{icon}</span>
                    <span key={i + 'text'} aria-hidden={i !== 0} className='whitespace-nowrap pr-4 text-5xl'>{text}</span>
                </div>
            ))}
        </h2>
        <div className=' bg-black h-px rounded container mx-auto mb-10'></div>
        </>
    );
}