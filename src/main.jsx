import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

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
