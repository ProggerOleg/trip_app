import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google'
const root = ReactDOM.createRoot(document.getElementById('root'));

export default App
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="955108822743-99vrrda1gvr7t0es0g5ooe3dov0tjuo6.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>

  </React.StrictMode>
);
