import AppProvider from '@/components/app-provider'
import { ThemeProvider } from '@/components/theme-provider'

function App() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <AppProvider />
        </ThemeProvider>
    )
}

export default App
