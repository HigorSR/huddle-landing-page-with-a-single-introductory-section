import { LuInstagram } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";

function SocialMobile() {
    return (
        <div className='flex gap-4 mt-10'>
            <div className='border-2 rounded-full hover:text-Soft-Magenta hover:border-Soft-Magenta cursor-pointer'>
                <LuFacebook className="m-2" />
            </div>
            <div className='border-2 rounded-full hover:text-Soft-Magenta hover:border-Soft-Magenta cursor-pointer'>
                <LuTwitter className="m-2" />
            </div>
            <div className='border-2 rounded-full hover:text-Soft-Magenta hover:border-Soft-Magenta cursor-pointer'>
                <LuInstagram className="m-2" />
            </div>
        </div>
    );
}

export default SocialMobile;