import SocialMobile from "./social-mobile";
import TextMobile from "./text-mobile";

function DescriptionMobile() {
    return (
        <div className='flex flex-col items-center gap-5 text-center text-white mt-6'>
            {/* text */}
            <TextMobile />

            {/* social */}
            <SocialMobile />

        </div>
    );
}

export default DescriptionMobile;