import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';

// Ortam değişkenini doğru şekilde alıyoruz
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Anahtarın varlığını kontrol ediyoruz, yoksa hata fırlatıyoruz
if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

// React uygulamasını render ediyoruz
createRoot(document.getElementById('root')).render(
  // ClerkProvider'a publishableKey'i doğru şekilde, süslü parantez içinde iletiyoruz
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);