import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Configurator } from './configurator'
import { DesktopPropertiesProvider } from './store/DesktopContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DesktopPropertiesProvider>
      <Configurator
        changeConfiguratorHandler={(state) => {
          console.log('change configurator, state=', state)
        }}
      />
    </DesktopPropertiesProvider>
  </StrictMode>
)
