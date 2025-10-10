import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Tailwind CSS
import App from './App';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = createRoot(container); // 👈 React 18 API

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Still optional
serviceWorker.unregister();
