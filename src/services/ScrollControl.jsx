import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollControl() {
    const location = useLocation();

    useEffect(() => {
        // Ostavi prazno da ne skroluje nigde
    }, [location]);

    return null;
}

export default ScrollControl;
