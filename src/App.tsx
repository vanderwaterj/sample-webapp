import { ThemeProvider } from '@/components/theme-provider'
import AppProvider from '@/components/app-provider'

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <AppProvider />
        </ThemeProvider>
    )
}

export default App
