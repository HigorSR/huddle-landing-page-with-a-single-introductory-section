import SocialDesktop from "./social-desktop";
import TextDesktop from "./text-desktop";

function DescriptionDesktop() {
    return (
        <div className='z-10 flex flex-col justify-around text-white w-[457px] h-full mr-10'>
            <div></div>
            <TextDesktop />

            <SocialDesktop />
        </div>
    );
}

export default DescriptionDesktop;