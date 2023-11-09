import React from 'react';

import { Rocket } from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import SettingsButton from '@/components/ui/settings/settings-button';

const MainMenuBar: React.FC = () => {
    return (
        <header className="sticky top-0 z-30 bg-background hidden h-full flex-col md:flex ">
            <div className="container flex flex-row items-start justify-between space-y-2 py-4 md:flex">
                <div className="container flex h-14 items-center justify-between">
                    <div className="mr-4 hidden md:flex">
                        <a
                            className="mr-6 flex items-center space-x-2"
                            href="/"
                        >
                            <Rocket className="h-8 w-8 rotate-0 scale-100 transition-all" />
                            <div className="flex flex-col items-center">
                                <p className="font-bold text-lg leading-none">
                                    webapp
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="mr-4 hidden md:flex">
                        <SettingsButton />
                    </div>
                </div>
            </div>
            <Separator />
        </header>
    );
};

export default MainMenuBar;
