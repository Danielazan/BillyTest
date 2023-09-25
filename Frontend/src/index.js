import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MachianryContextProvider from "Context/Machinary"
import { DashboardProvider } from 'Pages/Admin Page/Admin';
import ManagerContextProvider from "Context/Manager"

import TeamContextProvider from "Context/Team"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <MachianryContextProvider>
      <ManagerContextProvider>
          <DashboardProvider>
            <TeamContextProvider>
              <App/>
            </TeamContextProvider>
            
          </DashboardProvider>
      </ManagerContextProvider>
    </MachianryContextProvider>
  </React.StrictMode>
);

