import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/hooks/useTheme'

type ModeToggleProps = {
    size: string
}

const ModeToggle = (props: ModeToggleProps) => {
    const { size } = props
    const { theme, setTheme } = useTheme()

    const buttonClickHandler = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="link" size="icon" onClick={buttonClickHandler}>
                    <Sun
                        className={`h-[${size}] w-[${size}] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`}
                    />
                    <Moon
                        className={`absolute h-[${size}] w-[${size}] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`}
                    />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}

export default ModeToggle
