import React from 'react';

// import { ModeToggle } from '@/components/ui/mode-toggle'
import MainMenuBar from '@/components/ui/main-menu-bar';
import MainPageContent from '@/components/ui/main-page-content';

const AppProvider: React.FC = () => {
    return (
        <>
            <MainMenuBar />
            <MainPageContent />
        </>
    );
};

export default AppProvider;
