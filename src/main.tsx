import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Scene } from './widget/scene'
import { Settings } from './widget/settings'
import { DeskProvider } from './store/DeskContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DeskProvider>
      <main className="mt-10">
        <h1>Конфигуратор стола</h1>
        <div className="flex gap-5">
          <Scene />
          <Settings />
        </div>
      </main>
    </DeskProvider>
  </StrictMode>
)
