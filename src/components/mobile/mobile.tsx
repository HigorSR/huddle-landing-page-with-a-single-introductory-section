import Image from 'next/image'
import bgMobile from '../../../public/bg-mobile.svg'


import LogoMobile from './logo-mobile';
import DescriptionMobile from './description-mobile';

function MobileComponent() {
    return (
        <main className='flex justify-center bg-Violet'>
            <div className='h-screen'></div>
            <div className='flex flex-col items-center w-full h-full'>
                <LogoMobile />
                
                <Image src={bgMobile} alt='' className='' />
                {/* description */}
                <DescriptionMobile />
                
            </div>
        </main>
    );
}

export default MobileComponent;