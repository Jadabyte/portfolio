import MarqueeHeader from '../../components/ui/MarqueeHeader';
import DetailItem from '../../components/ui/DetailItem';

export default function Contact() {
    return(
        <div id='contact' className='mb-20'>
            <MarqueeHeader text={"Get in touch"} 
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>} 
            />
            <div className="container mx-auto grid grid-cols-2">
                <div>
                    <DetailItem size='large' title="Email" description={<a href='mailto:thibaud.streignart@gmail.com'>thibaud.streignart@gmail.com</a>}/>
                    <DetailItem size='large' title="Phone" description={<a href='tel:+32470469540'>+32 (0)470 46 95 40</a>}/>
                </div>
                <div className='pl-40'>
                    <DetailItem size='large' title="LinkedIn" description={<a target='_blank' href='https://www.linkedin.com/in/thibaud-streignart'>linkedin.com/in/thibaud-streignart</a>}/>
                    <DetailItem size='large' title="Resume" description={<a href='#'>Download - English</a>}/>
                    <DetailItem size='large' title="Letterboxd" description={<a target='_blank' href='https://www.letterboxd.com/TStreignart'>letterboxd.com/TStreignart</a>}/>
                </div>
            </div>
        </div>
    );
}