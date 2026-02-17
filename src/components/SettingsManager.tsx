import React, { useEffect } from 'react';
import { initTheme } from '../store/themeStore';

const SettingsManager: React.FC = () => {
    useEffect(() => {
        // Initialize theme Store (which syncs with cookie/html)
        initTheme();
    }, []);

    // No longer renders a dialog, just initializes global theme state
    return null;
};

export default SettingsManager;
