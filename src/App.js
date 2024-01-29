import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/home/Home';
import { Toaster } from 'react-hot-toast';
import Auth from './page/Auth/Auth';
import Sidebar from './sidebar/Sidebar';
import Layout from './Layout/Layout';
import Dashboard from './page/dashboard/Dashboard';
import Plans from './page/marketingPlan/Plans';
import CreateNewBoard from './page/newBoard/CreateNewBoard';
import Map from './page/roadMap/Map';

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/auth'} element={<Auth />} />
        <Route path={'/board'} element={<Sidebar><Layout><Dashboard /></Layout></Sidebar>} />
        <Route path={'/map'} element={<Sidebar><Layout><Map /></Layout></Sidebar>} />
        <Route path={'/plans'} element={<Sidebar><Layout><Plans /></Layout></Sidebar>} />
        <Route path={'/newBoard'} element={<Sidebar><Layout>< CreateNewBoard /></Layout></Sidebar>} />
      </Routes>
    </>
  );
};

export default App;
