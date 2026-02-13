import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import Api from './sub/Api';
import Contact from './sub/Contact';
import MovieDetail from './sub/MovieDetail';
import RouterEx from './sub/RouterEx';
import NotFound from './component/NotFound';
import Detail from './sub/Detail';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/api' element={<Api />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/movie_detail' element={<MovieDetail />} />
        <Route path='/router_ex' element={<RouterEx />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/movie/:id' element={<Detail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
