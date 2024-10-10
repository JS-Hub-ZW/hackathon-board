import { ReactNode } from 'react'
import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
  ChakraProviderProps
} from '@chakra-ui/react'
import theme from '../lib/theme'

interface ChakraProps {
  cookies: string
  children: ReactNode
}

export function Chakra({ cookies, children }: ChakraProps) {
  const colorModeManager = 
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export default Chakra


export async function ChakraProviderServer({ children }: { children: ReactNode }) {
  const { cookies } = await import('next/headers')
  const cookieStore = cookies()
  return <Chakra cookies={cookieStore.toString()}>{children}</Chakra>
}