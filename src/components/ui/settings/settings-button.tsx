import { useState } from 'react';

import { Settings, UserCircle, HelpCircle, Globe } from 'lucide-react';

import { Button } from '@/components/ui/button';
import ModeToggle from '@/components/ui/mode-toggle';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { SettingsFieldProps } from '@/components/ui/settings/settings-field';
import SettingsMenuContent from '@/components/ui/settings/settings-menu-content';

const settingsFields: SettingsFieldProps[] = [
    {
        text: 'Account Settings',
        icon: <UserCircle />,
    },
    {
        text: 'Language Settings',
        icon: <Globe />,
    },
    {
        text: 'Help',
        icon: <HelpCircle />,
    },
];

const SettingsButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Popover onOpenChange={() => onOpenHandler()}>
            <PopoverTrigger>
                <Button variant="link" size="icon">
                    <Settings
                        className={`transition-all ${
                            isOpen ? 'rotate-90' : 'rotate-0'
                        }`}
                    />
                </Button>
                <span>
                    <span className="sr-only">Toggle settings</span>
                </span>
            </PopoverTrigger>
            <PopoverContent>
                <ModeToggle textSize="text-sm" />
                <Separator />
                <SettingsMenuContent settingsFields={settingsFields} />
            </PopoverContent>
        </Popover>
    );
};

export default SettingsButton;
