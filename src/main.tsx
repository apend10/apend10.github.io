import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Set default theme class on document
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('theme');
  if (!savedTheme) {
    localStorage.setItem('theme', 'light');
  }
  if (savedTheme === 'arsenal') {
    document.documentElement.classList.add('arsenal');
  } else if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }
}

createRoot(document.getElementById("root")!).render(
  <div className="w-full min-h-screen overflow-x-hidden">
  <StrictMode>
    <App />
  </StrictMode>
  </div>,
);
