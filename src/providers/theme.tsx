import { ChakraProvider } from "@chakra-ui/react"

type VirmonThemeProviderProps = {
    children: React.ReactNode
}

export function VirmonThemeProvider({ children }: VirmonThemeProviderProps) {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}
