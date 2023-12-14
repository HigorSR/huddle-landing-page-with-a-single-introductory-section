import Image from 'next/image'
import bgDesktop from '../../../public/bg-desktop.svg'

import SocialDesktop from './social-desktop';
import TextDesktop from './text-desktop';
import LogoDesktop from './logo-desktop';
import DescriptionDesktop from './description-desktop';


function DesktopComponent() {
    return (
        <main className='h-screen bg-Violet'>
            <div className='flex items-center gap-24 h-full'>
                <Image src={bgDesktop} alt='' className='absolute w-screen h-full' />

                <LogoDesktop />

                <DescriptionDesktop/>
            </div>
        </main>
    );
}

export default DesktopComponent;