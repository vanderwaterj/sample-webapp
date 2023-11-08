import React from 'react'

import { Rocket } from 'lucide-react'

import ModeToggle from './ui/mode-toggle'

const MainMenuBar: React.FC = () => {
    return (
        <div className="container flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
                <a className="mr-6 flex items-center space-x-2" href="/">
                    <Rocket className="h-8 w-8 rotate-0 scale-100 transition-all" />
                    <div>
                        <span className="hidden font-bold sm:inline-block p-0">
                            webapp
                        </span>
                    </div>
                </a>
            </div>
            <div className="mr-4 hidden md:flex">
                <ModeToggle size="1rem" />
            </div>
        </div>
    )
}

export default MainMenuBar
