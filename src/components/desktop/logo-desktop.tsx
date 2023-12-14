import Image from 'next/image';
import illustrationMockups from '../../../public/illustration-mockups.svg'
import logo from '../../../public/logo.svg'

function LogoDesktop() {
    return (
        <div className='flex flex-col gap-[100px] z-10 self-start ml-16 mt-10'>
            <Image src={logo} alt='' className='' />
            <Image src={illustrationMockups} alt='' className='w-[900px]' />
        </div>
    );
}

export default LogoDesktop;