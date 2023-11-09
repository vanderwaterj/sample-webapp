import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';
import { TailwindTextSize } from '@/types/tailwindTypes';

type ModeToggleProps = {
    textSize?: TailwindTextSize;
};

const ModeToggle = ({ textSize = 'text-base' }: ModeToggleProps) => {
    const { theme, setTheme } = useTheme();

    const buttonClickHandler = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div
            onClick={buttonClickHandler}
            className="relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors justify-between"
        >
            <span className={`select-none ${textSize}`}>Toggle theme</span>
            <Button variant="link" size="icon">
                <Sun
                    className={`rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`}
                />
                <Moon
                    className={`absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`}
                />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    );
};

export default ModeToggle;
