import React from 'react';
import ReactDOM from 'react-dom/client';
import {NextUIProvider} from "@nextui-org/react";
import './css/index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NextUIProvider>
    <main className="dark text-foreground bg-background">
    <App />
    </main>

    </NextUIProvider>
  </React.StrictMode>
);
