import React from 'react'

// import { ModeToggle } from '@/components/ui/mode-toggle'
import MainMenuBar from '@/components/main-menu-bar'

const AppProvider: React.FC = () => {
    return (
        <>
            <div className="hidden h-full flex-col md:flex">
                <div className="container flex flex-row items-start justify-between space-y-2 py-4 md:flex">
                    <MainMenuBar />
                </div>
            </div>
        </>
    )
}

export default AppProvider
