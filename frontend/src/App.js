import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
