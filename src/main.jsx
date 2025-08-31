import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense >
      <BrowserRouter>
        <Routes>
            <Route path='/:name' element={ <App /> }/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
)
