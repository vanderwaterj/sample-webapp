import { useState } from 'react';

import {
    Settings,
    UserCircle,
    HelpCircle,
    Globe,
    Moon,
    Sun,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import AccountSettingsDialog from '@/components/ui/dialogs/account-settings-dialog';
import HelpDialog from '@/components/ui/dialogs/help-dialog';
import LanguageSettingsDialog from '@/components/ui/dialogs/language-settings-dialog';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { SettingsFieldProps } from '@/components/ui/settings/settings-field';
import SettingsMenuContent from '@/components/ui/settings/settings-menu-content';
import { useTheme } from '@/hooks/useTheme';

const SettingsButton = () => {
    const { theme, setTheme } = useTheme();

    const settingsFields: SettingsFieldProps[] = [
        {
            text: 'Toggle Theme',
            icons: [<Moon key={0} />, <Sun key={1} />],
            selectedIconIndex: theme === 'dark' ? 0 : 1,
            clickHandler: () => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
            },
        },
        {
            text: 'Account Settings',
            icon: <UserCircle />,
            dialogContent: AccountSettingsDialog,
        },
        {
            text: 'Language Settings',
            icon: <Globe />,
            dialogContent: LanguageSettingsDialog,
        },
        {
            text: 'No Icon',
        },
        {
            text: 'Help',
            icon: <HelpCircle />,
            dialogContent: HelpDialog,
        },
    ];

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
            <PopoverContent align="end">
                <SettingsMenuContent settingsFields={settingsFields} />
            </PopoverContent>
        </Popover>
    );
};

export default SettingsButton;
