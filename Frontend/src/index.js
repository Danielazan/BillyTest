import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MachianryContextProvider from "Context/Machinary"
import { DashboardProvider } from 'Pages/Admin Page/Admin';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MachianryContextProvider>
      <DashboardProvider>
          <App/>
      </DashboardProvider>
          
    </MachianryContextProvider>
  </React.StrictMode>
);

