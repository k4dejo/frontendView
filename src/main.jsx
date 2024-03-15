import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import '@radix-ui/themes/styles.css';
import { Theme  } from '@radix-ui/themes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
          <Theme appearance="light" accentColor="orange" grayColor="slate" panelBackground="solid">
            <App />
          </Theme>
          {/* <html>
            <body>
            </body>
          </html> */}
    </BrowserRouter>
  </React.StrictMode>,
)