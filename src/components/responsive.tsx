import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const MobileComponent = dynamic(() => import('./mobile/mobile'));
const DesktopComponent = dynamic(() => import('./desktop/desktop'));

const ResponsiveComponent: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    if (windowWidth === 0) {
        return null;
    }

    return (
        <div>
            {windowWidth < 1280 ? <MobileComponent /> : <DesktopComponent />}
        </div>
    );
};

export default ResponsiveComponent;