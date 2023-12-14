import Image from "next/image";
import illustrationMockups from '../../../public/illustration-mockups.svg'
import logo from '../../../public/logo.svg'

function LogoMobile() {
    return (
        <div className='absolute z-10'>
            <Image src={logo} alt='' className='w-32 mx-9 mt-8' />
            <Image src={illustrationMockups} alt='' className='w-[300px] mx-9 mt-[60px]' />
        </div>
    );
}

export default LogoMobile;