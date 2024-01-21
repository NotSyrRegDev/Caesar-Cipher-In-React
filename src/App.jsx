import React from 'react';
import { AppProvider } from './context/AppContext.jsx';
import {  BrowserRouter,  Route,   Routes, } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import EncryptPage from './pages/EncryptPage.jsx';
import DecryptPage from './pages/DecryptPage.jsx';
import EncryptResult from './pages/EncryptResult.jsx';
import DecryptResult from './pages/DecryptResult.jsx';


const App = () => {
  return (
    <AppProvider>

   <BrowserRouter>
       <Routes>

          <Route
            path="/"
           element={
              <HomePage />
         }
        />

      <Route
            path="/encrypt"
           element={
                  <EncryptPage />
         }
        />

      <Route
            path="/encrypt-result"
           element={
                  <EncryptResult />
         }
        />

          <Route
            path="/decrypt"
           element={
                  <DecryptPage />
         }
        />

          <Route
            path="/decrypt-result"
           element={
                  <DecryptResult />
         }
        />



       </Routes>

    </BrowserRouter>
    </AppProvider>
  )
}

export default App
