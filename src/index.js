import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WinTicket from './components/winTicket/WinTicket';
import { Provider } from 'react-redux'
import stores from './store/stores'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={stores}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/win" element={<WinTicket />} />
      </Routes>
    </BrowserRouter>

  </Provider>
);

