import React from 'react';
import { Container } from './components/componentStyled';
import { Route, Routes } from 'react-router';
import Home from './components/home/Home';
import { Toaster } from 'react-hot-toast';
import Auth from './page/Auth/Auth';
import Sidebar from './sidebar/Sidebar';
import Layout from './Layout/Layout';
import Dashboard from './page/dashboard/Dashboard';

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/auth'} element={<Auth />} />
        <Route
          path={'/board'}
          element={
            <Sidebar>
              <Layout>
                <Dashboard />
              </Layout>
            </Sidebar>
          }
        />
      </Routes>
    </>
  );
};

export default App;
